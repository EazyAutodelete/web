<script>
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import FeatureStack from "./FeatureStack.svelte";

	export let stats;
</script>

<FeatureStack
	options={[$_("unlimitedChannels"), $_("freeToUse"), $_("fast")]}
	ids={["unlimited-channels", "free-to-use", "fast-reliable"]}
>
	<div slot="card0" id="unlimited-channels" role="tabpanel" aria-describedby="tab-unlimited-channels">
		{#each $_("unlimitedChannelsText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}
	</div>

	<div slot="card1" id="free-to-use" role="tabpanel" aria-describedby="tab-free-to-use">
		{#each $_("freeToUseText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}
	</div>

	<div slot="card2" id="fast-reliable" role="tabpanel" aria-describedby="tab-fast-reliable">
		{#each $_("fastText").split("\n") as line}
			<p>
				{@html replaceNameWithLink(line)
					.replace("%statsServers", Math.floor(27100 * 1).toLocaleString())
					.replace("%statsUsers", Math.floor(7000000 * 1).toLocaleString())
					.replace("%statsWeek", (Math.floor(stats[604800000] / 100) * 100).toLocaleString())
					.replace("%statsMonth", (Math.floor(stats[2592000000] / 100) * 100).toLocaleString())
					.replace("%statsYear", (Math.floor(stats[31536000000] / 1000) / 1000).toLocaleString())}
			</p>
		{/each}
	</div>
</FeatureStack>

<style lang="scss">
	p {
		text-align: justify;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}
</style>
