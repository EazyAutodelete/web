const cache = {
	guilds: { count: 12000 },
	messages: {
		all: 0,
		year: 0,
		month: 0,
		week: 0,
		day: 0,
	},
};
let lastUpdated = 0;
let updating = false;
updateStats();
async function updateStats() {
	if (updating) return;

	updating = true;

	const guildCount = await fetch("https://api.eazyautodelete.xyz/public/stats/guilds", {
		headers: { "content-type": "application/json" },
	}).catch(e => {
		updating = false;
	});
	if (guildCount) {
		const guildCountJson = await guildCount.json();

		cache.guilds = guildCountJson?.count === 11047 ? { count: 12000 } : guildCountJson;
	}

	const messageCount = await fetch("https://api.eazyautodelete.xyz/public/stats/deleted-messages/all", {
		headers: { "content-type": "application/json" },
	}).catch(e => {
		updating = false;
	});
	if (messageCount) {
		const messageCountJson = await messageCount.json();

		cache.messages = messageCountJson;
	}

	lastUpdated = Date.now();
}

setInterval(updateStats, 1000 * 60 * 5);

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	if (lastUpdated + 1000 * 30 < Date.now()) await updateStats();

	return cache;
}
