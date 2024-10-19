<script>
	import ExamplePreview from "$lib/components/ExamplePreview.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import { _ } from "$lib/i18n";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";

	export let data;
</script>

<svelte:head>
	<title>{$_("useCasesHeading")} | EazyAutodelete</title>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="underline text-center">{$_("useCasesHeading")}</h1>
		<p>{@html replaceNameWithLink($_("useCasesText"))}</p>
	</div>

	<div class="pt-6 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
		{#each data.usecases as usecase}
			<ExamplePreview
				img={usecase.img}
				id={usecase.id}
				tags={usecase.tags}
				title={usecase.title}
				description={usecase.description}
			/>
		{/each}
	</div>
</PageContent>
