<script lang="ts">
	import { slide } from "svelte/transition";
	import { animate, skipFeatureCycle } from "../../routes/stores";
	import { onMount } from "svelte";
	import FeatureStack from "./FeatureStack.svelte";

	let sections = 3;

	let selectedSection = 0;

	const selectSection = async (section: number, s?: boolean) => {
		if (!s) {
			skipFeatureCycle.set(true);
			clearInterval(t);

			setTimeout(() => {
				clearInterval(t);
				skipFeatureCycle.set(false);
				if (!$animate) return;
				t = setInterval(() => {
					if ($skipFeatureCycle) return;
					const nextSection = (selectedSection + 1) % sections;
					selectSection(nextSection, true);
				}, 10000);
			}, 15000);
		}

		selectedSection = section;
	};

	let t = $animate
		? setInterval(() => {
				if ($skipFeatureCycle) return;
				const nextSection = (selectedSection + 1) % sections;
				selectSection(nextSection, true);
			}, 5000)
		: 0;
</script>

<FeatureStack
	type="buttonRight"
	options={["Filters for everything", "Ignore / Target Roles & Bots", "Load up old messages"]}
>
	<div slot="card0">
		<p>
			You can choose from a large amout of <a href="https://docs.eazyautodelete.xyz/config/filters" class="link primary"
				>filters</a
			>
			that the messages must match to be deleted.
		</p>
		<p>You decide whether messages must match all filters or just a single filter to be deleted.</p>
		<p>
			Using <a href="/invite" class="link primary">EazyAutodelete</a>'s filters, you can automatically delete pinned
			messages, messages that are not pinned, message that contain mentions, links or emojis as well as messages that
			have (no) attachments or voice messages.
		</p>
		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/filters.webp" alt="" />
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
			You can select to either <a
				class="link primary"
				href="https://docs.eazyautodelete.xyz/config/ignore-roles"
				target="_blank">Ignore or Target messages</a
			> from members with certain roles. This allows you to maintain organized channels while differentiating between varios
			user groups.
		</p>
		<p>
			Additionally, you have options to only delete messages that were sent by bots and to ignore messages by real
			users, or otherwise only delete messages that were sent by real users and ignore messages by bots.
		</p>

		<div class="w-full flex space-x-4">
			<div class="w-1/2">
				<img src="/assets/img/bots.webp" alt="Toggle author is bot or author isnt bot" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
			<div class="w-1/2">
				<img src="/assets/img/roles.webp" alt="Toggle roles to ignore or target" />
				<span class="desc">Mode 1 + 10 sec limit</span>
			</div>
		</div>
	</div>

	<div slot="card2">
		<p>
			You decide whether you want the bot to load & process old messages sent before you set it up, or just ignore them
			and start at the point you tell it to.
		</p>
		<p>
			Additionally, in case of disruptions in its or Discords Service, <a href="/invite" class="link primary"
				>EazyAutodelete</a
			> will fetch all missed out messages and process them like it normally would have.
		</p>
	</div>
</FeatureStack>

<!--  -->

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
