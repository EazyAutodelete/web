import { PUBLIC_API_URL } from "$env/static/public";
import { ACCESS_TOKEN_COOKIE_NAME } from "$lib/constants";
import { addError, logError } from "$lib/notifications/error";

function getCookie(name: string) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()!.split(";").shift();
}

export type FetchState<T = any> =
	| { isLoading: true; ok: false; data: null; status: null; error: null }
	| { isLoading: false; ok: true; data: T; status: number; error: null }
	| { isLoading: false; ok: false; data: null; status: number | null; error: string | Error };

export function fetchData<T = any>(
	url: string,
	options: {
		requestOptions?: RequestInit;
		requestName?: string;
		noError?: boolean;
	} = {}
) {
	let state = $state<FetchState<T>>({
		isLoading: true,
		ok: false,
		data: null,
		status: null,
		error: null,
	});

	url = url.startsWith("/") ? PUBLIC_API_URL + url : "/" + url;

	const errorString =
		`Failed to fetch ${options.requestName || url.replace("api/", "")}` +
		(url.includes("billing") ? "from Billing API." : url.includes("api/") ? " from API." : ".");

	async function execute() {
		state = {
			isLoading: true,
			ok: false,
			data: null,
			status: null,
			error: null,
		};

		try {
			const response = await fetch(url, {
				...options.requestOptions,
			});

			if (!response.ok) {
				if (!options.noError) {
					addError(errorString);
					logError(response.status, response.statusText, response.url);
				}
				state = {
					isLoading: false,
					ok: false,
					data: null,
					status: response.status,
					error: response.statusText,
				};
				return;
			}

			try {
				const result = await response.json();

				state = {
					isLoading: false,
					ok: response.ok,
					data: result,
					status: response.status,
					error: null,
				};
			} catch (e) {
				if (!options.noError) {
					addError(errorString);
					logError(500, "Failed to parse JSON", String(e));
				}
				state = {
					isLoading: false,
					ok: false,
					data: null,
					status: response.status,
					error: "Failed to parse JSON",
				};
			}
		} catch (error) {
			if (!options.noError) {
				addError(errorString);
				logError(error as number, error as string, error as string);
			}

			state = {
				isLoading: false,
				ok: false,
				data: null,
				status: null,
				error: error as string | Error,
			};
		}
	}

	return {
		get isLoading() {
			return state.isLoading;
		},
		get ok() {
			return state.ok;
		},
		get data() {
			return state.data;
		},
		get status() {
			return state.status;
		},
		get state() {
			return state;
		},
		do: execute,
	};
}
