import { derived, get, writable, type Writable } from "svelte/store";
import { routeMap } from "./routeMap";

export const locale = writable("en");

export const dictionary: Writable<{ [lang: string]: { [key: string]: string } }> = writable({});

const translate = (key: string) => {
	return (get(dictionary)[get(locale)]?.[key] || get(dictionary)?.["en"]?.[key] || key)
		.replace("&auml;", "ä")
		.replace("&ouml;", "ö")
		.replace("&uuml;", "ü");
};

const getUrl = (page: string) => {
	if (page.startsWith("/")) page = page.replace("/", "");
	return "/" + get(locale) + (page ? "/" : "") + (routeMap[get(locale)]?.[page] || routeMap["en"]?.[page] || page);
};

export const getPage = (page: string, lang?: string) => {
	return routeMap[lang || get(locale)]?.[page] || routeMap["en"]?.[page] || page;
};

export const getPageTagForLocalizedPageName = (page: string) => {
	let tag: string = "";

	Object.entries(routeMap).find(([lang, map]) => {
		Object.entries(map).find(([k, v]) => {
			if (v === page) {
				tag = k;
			}
		});
	});

	return tag || page;
};

export const u = derived([locale], () => getUrl);

export const _ = derived([locale, dictionary], () => translate);

export function initI18n(lang: string) {
	locale.set(lang);
	// return Promise.resolve();
}
