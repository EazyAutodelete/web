<script lang="ts">
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";
	import { animate, skipFeatureCycle } from "../../routes/stores";
	import FeatureStack from "./FeatureStack.svelte";

	let sections = 3;

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

		selectedSection = section; // Show the new section with a transition
	};

	let t = $animate
		? setInterval(() => {
				if ($skipFeatureCycle) return;
				const nextSection = (selectedSection + 1) % sections;
				selectSection(nextSection, true);
			}, 5000)
		: 0;
</script>

<FeatureStack options={[$_("userConfigs"), $_("modes"), $_("longDurations")]}>
	<div slot="card0">
		{#each $_("userConfigsText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/configs.webp" alt="" />
				<span class="desc">Menu to select a config</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/configs.webp" alt="" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
		</div>
	</div>

	<div slot="card1">
		{#each $_("modesText").split("\n") as line}
			<p>{@html replaceWordWithLink(line, "Modes", "https://docs.eazyautodelete.xyz/config/mode")}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<video class="rounded-lg shadow w-full" autoplay loop muted>
					<source src="/assets/vid/webm/mode-1.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
			<div class="w-1/2">
				<video class="rounded-lg shadow w-full" autoplay loop muted>
					<source src="/assets/vid/webm/mode-3.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<span class="desc">Mode 3 + 3 msg limit</span>
			</div>
		</div>
	</div>

	<div slot="card2">
		{#each $_("longDurationsText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}
		<div class="w-full flex space-x-4">
			<div class="w-1/2"><img src="" alt="" /></div>
			<div class="w-1/2"><img src="" alt="" /></div>
		</div>
	</div>
</FeatureStack>

<style lang="scss">
	.p {
		text-align: justify;
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
