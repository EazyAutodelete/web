<script>
	import PageContent from "$lib/components/PageContent.svelte";
</script>

<PageContent>
	<div class="w-full">
		<img
			src="/assets/img/logo-small.webp"
			height="128"
			alt="Logo"
			width="128"
			style="border-radius: 35px"
			class="mx-auto my-4"
		/>
		<h1 class="underline text-center">Thanks, for adding me to your server!</h1>
		<h2 class="mb-6">
			How about reading
			<a href="https://docs.eazyautodelete.xyz/getting-started" style="color: #fff">
				<span class="underline">Getting started</span>
			</a>in the <a href="https://docs.eazyautodelete.xyz">Docs</a>?
		</h2>

		<a href="https://docs.eazyautodelete.xyz/getting-started">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="inline"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
				/>
			</svg>
			<a href="https://docs.eazyautodelete.xyz/getting-started"><h3 class="underline inline">View Docs...</h3> </a>
		</a>
	</div>
</PageContent>
