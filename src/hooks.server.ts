import { getPage, getPageTagForLocalizedPageName, loadLocales, locale } from "$lib/i18n";
import { routeMap } from "$lib/routeMap";
import { error, redirect } from "@sveltejs/kit";

let loaded = false;
loadLocales();

const locales = ["en", "de"];

export async function handle({ event, resolve }) {
	if (!loaded) {
		await loadLocales();
		loaded = true;
	}

	const currentPathLang = event.url.pathname.split("/")[1];
	if (!locales.includes(currentPathLang)) {
		throw redirect(
			301,
			"/en" + event.url.pathname.replace(currentPathLang, "").replace("/", "") + event.url.search + event.url.hash
		);
	}

	locale.set(currentPathLang);

	const currentPage = event.url.pathname.split("/")[2];
	if (currentPage) {
		const pageTag = getPageTagForLocalizedPageName(currentPage);
		const newPage = getPage(pageTag);
		if (currentPage !== newPage) {
			throw redirect(301, `/${currentPathLang}/${newPage}` + event.url.search + event.url.hash);
		}
	}

	return resolve(event);
}