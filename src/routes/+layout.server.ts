import { dictionary } from "$lib/i18n.js";
import { get } from "svelte/store";

let incident:
	| undefined
	| {
			id: number;
			style: string;
			title: string;
			content: string;
			pin: number;
			createdDate: string;
			lastUpdatedDate: string;
	  } = undefined;

let lastUpdated = 0;

export const load = async function ({ fetch }) {
	// if (lastUpdated + 1000 * 60 < Date.now()) loadIncidents(fetch);
	return { incident, dic: get(dictionary) };
};

async function loadIncidents(fetch: any) {
	try {
		const req = await fetch("https://status.eazyautodelete.xyz/api/status-page/bot");
		if (!req) return;

		const data = await req.json();
		if (!data) return;

		const incidentData = data.incident;
		if (!incidentData) return;

		incident = incidentData;
	} catch (err) {
		console.error(err);
	}
}
