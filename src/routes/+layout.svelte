<script lang="ts">
	import { page } from "$app/stores";

	import Footer from "$lib/components/Footer.svelte";
	import MobileNavbar from "$lib/components/MobileNavbar.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	import { onMount } from "svelte";
	import "../app.scss";
	import { dictionary, getPage, getPageTagForLocalizedPageName, initI18n, locale, u } from "$lib/i18n";
	import { goto } from "$app/navigation";

	$: innerWidth = 0;
	$: lang = $page.params.locale;

	export let data;
	$dictionary = data.dic;

	onMount(() => {
		if ($page.status !== 200) return;

		initI18n(lang);

		document.documentElement.lang = $locale;

		locale.subscribe(newLang => {
			document.documentElement.lang = newLang;

			const currentPathLang = $page.url.pathname.split("/")[1];
			if (currentPathLang === newLang) return;

			const currentPage = $page.url.pathname.split("/")[2];

			if (!currentPage) return goto(`/${newLang}` + $page.url.search + $page.url.hash);

			const more = $page.url.pathname.split(currentPage).slice(1).join(currentPage);

			const pageTag = getPageTagForLocalizedPageName(currentPage);
			const newPage = getPage(pageTag);

			if (!newPage) return;

			return goto(`/${newLang}/${newPage}${more}` + $page.url.search + $page.url.hash);
		});
	});
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 1024}
	<Navbar />
{:else}
	<MobileNavbar />
{/if}

<main>
	<slot />
</main>

<Footer />
