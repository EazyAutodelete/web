import { WEBLATE_TOKEN } from "$env/static/private";
import { get } from "svelte/store";
import { dictionary } from "./i18n";

export function loadLocales() {
	return Promise.all(["en", "de"].map(lang => loadLanguage(lang)));
}

async function loadLanguage(lang: string) {
	const { existsSync, mkdirSync, writeFileSync } = await import("fs");

	const result = await fetch(
		`https://translate.eazyautodelete.xyz/api/translations/eazyautodelete/website/${lang}/file/`,
		{
			headers: {
				Authorization: `Token ${WEBLATE_TOKEN}`,
			},
		}
	);

	if (!result) throw new Error("Failed to fetch translations");

	const data = await result.json();
	if (data?.detail === "Invalid token.") throw new Error("Invalid Weblate token");

	if (!existsSync("./i18n")) mkdirSync("./i18n");
	writeFileSync(`./i18n/${lang}.json`, JSON.stringify(data, null, 2));

	const dic = get(dictionary);

	dic[lang] = data;

	dictionary.set(dic);
}
