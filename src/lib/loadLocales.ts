import { get } from "svelte/store";
import { dictionary } from "./i18n";
import en from "./i18n/en.json"
import de from "./i18n/de.json"
import es from "./i18n/es.json"
import pl from "./i18n/pl.json"
import fr from "./i18n/fr.json"
import pt from "./i18n/pt_BR.json"

export function loadLocales() {
	const dic = get(dictionary);
	dic["en"] = en;
	dic["de"] = de;
	dic["es"] = es;
	dic["pl"] = pl;
	dic["fr"] = fr;
	dic["pt_BR"] = pt;

	dictionary.set(dic);
}