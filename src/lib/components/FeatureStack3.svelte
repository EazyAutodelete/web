<script>
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import FeatureStack from "./FeatureStack.svelte";

	export let stats;
</script>

<FeatureStack options={[$_("unlimitedChannels"), $_("freeToUse"), $_("fast")]}>
	<div slot="card0">
		{#each $_("unlimitedChannelsText").split("\n") as line}
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
		{#each $_("freeToUseText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}
	</div>

	<div slot="card2">
		{#each $_("fastText").split("\n") as line}
			<p>
				{@html replaceNameWithLink(line)
					.replace("%statsServers", Number(15600).toLocaleString())
					.replace("%statsUsers", Number(7_000_000).toLocaleString())
					.replace("%statsWeek", (Math.floor(stats[604800000] / 100) * 100).toLocaleString())
					.replace("%statsMonth", (Math.floor(stats[2592000000] / 100) * 100).toLocaleString())
					.replace("%statsYear", (Math.floor(stats[31536000000] / 1000) / 1000).toLocaleString())}
			</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2"><img src="" alt="" /></div>
			<div class="w-1/2"><img src="" alt="" /></div>
		</div>
	</div>
</FeatureStack>

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
