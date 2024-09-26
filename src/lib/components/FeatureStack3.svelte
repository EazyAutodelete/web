<script>
	import FeatureStack from "./FeatureStack.svelte";

	export let stats;
</script>

<FeatureStack options={["Unlimited channels", "Free to add & use", "Fast & reliable 🚀"]}>
	<div slot="card0">
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
			<a href="/invite" class="link primary">EazyAutodelete</a> is freely usable for everyone. No requirements must be met
			to add it to your server and use the core functions.
		</p>
		<p>
			There is no need to buy some premium version or vote on a Bot List Platform. All features are accessible for free.
		</p>
		<p>
			There are very few to none limits, which are chosen wisely and evaluated regularly that are mandatory to be able
			to provide a reliable and fast service as well as a pleasant user experience.
		</p>
	</div>

	<div slot="card2">
		<p>
			<a href="/invite" class="link primary">EazyAutodelete</a> is built for maximum performance and reliability. Therefore,
			it can offer delays down to a few milliseconds.
		</p>
		<p>
			<a href="/invite" class="link primary">EazyAutodelete</a> serves over 15,000 servers on Discord, reaching more than
			7,000,000 users.
		</p>
		<p>
			This week, <a href="/invite" class="link primary">EazyAutodelete</a> already deleted more than {(
				Math.floor(stats[604800000] / 100) * 100
			).toLocaleString()} messages from tens of thousand channels. In the last 30 days it has deleted over {(
				Math.floor(stats[2592000000] / 100) * 100
			).toLocaleString()} messages and more than {(Math.floor(stats[31536000000] / 1000) / 1000).toLocaleString()} million
			messages in the entire year.
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
