import { locales } from "$lib/const.js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
	let locale = request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
	if (!locale || !locales.includes(locale)) locale = "en";

	throw redirect(301, `/${locale}/premium`);
}
