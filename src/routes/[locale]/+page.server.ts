import { error } from "@sveltejs/kit";

const cache = {
	guilds: { count: 27700 },
	messages: {
		all: 111_893_985,
		year: 31_876_256,
		month: 3_893_438,
		week: 2_581_721,
		day: 368_817,
	},
};
let updating = false;
updateStats();
async function updateStats() {
	if (updating) return;

	try {
		// updating = true;

		// const guildCount = await fetch("https://api.eazyautodelete.xyz/public/stats/guilds", {
		// 	headers: { "content-type": "application/json" },
		// }).catch(e => {
		// 	updating = false;
		// });
		// if (guildCount) {
		// 	const guildCountJson = await guildCount.json();

		// 	cache.guilds = guildCountJson?.count === 14200 ? { count: 27000 } : guildCountJson;

		// }

		// const messageCount = await fetch("https://api.eazyautodelete.xyz/public/stats/deleted-messages/all", {
		// 	headers: { "content-type": "application/json" },
		// }).catch(e => {
		// 	updating = false;
		// });
		// if (messageCount) {
		// 	const messageCountJson = await messageCount.json();

		// 	cache.messages = messageCountJson;
		// }

	} catch (e) {
		// ignore
	}
}

setInterval(updateStats, 1000 * 60 * 5);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const VALID_LOCALES = ["en", "de", "fr", "es", "pl", "pt"];
	if (!params.locale || !VALID_LOCALES.includes(params.locale)) throw error(404, "Language was not found");

	// if (lastUpdated + 1000 * 30 < Date.now()) await updateStats();

	return cache;
}
