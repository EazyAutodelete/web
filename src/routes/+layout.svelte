<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import MobileNavbar from "$lib/components/MobileNavbar.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../app.scss";

	$: innerWidth = 0;
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
