import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET() {
	throw redirect(301, "/en/return");
}
