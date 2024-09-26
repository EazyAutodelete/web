<script lang="ts">
	import { slide } from "svelte/transition";
	import { animate, skipFeatureCycle } from "../../routes/stores";
	import FeatureStack from "./FeatureStack.svelte";

	let sections = 3;

	let selectedSection = 0;

	const selectSection = async (section: number, s?: boolean) => {
		if (!s) {
			clearInterval(t);
			skipFeatureCycle.set(true);

			setTimeout(() => {
				clearInterval(t);
				skipFeatureCycle.set(false);
				if (!$animate) return;
				t = setInterval(() => {
					if ($skipFeatureCycle) return;
					const nextSection = (selectedSection + 1) % sections;
					selectSection(nextSection, true);
				}, 5000);
			}, 15000);
		}

		selectedSection = section; // Show the new section with a transition
	};

	let t = $animate
		? setInterval(() => {
				if ($skipFeatureCycle) return;
				const nextSection = (selectedSection + 1) % sections;
				selectSection(nextSection, true);
			}, 5000)
		: 0;
</script>

<FeatureStack options={["User-defined configs", "Multiple modes", "Long durations"]}>
	<div class="w-full" slot="card0">
		<p>
			EazyAutodelete being the most customizable Autodelete Discord Bot allows you to create multiple fully editable
			individual configurations for your channels.
		</p>
		<p>You have full control & flexibility about what messages are when deleted.</p>

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/configs.webp" alt="" />
				<span class="desc">Menu to select a config</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/configs.webp" alt="" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
		</div>
	</div>

	<div slot="card1">
		<p>
			Choose from 4 different <a class="link primary" href="https://docs.eazyautodelete.xyz/config/mode" target="_blank"
				>modes</a
			>
			that delete the messages.<br />You can delete the messages after a certain number of messages, a certain duration
			or many other criteria.
		</p>
		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<video class="rounded-lg shadow w-full" autoplay loop muted>
					<source src="/assets/vid/webm/mode-1.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
			<div class="w-1/2">
				<video class="rounded-lg shadow w-full" autoplay loop muted>
					<source src="/assets/vid/webm/mode-3.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
				<span class="desc">Mode 3 + 3 msg limit</span>
			</div>
		</div>
	</div>

	<div slot="card2">
		<p>
			<a href="/invite" class="link primary">EazyAutodelete</a> is designed to offer maximum flexibility and control. Therefore,
			you can set the duration of the messages to be deleted to up to 14 days - depending on your mode and more.
		</p>
		<div class="w-full flex space-x-4">
			<div class="w-1/2"><img src="" alt="" /></div>
			<div class="w-1/2"><img src="" alt="" /></div>
		</div>
	</div>
</FeatureStack>

<style lang="scss">
	p {
		text-align: justify;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	.desc {
		font-size: small;
		color: #8d8d8d;
	}

	img,
	video {
		box-shadow:
			0 0 #0000,
			0 0 #0000,
			0 10px 15px -3px rgb(0 0 0 / 0.12),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 0.5rem;
	}
</style>
