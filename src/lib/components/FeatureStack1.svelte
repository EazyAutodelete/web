<script lang="ts">
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";
	import FeatureStack from "./FeatureStack.svelte";

	// schemaOrg.set({ ...$schemaOrg, feature: [...$schemaOrg.feature, {
	// 	"@type": "PropertyValue",
	// 	"name": "User-defined configs",
	// 	"value": $_("userConfigsText")
	// },{
	// 	"@type": "PropertyValue",
	// 	"name": "Modes",
	// 	"value": $_("modesText")
	// },{
	// 	"@type": "PropertyValue",
	// 	"name": "Long Durations",
	// 	"value": $_("longDurationsText")
	// }
	// ] });
</script>

<FeatureStack
	options={[$_("userConfigs"), $_("modes"), $_("longDurations")]}
	ids={["user-configs", "modes", "long-durations"]}
>
	<section slot="card0" id="user-configs" role="tabpanel" aria-describedby="tab-user-configs">
		{#each $_("userConfigsText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img
					src="/assets/img/configs.webp"
					title="Menu to select a config8"
					alt="A Discord Embed listing 2 EazyAutodelete configs with their options. A dropdown to select a config at the bottom."
				/>
				<span class="desc">Menu to select a config</span>
			</div>
			<div class="w-1/2">
				<img
					src="/assets/img/mode-select.webp"
					title="Dropdown to select a mode"
					alt="A Discord Dropdown showing 4 Modes of EazyAutodelete."
				/>
				<span class="desc">Dropdown to select a mode</span>
			</div>
		</div>
	</section>

	<section slot="card1" id="modes" role="tabpanel" aria-describedby="tab-modes">
		{#each $_("modesText").split("\n") as line}
			<p>{@html replaceWordWithLink(line, "Modes", "https://docs.eazyautodelete.xyz/config/mode")}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div>
				<video autoplay loop muted playsinline style="height: 240px; width: auto">
					<source src="/assets/vid/webm/mode-1.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<p class="desc">Mode 1 + 10 sec limit</p>
			</div>
			<div>
				<video autoplay loop muted playsinline style="height: 240px; width: auto">
					<source src="/assets/vid/webm/mode-3.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<p class="desc">Mode 3 + 3 msg limit</p>
			</div>
		</div>
	</section>

	<section slot="card2" id="long-durations" role="tabpanel" aria-describedby="tab-long-durations">
		{#each $_("longDurationsText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/3">
				<p>Use of time units</p>
				<ul>
					<li><strong>Seconds:</strong> <code>s, sec, secs</code></li>
					<li><strong>Minutes:</strong> <code>m, min, mins</code></li>
					<li><strong>Hours:</strong> <code>h, hr, hrs</code></li>
					<li><strong>Days:</strong> <code>d, day, days</code></li>
				</ul>
			</div>
			<div class="w-1/3">
				<p>Correct use</p>
				<ul>
					<li><code>1mins 30sec</code></li>
					<li><code>5mins</code></li>
					<li><code>2hrs 3m</code></li>
					<li><code>1days 6hr 3min</code></li>
				</ul>
			</div>
			<div class="w-1/3">
				<p>Incorrect use</p>
				<ul>
					<li><code>1m30s</code></li>
					<li><code>2,3h</code></li>
					<li><code>1d6h3m</code></li>
					<li><code>1d 6hsr 3n</code></li>
				</ul>
			</div>
		</div>
	</section>
</FeatureStack>

<style lang="scss">
	p {
		text-align: justify;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	.desc {
		// font-size: small;
		color: #8d8d8d;
		margin: 0;
	}

	img {
		box-shadow:
			0 0 #0000,
			0 0 #0000,
			0 10px 15px -3px rgb(0 0 0 / 0.12),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 0.5rem;
	}

	video {
		height: 240px;
	}
</style>
