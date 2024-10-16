import { error, json } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const { example } = params;

	const page = {
		title: "Page",
		guild: "Guild",
		guildtext: "Guild text",
		text: "",
		tags: ["gdgf"],
		configs: ["gfgf"],
		date: new Date(),
		icon: "",
		rank: "Admin",
		name: "gfddfg",
		avatar: "",
	};

	if (!page) throw error(404, `Page not found`);

	return page;
};

function getPage(example: string) {
	return fetch(`https://api.example.com/pages/${example}`).then(r => r.json());
}
