import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET({}) {
	throw redirect(301, "https://top.gg/bot/746453621821931634/vote");
}
