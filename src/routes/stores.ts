import { writable } from "svelte/store";

export const skipFeatureCycle = writable<boolean>(false);
export const animate = writable<boolean>(false);
