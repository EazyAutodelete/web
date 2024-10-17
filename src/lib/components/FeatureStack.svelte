<script lang="ts">
	import { slide } from "svelte/transition";
	import { animate, skipFeatureCycle } from "../../routes/stores";
	import { onDestroy, onMount, tick } from "svelte";
	import { page } from "$app/stores";
	import { locale } from "$lib/i18n";

	export let options: string[];
	export let type: "buttonLeft" | "buttonRight" = "buttonLeft";
	export let providedType = type?.toString();

	const sections = 3;

	let selectedSection = 0;

	const selectSection = async (section: number, s?: boolean) => {
		if (!s) {
			clearInterval(t);
			skipFeatureCycle.set(true);

			setTimeout(() => {
				clearInterval(t);
				skipFeatureCycle.set(false);
				if (!$animate) return;
				t = setInterval(() => {
					if ($skipFeatureCycle) return;
					const nextSection = (selectedSection + 1) % sections;
					selectSection(nextSection, true);
				}, 5000);
			}, 15000);
		}

		selectedSection = section;
	};

	let t = $animate
		? setInterval(() => {
				if ($skipFeatureCycle) return;
				const nextSection = (selectedSection + 1) % sections;
				selectSection(nextSection, true);
			}, 5000)
		: 0;

	let containerHeight = 0;
	$: containerHeight;
	let container: Element;
	const calcHeight = () => {
		if (!container) return;

		const heights = Array.from(container.children).flatMap((_, i) => {
			selectedSection = i;

			return Array.from(container.children).map(div => div.scrollHeight);
		});

		selectedSection = 0;

		containerHeight = Math.max(...heights);
	};

	let u: undefined | (() => void);
	onMount(() => {
		container.querySelectorAll("img").forEach(img => {
			img.addEventListener("load", calcHeight);
		});

		calcHeight();
		resize();

		u = locale.subscribe(() => {
			tick().then(() => {
				calcHeight();
			});
		});
	});

	onDestroy(() => {
		u && u();
	});

	const resize = () => {
		if (width >= 1024) type = providedType as typeof type;
		else type = "buttonLeft";
	};

	let width: 0;
</script>

<svelte:window bind:innerWidth={width} on:resize={resize} />

<div class="flex stack flex-wrap lg:flex-nowrap" style="min-height: {containerHeight}px;">
	<div
		class="select space-y-4 lg:max-width-1/3 order-1"
		class:lg:order-3={type === "buttonRight"}
		class:right={type === "buttonRight"}
		class:left={type === "buttonLeft"}
	>
		<button
			class="shadow-lg text-left py-2 px-4 rounded-lg"
			on:click={() => selectSection(0)}
			class:selected={0 === selectedSection}
			class:right={type === "buttonRight"}
			class:left={type === "buttonLeft"}
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[0]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3">
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
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[1]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3">
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
		>
			{#if type === "buttonRight"}
				<svg fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3 right">
					<path
						d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"
					/>
				</svg>{/if}
			{options[2]}
			{#if type === "buttonLeft"}
				<svg style="transform: translateY(-1px)" fill="#fff" viewBox="0 0 319 511.61" height="12px" class="inline ps-3">
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
		style="min-height: {containerHeight ? containerHeight + 'px' : '100%'};"
	>
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
		flex-grow: 1;

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
		}
	}
</style>
