import { error } from "@sveltejs/kit";
import usecases from "$lib/data/usecases.json";

export const load = async ({ params }) => {
	const { example } = params;

	const page = usecases.find(usecase => usecase.id === example);

	if (!page) throw error(404, `Page not found`);

	return page;
};
