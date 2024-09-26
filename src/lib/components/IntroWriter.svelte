<script lang="ts">
	import { onMount } from "svelte";

	export let duration = 1750;

	const text1 = `The best & most customizable Autodelete Bot for Discord.`;
	const text2 = `Completely free & in unlimited channels!`;

	// let introText = "A Discord Bot to automatically delete messages.";
	let introText1 = text1;
	let introText2 = text2;

	onMount(() => {
		// const text = "A Discord Bot to automatically delete messages.";

		let i = 1; // maximum total time in ms
		const startTime = Date.now();

		const delay = (text: string) => {
			const elapsedTime = Date.now() - startTime;
			const remainingTime = duration - elapsedTime;
			const remainingChars = text.length - i;
			const maxDelay = Math.min(remainingTime / remainingChars, 50);
			return Math.floor(Math.random() * maxDelay) + 10;
		};

		const write = () => {
			introText1 = text1.slice(0, i);
			introText2 = i > 5 ? text2.slice(0, i - 5) : introText2;
			i++;
			if (i <= text1.length) {
				return setTimeout(write, delay(text1));
			}
		};
		write();
	});
</script>

<h2 aria-label={text1}>
	{@html introText1}
</h2>
<h2 aria-label={text2}>
	{@html introText2}
</h2>

<style lang="scss">
	h2 {
		font-size: large;
		font-weight: 400;
		padding: 0;
		/* letter-spacing: 0.05em; */

		@media (min-width: 1240px) {
			font-size: x-large;
		}
	}
</style>
