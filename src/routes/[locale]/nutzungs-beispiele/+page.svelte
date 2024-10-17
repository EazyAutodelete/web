<script>
	import ExamplePreview from "$lib/components/ExamplePreview.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
</script>

<svelte:head>
	<title>Nutzungsbeispiele von EazyAutodelete | EazyAutodelete</title>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="underline text-center">Example Use Cases of EazyAutodelete</h1>
		<p>Here are some examples of how people have used <a href="/invite">EazyAutodelete</a> to enhance their server.</p>
	</div>

	<div class="pt-6 w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
		<ExamplePreview
			img="https://avatar.iran.liara.run/public"
			id="test"
			tags={["moderation", "administration", "stuff"]}
			title="We did crazy stuff"
			description="Lets tell moreeeee"
		/>
		<ExamplePreview
			img="https://avatar.iran.liara.run/public"
			id="test"
			tags={["moderation", "administration", "stuff"]}
			title="We did crazy stuff"
			description="Lets tell moreeeee"
		/>
		<ExamplePreview
			img="https://avatar.iran.liara.run/public"
			id="test"
			tags={["moderation", "administration", "stuff"]}
			title="We did crazy stuff"
			description="Lets tell moreeeee"
		/>
		<ExamplePreview
			img="https://avatar.iran.liara.run/public"
			id="test"
			tags={["moderation", "administration", "stuff"]}
			title="We did crazy stuff"
			description="Lets tell moreeeee"
		/>
		<ExamplePreview
			img="https://avatar.iran.liara.run/public"
			id="test"
			tags={["moderation", "administration", "stuff"]}
			title="We did crazy stuff"
			description="Lets tell moreeeee"
		/>
	</div>
</PageContent>
