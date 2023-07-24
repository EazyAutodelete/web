import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  throw redirect(301, "https://discord.gg/9AKqaza");
}
