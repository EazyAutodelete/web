<script lang="ts">
	import FeatureStack from "./FeatureStack.svelte";
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";
</script>

<FeatureStack
	type="buttonRight"
	options={[$_("filtersForEverything"), $_("ignoreTarget"), $_("lazyload")]}
	ids={["filters", "ignore-target", "load-old-messages"]}
>
	<section slot="card0" id="filters" role="tabpanel" aria-describedby="tab-filters">
		{#each $_("filtersForEverythingText").split("\n") as line}
			<p>
				{@html replaceNameWithLink(
					replaceWordWithLink(line, "Filters", "https://docs.eazyautodelete.xyz/config/filters")
				)}
			</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img
					src="/assets/img/filters-1.webp"
					alt="Select different Message Types"
					title="Select different Message Types"
				/>
				<span class="desc">Select different Message Types</span>
			</div>
			<div class="w-1/2">
				<img
					src="/assets/img/filters-2.webp"
					alt="Select different Message Contents"
					title="Select different Message Contents"
				/>
				<span class="desc">Select different Message Contents</span>
			</div>
		</div>
	</section>

	<section slot="card1" id="ignore-target" role="tabpanel" aria-describedby="tab-ignore-target">
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
				<img src="/assets/img/target.webp" alt="Only target specific roles" title="Only target specific roles" />
				<span class="desc">Only target specific roles</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/ignore.webp" alt="Ignore specific roles" title="Ignore specific roles" />
				<span class="desc">Ignore specific roles</span>
			</div>
		</div>
	</section>

	<section slot="card2" id="load-old-messages" role="tabpanel" aria-describedby="tab-load-old-messages">
		{#each $_("lazyloadText").split("\n") as line}
			<p>{@html replaceNameWithLink(line)}</p>
		{/each}

		<div class="w-full flex space-x-4">
			<div class="w-full">
				<img
					src="/assets/img/load-old-messages.webp"
					alt="Bot asking whether to load old messages"
					title="Bot asking whether to load old messages"
				/>
				<span class="desc">Bot asking whether to load old messages</span>
			</div>
		</div>
	</section>
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

	img {
		box-shadow:
			0 0 #0000,
			0 0 #0000,
			0 10px 15px -3px rgb(0 0 0 / 0.12),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 0.5rem;
	}
</style>
