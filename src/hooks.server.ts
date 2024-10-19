import { getPage, getPageTagForLocalizedPageName, locale } from "$lib/i18n";
import { loadLocales } from "$lib/loadLocales";
import { routeMap } from "$lib/routeMap";
import { error, redirect } from "@sveltejs/kit";
import { get } from "svelte/store";

let loaded = false;
loadLocales();

const locales = ["en", "de"];

export async function handle({ event, resolve }) {
	if (!loaded) {
		await loadLocales();
		loaded = true;
	}

	const currentPathLang = event.url.pathname.split("/")[1];
	if (!currentPathLang) {
		const locale = event.request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
		throw redirect(302, `/${locale || "en"}` + event.url.pathname + event.url.search + event.url.hash);
	}

	locale.set(currentPathLang);

	if (locales.includes(currentPathLang)) {
		const currentPage = event.url.pathname.split("/")[2];
		if (currentPage) {
			const pageTag = getPageTagForLocalizedPageName(currentPage);
			const newPage = getPage(pageTag);
			const more = event.url.pathname.split("/").slice(3).join("/");
			console.log({ currentPage, locale: get(locale), pageTag, newPage });
			if (currentPage !== newPage) {
				throw redirect(
					301,
					`/${currentPathLang}/${newPage}${more.startsWith("/") ? more : "/" + more}` +
						event.url.search +
						event.url.hash
				);
			}
		}
	}

	return resolve(event);
}
