<script lang="ts">
	import { slide } from "svelte/transition";
	import { animate, skipFeatureCycle } from "../../routes/stores";
	import { onMount } from "svelte";
	import FeatureStack from "./FeatureStack.svelte";
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";

	let sections = 3;

	let selectedSection = 0;

	const selectSection = async (section: number, s?: boolean) => {
		if (!s) {
			skipFeatureCycle.set(true);
			clearInterval(t);

			setTimeout(() => {
				clearInterval(t);
				skipFeatureCycle.set(false);
				if (!$animate) return;
				t = setInterval(() => {
					if ($skipFeatureCycle) return;
					const nextSection = (selectedSection + 1) % sections;
					selectSection(nextSection, true);
				}, 10000);
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
</script>

<FeatureStack type="buttonRight" options={[$_("filtersForEverything"), $_("ignoreTarget"), $_("lazyload")]}>
	<div slot="card0">
		{#each $_("filtersForEverythingText").split("\n") as line}
			<p>
				{@html replaceNameWithLink(
					replaceWordWithLink(line, "Filters", "https://docs.eazyautodelete.xyz/config/filters")
				)}
			</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/filters.webp" alt="" />
				<span class="desc">Menu to select a config</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/configs.webp" alt="" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
		</div>
	</div>

	<div slot="card1">
		{#each $_("ignoreTargetText").split("\n") as line}
			<p>
				{@html replaceWordWithLink(
					line,
					"Ignore or Target messages",
					"https://docs.eazyautodelete.xyz/config/ignore-roles"
				)}
			</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/bots.webp" alt="Toggle author is bot or author isnt bot" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/roles.webp" alt="Toggle roles to ignore or target" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
		</div>
	</div>

	<div slot="card2">
		{#each $_("lazyloadText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}
	</div>
</FeatureStack>

<!--  -->

<style lang="scss">
	p {
		text-align: justify;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	.desc {
		font-size: small;
		color: #8d8d8d;
	}

	img,
	video {
		box-shadow:
			0 0 #0000,
			0 0 #0000,
			0 10px 15px -3px rgb(0 0 0 / 0.12),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 0.5rem;
	}
</style>
