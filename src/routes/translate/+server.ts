import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET() {
  throw redirect(301, "https://github.com/EazyAutodelete/translations#readme");
}
