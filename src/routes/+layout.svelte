<script lang="ts">
	import "../app.css";

	import {  onMount } from "svelte";

	import { page } from "$app/state";

	import Footer from "$lib/components/Footer.svelte";
	import MobileNavbar from "$lib/components/MobileNavbar.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	import { _, dictionary, getPage, getPageTagForLocalizedPageName, initI18n, locale } from "$lib/i18n";
	import { goto } from "$app/navigation";
	import { fetchData } from "$lib/utils/fetchData.svelte";

	const langFetch = $derived(fetchData<{ [key: string]: string }>(`/i18n/${$locale}`));

	$effect(() => {
		if (langFetch.ok && langFetch.data) {
			const dicLocale = $locale || "en";

			dictionary.update(d => {
				d[dicLocale] = {
					...(d[dicLocale] || {}),
					...langFetch.data!,
				};
				return d;
			});
		}
	});

	onMount(() => {
		if (page.status !== 200) return;


	});

	onMount(() => {
		const browserLanguage = navigator.language;
		const locale = browserLanguage.split("-")[0];
		

		// i18n
		initI18n("en");
		langFetch.do();

		document.documentElement.lang = $locale;


		setTimeout(
			() =>
				locale.subscribe(newLang => {
					document.documentElement.lang = newLang;

					const currentPathLang = $page.url.pathname.split("/")[1];
					if (currentPathLang === newLang) return;

					const currentPage = $page.url.pathname.split("/")[2];

					if (!currentPage) return goto(`/${newLang}` + $page.url.search + $page.url.hash);

					const more = $page.url.pathname.split(currentPage).slice(1).join(currentPage);

					const pageTag = getPageTagForLocalizedPageName(currentPage);
					const newPage = getPage(pageTag, newLang);

					if (!newPage) return;

					return goto(
						`/${newLang}/${newPage}${more.startsWith("/") ? more : "/" + more}` + $page.url.search + $page.url.hash
					);
				}),
			100
		);

		initI18n(lang!);
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
