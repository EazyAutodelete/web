<script lang="ts">
	import { slide } from "svelte/transition";
	import { onMount, tick } from "svelte";
	import { locale } from "$lib/i18n";
	import { page } from "$app/stores";

	export let options: string[];
	export let type: "buttonLeft" | "buttonRight" = "buttonLeft";
	export let providedType = type?.toString();
	export let ids: string[];

	const sections = 3;
	let selectedSection = 0;

	let container: Element;
	let containerHeight = 0;
	const heights: Set<number> = new Set();

	let calculated = false;
	let running = false;
	let before = 0;

	let width: 0;

	let t = setInterval(() => {
		const nextSection = (selectedSection + 1) % sections;
		selectSection(nextSection, false);
	}, 5000);

	const selectSection = async (section: number, stay = true, minus100 = false) => {
		if (stay) {
			clearInterval(t);

			setTimeout(
				() => {
					clearInterval(t);
					t = setInterval(() => selectSection((selectedSection + 1) % sections, false), 5000);
				},
				15000 - (minus100 ? 100 : 0)
			);
		}

		selectedSection = section;
	};

	const calcHeight = async () => {
		if (!container) return;

		if (running) await new Promise<void>(r => setInterval(() => !running && r(), 10));

		running = true;
		before = selectedSection;

		for (let i = 0; i < sections; i++) {
			selectedSection = i;

			await tick();

			Array.from(container.children).map(div => heights.add(div.scrollHeight));
		}

		containerHeight = Math.max(...heights.values());

		running = false;
		calculated = true;
		selectedSection = before;
	};

	onMount(() => {
		container.querySelectorAll("img, video").forEach(img => img.addEventListener("load", () => calcHeight()));

		calcHeight();
		resize();

		const hash = $page.url.hash;
		if (hash)
			tick().then(() => {
				const index = ids.indexOf(hash.slice(1));
				setTimeout(() => index !== -1 && selectSection(index, true, true), 100);
			});

		return locale.subscribe(() => tick().then(() => calcHeight()));
	});

	const resize = () => {
		if (width >= 1024) type = providedType as typeof type;
		else type = "buttonLeft";
	};

	$: containerHeight;
</script>

<svelte:window bind:innerWidth={width} on:resize={resize} />

<div class="flex stack flex-wrap lg:flex-nowrap" style="min-height: {containerHeight + 24}px;">
	<div
		class="select space-y-4 lg:max-width-1/3 order-1"
		class:lg:order-3={type === "buttonRight"}
		class:right={type === "buttonRight"}
		class:left={type === "buttonLeft"}
		role="tablist"
	>
		<button
			class="shadow-lg text-left py-2 px-4 rounded-lg"
			on:click={() => selectSection(0)}
			class:selected={0 === selectedSection}
			class:right={type === "buttonRight"}
			class:left={type === "buttonLeft"}
			role="tab"
			aria-selected={0 === selectedSection}
			id="tab-{ids[0]}"
			aria-controls={ids[0]}
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[0]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>
			{/if}
		</button>
		<button
			class="shadow-lg text-left py-2 px-4 rounded-lg"
			on:click={() => selectSection(1)}
			class:selected={1 === selectedSection}
			class:right={type === "buttonRight"}
			class:left={type === "buttonLeft"}
			role="tab"
			aria-selected={1 === selectedSection}
			id="tab-{ids[1]}"
			aria-controls={ids[1]}
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[1]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>
			{/if}
		</button>
		<button
			class="shadow-lg text-left py-2 px-4 rounded-lg"
			on:click={() => selectSection(2)}
			class:selected={2 === selectedSection}
			class:right={type === "buttonRight"}
			class:left={type === "buttonLeft"}
			role="tab"
			aria-selected={2 === selectedSection}
			id="tab-{ids[2]}"
			aria-controls={ids[2]}
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[2]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12" class="inline ps-3">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<div
		class:left={type === "buttonLeft"}
		class:right={type === "buttonRight"}
		class="section order-2"
		bind:this={container}
		style="min-height: {containerHeight}px;"
	>
		{#if calculated}
			{#key selectedSection}
				<div hidden={selectedSection !== 0} transition:slide class="body">
					<slot name="card0" />
				</div>

				<div hidden={selectedSection !== 1} transition:slide class="body">
					<slot name="card1" />
				</div>

				<div hidden={selectedSection !== 2} transition:slide class="body">
					<slot name="card2" />
				</div>
			{/key}
		{:else}
			{#key selectedSection}
				<div hidden={selectedSection !== 0} class="body">
					<slot name="card0" />
				</div>

				<div hidden={selectedSection !== 1} class="body">
					<slot name="card1" />
				</div>

				<div hidden={selectedSection !== 2} class="body">
					<slot name="card2" />
				</div>
			{/key}
		{/if}
	</div>
</div>

<style lang="scss">
	svg.right {
		transform: rotate(0.5turn) translateY(1px) !important;
		order: 1;
	}

	button {
		background-color: rgb(31 41 55);
		transition: all 0.2s;
		width: fit-content;
		white-space: nowrap;
		flex-wrap: nowrap;
		&:hover {
			background-color: rgb(55 65 81);
		}

		&.selected {
			background-color: rgb(55 65 81);

			&.right {
				margin-right: 0.5rem;
			}

			&.left {
				margin-left: 0.5rem;
			}
		}
	}

	.select {
		border-radius: 12px;
		height: auto;
		display: flex;
		flex-direction: column;

		@media screen and (max-width: 1024px) {
			width: 100%;
			align-items: center;
			padding-bottom: 1rem;
		}

		&.left {
			align-items: start;
		}

		&.right {
			align-items: end;
		}
	}

	.section {
		position: relative;
		// padding-left: 1rem;
		// flex-grow: 1;
		// padding: 1rem 1rem;
		height: fit-content;

		@media screen and (max-width: 1023px) {
			width: 100%;
		}

		@media screen and (min-width: 1024px) {
			&.left {
				padding-left: 1rem;
			}

			&.right {
				padding-right: 1rem;
			}
		}

		.body {
			padding: 1rem 1rem;
			border-radius: 8px;
			background-color: rgb(31 41 55);
			// display: block;
		}
	}
</style>
