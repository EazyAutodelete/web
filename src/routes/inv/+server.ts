import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET() {
  throw redirect(
    301,
    "https://discord.com/oauth2/authorize?client_id=746453621821931634&permissions=430033988688&scope=bot%20applications.commands&redirect_uri=https%3A%2F%2Feazyautodelete.xyz%2Freturn&response_type=code"
  );
}
