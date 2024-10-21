<script>
	import ExamplePreview from "$lib/components/ExamplePreview.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _ } from "$lib/i18n";
	import { replaceSpecialChars } from "$lib/replaceSpecialChars";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";

	export let data;

	$: description = $_("seeUseCases") + $_("descSuffix");
	$: title = $_("useCasesHeading") + titleSuffix;
</script>

<svelte:head>
	<meta content={replaceSpecialChars(description)} name="description" />
	<meta content={replaceSpecialChars(description)} property="og:description" />
	<meta content={replaceSpecialChars(description)} name="twitter:description" />

	<meta content={replaceSpecialChars(title)} property="og:title" />
	<meta content={replaceSpecialChars(title)} property="twitter:title" />
	<title>{title}</title>
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
