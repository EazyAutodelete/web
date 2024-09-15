<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import "../app.postcss";
</script>

<svelte:head>
	<!-- Copyright 2020-2024 Ben Schiemann - qreepex - dev@qreepex.xyz -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>EazyAutodelete - Discord Bot</title>

	<!--
        YOU KNOW WHAT YOU ARE DOING?
        GET HIRED => qreepex#0001 on Discord
        -->

	<!-- META -->
	<meta name="theme-color" content="#545fed;" />
	<meta name="twitter:card" content="summary_large_image" />

	<meta itemprop="name" content="EazyAutodelete" />
	<meta content="EazyAutodelete" property="og:title" />
	<meta content="EazyAutodelete" property="og:site_name" />
	<meta content="EazyAutodelete" name="twitter:title" />

	<meta property="og:type" content="website" />
	<meta content="https://eazyautodelete.xyz" property="og:url" />
	<meta content="https://eazyautodelete.xyz" name="twitter:url" />

	<meta content="Hey, I'm EazyAutodelete! A Discord Bot to automatically delete messages." property="og:description" />
	<meta content="Hey, I'm EazyAutodelete! A Discord Bot to automatically delete messages." name="description" />
	<meta content="Hey, I'm EazyAutodelete! A Discord Bot to automatically delete messages." name="twitter:description" />

	<meta data-react-helmet="true" charset="utf-8" />
</svelte:head>

<div class="app">
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />

	<script async defer src="https://r1.delivery.services.eazyautodelete.xyz/latest.js"></script>
	<noscript
		><img
			src="https://r1.delivery.services.eazyautodelete.xyz/verycool.gif"
			alt="img"
			referrerpolicy="no-referrer-when-downgrade"
		/></noscript
	>
</div>
