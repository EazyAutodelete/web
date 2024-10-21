import axios from "axios";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

import { BotWithCustomProps } from "../../typings/bot.js";
import Module from "../Module.js";

export default class Translator extends Module {
	data: { [index: string]: { [index: string]: string } } = { en: {} };
	defaultLocale: string;
	languageNames: Map<string, string>;
	loadFromGit: boolean;
	loadFromI18n: boolean;
	locales: string[];
	token: string;

	constructor(bot: BotWithCustomProps, token: string) {
		super(bot);
		this.name = "Translator";

		this.token = token;
		this.locales = [];
		this.defaultLocale = "en";
		this.languageNames = new Map();
		this.loadFromI18n = true;
		this.loadFromGit = false;
	}

	public getDefaultLocale() {
		return this.defaultLocale;
	}

	public getLanguageCode(name: string) {
		return [...this.languageNames.entries()].find(([, v]) => v === name)?.[0];
	}

	public getLanguageName(code: string) {
		return this.languageNames.get(code);
	}

	public getLanguageNames() {
		return this.languageNames;
	}

	public getLanguageNamesArray() {
		return [...this.languageNames.values()];
	}

	public getLocales() {
		return this.locales;
	}

	public async loadLanguage(locale: string) {
		if (this.loadFromI18n) {
			const result = await axios
				.get(`https://translate.eazyautodelete.xyz/api/translations/eazyautodelete/commands/${locale}/file/`, {
					headers: {
						Authorization: `Token ${this.token}`,
					},
				})
				.catch(console.error);

			if (!result) return;

			if (!existsSync("./i18n")) mkdirSync("./i18n");
			writeFileSync(`./i18n/${locale}.json`, JSON.stringify(result.data, null, 2));

			const data = result.data;
			this.data[locale] = data;
			this.data[locale]!.languageName = this.languageNames.get(locale)!;
		} else if (this.loadFromGit) {
			const result = await axios
				.get(`https://raw.githubusercontent.com/EazyAutodelete/translations/main/commands/${locale}.json`, {
					responseType: "json",
				})
				.catch(console.error);

			if (!result || !result.data) return;

			if (!existsSync("./i18n")) mkdirSync("./i18n");
			writeFileSync(`./i18n/${locale}.json`, JSON.stringify(result.data, null, 2));

			const data = result.data;
			this.data[locale] = data;
		} else {
			if (!existsSync("./i18n")) mkdirSync("./i18n");

			const file = existsSync(`./i18n/${locale}.json`) ? readFileSync(`./i18n/${locale}.json`).toString() : "{}";
			if (!file) return;

			const data = JSON.parse(file);
			this.data[locale] = data || {};
		}
	}

	public async loadLocales() {
		let result: { code: string; name: string }[] = [];

		if (this.loadFromGit) {
			const req = await axios
				.get("https://api.github.com/repos/eazyautodelete/translations/contents/commands")
				.catch(() => null);

			if (!req || !req.data) this.loadFromGit = false;
			else result = req.data.map((x: any) => ({ code: x.name.replace(".json", "") }));
		}

		if (this.loadFromI18n) {
			const req = await axios
				.get("https://translate.eazyautodelete.xyz/api/projects/eazyautodelete/languages/", {
					headers: {
						Authorization: `${this.token}`,
					},
				})
				.catch(console.error);

			if (!req || !req.data) this.loadFromI18n = false;
			else result = req.data.map((x: { code: string; name: string }) => ({ code: x.code, name: x.name }));
		}

		result.map((x: any) => this.languageNames.set(x.code, x.name));

		this.locales = result.map(x => x.code);
		this.defaultLocale = "en";
	}

	public async loadMessages() {
		await this.loadLocales();

		await Promise.all(this.locales.map(async lang => await this.loadLanguage(lang)));

		this.bot.logger.success("[i18n] Loaded all languages");

		this.bot.managersReady.Translator = true;
	}

	public async reloadMessages() {
		await this.loadMessages();
	}

	public override async runOnStart(): Promise<void> {
		this.loadMessages();
	}

	public translate(message: string, language: string, ...args: string[]): string {
		if (message === "botNotReady")
			return "The bot is not ready yet. Please wait a few seconds and try again.\n%s".replace("%s", args[0] || "");

		let i18n = this.data?.[language]?.[message] || this.data[this.defaultLocale]?.[message];

		if (!i18n || typeof i18n !== "string") return message;

		args.map(x => (i18n = i18n!.replace("%s", x)));

		i18n = i18n.replaceAll("%s", "");

		return i18n || message;
	}

	public translateNoFallback(message: string, language: string, ...args: string[]): string | undefined {
		let i18n = this.data?.[language]?.[message];

		if (!i18n || typeof i18n !== "string") return undefined;

		args.map(x => (i18n = i18n!.replace("%s", x)));

		i18n = i18n.replaceAll("%s", "");

		return i18n;
	}
}
