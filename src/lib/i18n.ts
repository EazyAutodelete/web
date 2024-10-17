import { derived, get, writable, type Writable } from "svelte/store";
import { routeMap } from "./routeMap";

export const locale = writable("en");

export const dictionary: Writable<{ [lang: string]: { [key: string]: string } }> = writable({});

const translate = (key: string) => {
	return get(dictionary)[get(locale)]?.[key] || get(dictionary)?.["en"]?.[key] || key;
};

const getUrl = (page: string) => {
	if (page.startsWith("/")) page = page.replace("/", "");
	return "/" + get(locale) + (page ? "/" : "") + (routeMap[get(locale)]?.[page] || routeMap["en"]?.[page] || page);
};

export const getPage = (page: string) => {
	return routeMap[get(locale)]?.[page] || routeMap["en"]?.[page] || page;
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

export function loadLocales() {
	return Promise.all(["en", "de"].map(lang => loadLanguage(lang)));
}

const token = `wlp_uv4VKuOiCCJctsdC4w7sAwhvPzueAlAfoPOl`;
async function loadLanguage(lang: string) {
	const { existsSync, mkdirSync, writeFileSync } = await import("fs");

	const result = await fetch(
		`https://translate.eazyautodelete.xyz/api/translations/eazyautodelete/website/${lang}/file/`,
		{
			headers: {
				Authorization: `Token ${token}`,
			},
		}
	).catch(console.error);

	if (!result) return;

	const data = await result.json();

	if (!existsSync("./i18n")) mkdirSync("./i18n");
	writeFileSync(`./i18n/${lang}.json`, JSON.stringify(data, null, 2));

	const dic = get(dictionary);

	dic[lang] = data;

	dictionary.set(dic);
}
