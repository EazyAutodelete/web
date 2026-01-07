const GATEWAY_URL = "https://shards.eazyautodelete.xyz/status";

let cache: { shardId: number, workerId: number, state: number, data: { available: number, unavailable: number }, rtt: number }[] = [];

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
		fetch(GATEWAY_URL.replace("/shard", "/status"), {
			headers: {
				"Content-Type": "application/json",
			},
			method: "GET"
		}),
		new Promise(resolve => setTimeout(() => resolve(null), 750)),
	]).catch(e => console.error(e));

	if (shards) {
		type APIShardData = {
			id: number,
			data: {
				available: number,
				unavailable: number,
			},
			latency: number,
			status: string,
			node: string,
			last_data: Date
		}

		const fetched = await (<any>shards).json() as { shards: APIShardData[] };

		console.log(fetched)

		cache = fetched.shards.map(shard => ({
			shardId: shard.id,
			workerId: Number(shard.node.split("-").pop()),
			state: shard.status === "Ready" ? 0 : shard.status === "Connecting" ? 1 : -1,
			data: {
				available: shard.data.available,
				unavailable: shard.data.unavailable,
			},
			rtt: shard.latency,
		}));
	}

	lastUpdated = Date.now();

	updating = false;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	if (lastUpdated + 10000 < Date.now()) updateShards();

	return { shards: cache };
}
