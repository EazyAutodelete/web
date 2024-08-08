// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

export type ShardData = {
	workerId: number;
	shardId: number;
	rtt: number;
	state: number;
	queue: number;
	data?: { guilds: string[]; unavailable: string[] };
};
