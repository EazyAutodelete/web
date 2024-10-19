import usecases from "$lib/data/usecases.json";

export const load = () => {
	return {
		usecases: usecases.map(usecase => ({
			id: usecase.id,
			title: usecase.title,
			description: usecase.description,
			tags: usecase.tags,
			img: usecase.img || usecase.icon,
		})),
	};
};
