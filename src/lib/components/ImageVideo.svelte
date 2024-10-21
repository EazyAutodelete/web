<script lang="ts">
	import { fade, slide } from "svelte/transition";

	let width: number;

	let videoRef: HTMLVideoElement;
	let videoLoaded = false;
	let imgShow;

	const handleLoaded = () => {
		videoLoaded = true;
	};

	$: width;
</script>

<svelte:window bind:innerWidth={width} />

<div class="w-1/3 h-full">
	{#if !videoLoaded}
		<img
			loading="lazy"
			src="/assets/img/logo-small.webp"
			class="rounded-lg shadow-lg"
			alt="Logo of EazyAutodelete. Black Trashcan on Blue Background."
			title="Logo of EazyAutodelete. Black Trashcan on Blue Background."
			width="50%"
			height="50%"
			transition:slide={{ delay: 0, duration: 250 }}
		/>
	{/if}

	<video
		id="mode-1"
		transition:slide={{ delay: 250 }}
		class="rounded-lg shadow-lg"
		width="100%"
		height="100%"
		autoplay
		loop
		muted
		playsinline
		on:loadeddata={handleLoaded}
		style="display: {videoLoaded ? 'block' : 'block'}; position: {videoLoaded ? 'relative' : 'relative'}"
	>
		<source src={width >= 1024 ? "/assets/vid/webm/mode-1.webm" : ""} type="video/mp4" />
		Your Browser does not support the video tag.
	</video>
</div>
