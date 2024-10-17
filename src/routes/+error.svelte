<script lang="ts">
	import { page } from "$app/stores";

	const code = $page.status;
	const text = $page.error?.message || $page.error || "Unknown error";
</script>

<svelte:head>
	<title>Error {code} | EazyAutodelete - Discord Bot</title>
</svelte:head>

<div class="err">
	<h1>Error {code}</h1>
	<p>{text}</p>

	<a href="/en" class="link primary">Go to our home page</a>
</div>

<style lang="scss">
	.err {
		width: 100%;
		text-align: center;

		p {
			margin-bottom: 1rem;
		}
	}
</style>
