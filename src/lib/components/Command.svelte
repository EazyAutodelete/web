<script lang="ts">
	import Alert from "./Alert.svelte";

	export let name: string;

	let copiedAlert = false;
	let copiedIcon = false;
	let t: undefined | NodeJS.Timeout;

	const copy = () => {
		clearTimeout(t);
		navigator.clipboard.writeText(`/${name}`);

		copiedIcon = true;
		copiedAlert = true;

		t = setTimeout(() => {
			copiedIcon = false;

			setTimeout(() => {
				copiedAlert = false;
			}, 1750);
		}, 1250);
	};
</script>

{#if copiedAlert}
	<Alert type="success" title="Copied" text="Command copied to clipboard." duration={2500} />
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<code on:click={copy}
	>/{name}
	{#if !copiedIcon}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path
				fill-rule="evenodd"
				d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"
			/>
			<path
				d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
			/>
			<path
				d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
			/>
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<path
				fill-rule="evenodd"
				d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
			/>
			<path
				d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
			/>
			<path
				d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
			/>
		</svg>
	{/if}
</code>

<style lang="scss">
	code {
		background-color: #1b1c1c;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-weight: bold;
		display: inline-block;

		&:hover {
			cursor: pointer;
		}

		svg {
			fill: rgb(202, 202, 202);
			display: inline-block;
			transform: translateY(-0.125rem);
			height: 16px;
			width: 16px;
		}
	}
</style>
