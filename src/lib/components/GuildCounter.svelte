<script>
	export let guilds = 15000;
	export let duration = 1750;

	import { onMount } from "svelte";

	let serverCount =
		Math.floor(guilds / Math.pow(10, Math.floor(Math.log10(guilds)))) * Math.pow(10, Math.floor(Math.log10(guilds)));

	$: serverCount;

	onMount(() => {
		guilds = Math.round(guilds / 100) * 100;
		const increment = Math.ceil(guilds / (duration / 10));

		const guildsInterval = setInterval(() => {
			serverCount = increment + serverCount;
			if (serverCount >= guilds) {
				serverCount = guilds;
				clearInterval(guildsInterval);
			}
		}, 10);
	});
</script>

<a href="#servers">
	<div class="stats shadow px-2 py-2 lg:py-4">
		<p>Used in <strong>{serverCount.toLocaleString()}+</strong> servers</p>
	</div>
</a>

<style lang="scss">
	.stats {
		width: fit-content;
		border-radius: 10px;
		background-color: #1b1c1c;
		// padding: 1rem 0.5rem;
		text-align: center;
		display: inline-block;
	}
</style>
