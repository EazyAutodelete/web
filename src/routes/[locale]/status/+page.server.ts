import { env } from "$env/dynamic/private"

const GATEWAY_URL = env.GATEWAY_URL;
const GATEWAY_AUTH = env.GATEWAY_AUTH;

let cache: any[] = [];

let lastUpdated = 0;
let updating = false;

updateShards();
async function updateShards() {
	if (updating)
		return await new Promise(resolve => {
			const t = setInterval(() => {
				if (!updating) resolve(void clearInterval(t));
			}, 100);
		});

	updating = true;

	const shards = await Promise.race([
		fetch(GATEWAY_URL, {
			headers: {
				"content-type": "application/json",
				"Authorization": GATEWAY_AUTH,
			},
		}),
		new Promise(resolve => setTimeout(() => resolve(null), 750)),
	]).catch(e => console.error(e));

	if (shards) {
		cache = await (<any>shards).json();
	}

	lastUpdated = Date.now();

	updating = false;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	if (lastUpdated + 1000 < Date.now()) updateShards();

	return { shards: cache };
}
