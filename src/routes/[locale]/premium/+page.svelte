<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";

	import Tick from "$lib/icons/Tick.svelte";
	import Cross from "$lib/icons/Cross.svelte";
	import { _, u } from "$lib/i18n";
	import Command from "$lib/components/Command.svelte";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";

	let ref: Element;
	let highlighted = false;
	let t: NodeJS.Timeout;

	const highlight = () => {
		clearTimeout(t);

		ref.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest",
		});

		setTimeout(() => {
			highlighted = true;

			t = setTimeout(() => {
				highlighted = false;
			}, 500);
		}, 200);
	};
</script>

<svelte:head>
	<title>Premium 🚀 Upgrade to Premium | EazyAutodelete</title>

	<meta
		content="Upgrate to the Premium Version of EazyAutodelete to gain access to better limits, more configs in a channel and many other perks. EazyAutodelete is the best & most customizable Autodelete Bot for Discord. Completely free & in unlimited channels. With EazyAutodelete's advanced configuration options, you can autodelete messages based on user roles, mentions, a large number of filters or time intervals. Set durations like 5 minutes, 1 hour, 1 day, 24 hour or 1 week."
		name="description"
	/>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">Premium</h1>
		<p>
			{$_("subscribe")}
		</p>
		<p>
			{$_("moneyUse")}
		</p>

		<div class="w-full table">
			<div class="grid heading">
				<div />
				<div><h2>Community Version</h2></div>
				<div><h2>Premium Plan</h2></div>
			</div>
			<div class="grid">
				<div>{$_("unlimitedChannels")}</div>
				<Tick />
				<Tick />
			</div>
			<div class="grid">
				<div>
					{$_("premiumFilters")}
				</div>
				<Tick />
				<Tick />
			</div>
			<div class="grid">
				<div>
					{$_("premiumCommands")}
				</div>
				<Tick />
				<Tick />
			</div>
			<div class="grid">
				<div>
					{$_("premiumMoreConfigs")}
				</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>
					{@html replaceWordWithLink($_("premiumLimits"), "See here", $u("faq") + "#what-are-the-limits", true, false)}
				</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>
					{$_("premiumHandledFirst")}
				</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>
					{@html replaceWordWithLink(
						$_("premiumMoreRoles"),
						"Target/Ignore",
						"https://docs.eazyautodelete.xyz/config/roles",
						true,
						false
					)}
				</div>
				<Cross />
				<Tick />
			</div>
			<div class="grid">
				<div />

				<div>
					<a href="/invite">
						<button>{$_("startUsing")}</button>
					</a>
				</div>
				<div>
					<button class="primary" on:click={highlight}>Subscribe</button>
				</div>
			</div>
		</div>
		<p class="disclaimer pb-6">
			{$_("premiumDisclaimer")}
		</p>

		<h3 class="text-center" bind:this={ref} class:animate={highlighted}>
			{$_("premiumCommand").split("%command")[0]}
			<Command name={"premium"} />
			{$_("premiumCommand").split("%command")[1]}
		</h3>
	</div>
</PageContent>

<style lang="scss">
	@keyframes grow {
		0% {
			// font-size: 1rem;
			scale: 1;
			background-color: transparent;
		}
		50% {
			scale: 1.025;
			// font-size: 1.2rem;
			background-color: rgba(255, 255, 0, 0.212);
		}
		100% {
			scale: 1;

			// font-size: 1rem;
			// background-color: transparent;
		}
	}

	h3 {
		overflow: hidden;
		padding: 0.5rem;
		border-radius: 0.5rem;
		&.animate {
			animation: grow 0.5s;
		}
	}

	p {
		margin-bottom: 0.5rem;
	}

	h2 {
		font-size: 1rem;
	}

	.disclaimer {
		margin-top: 0.75rem;
		font-size: 0.75rem;
		color: #bebec5;
	}

	.table {
		margin-top: 2rem;

		button {
			color: #fff;
		}

		.heading {
			background-color: var(--dark);

			border-top-left-radius: 0.5rem;
			border-top-right-radius: 0.5rem;
		}

		.grid {
			width: 100%;
			border-collapse: collapse;

			padding: 1.25rem 0rem;
			border-bottom: 1px solid rgb(55 65 81);
			column-gap: 0.5rem;
			-moz-column-gap: 0.5rem;
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));

			&:not(.heading) {
				color: rgb(156 163 175);
				font-size: 0.875rem;
				line-height: 1.25rem;
			}
		}
	}

	// .plan {
	// 	margin: 0.5rem;
	// 	padding: 1.5rem;
	// 	background-color: var(--dark);
	// 	border-radius: 0.5rem;

	// 	.discount {
	// 		color: #fc8b8b;
	// 		font-size: small;
	// 	}

	// 	h3 {
	// 		font-size: 1.2rem;
	// 	}

	// 	p {
	// 		margin-top: 0.5rem;
	// 		font-size: 1rem;
	// 		color: #bebec5;
	// 	}

	// 	.price {

	// 		font-size: 0.75rem;

	// 		strong {
	// 			margin-top: 1rem;
	// 			font-size: 1.5rem;
	// 			color: #fff;
	// 		}

	// 	}

	// 	button {
	// 		border: 1px solid var(--lighter);
	// 		width: 100%;
	// 		border-radius: 0.25rem;
	// 		padding: 0.5rem 1rem;
	// 		margin-top: 1.5rem;
	// 		background-color: var(--lighter);

	// 		transition: all 0.2s ease-in-out;

	// 		&:hover:not(:disabled) {
	// 			cursor: pointer;
	// 			background-color: var(--more-lighter);
	// 		}
	// 	}
	// }

	// .tabber {
	// 	margin-top: 5rem;
	// 	background-color: var(--dark);
	// 	border-radius: 0.5rem;

	// 	.tabentry {
	// 		&.selected {
	// 			.tabcontent {
	// 				background-color: var(--lighter);
	// 				font-weight: bold;
	// 				border-radius: 0.5rem;

	// 				.discount {
	// 					color: #ff0000;
	// 				}
	// 			}
	// 		}

	// 		&:last-child {
	// 			.tabcontent {
	// 				margin-right: 0.2rem;
	// 			}
	// 		}

	// 		&:not(:last-child) {
	// 			.tabcontent {
	// 				margin-left: 0.2rem;
	// 			}
	// 		}

	// 		.tabcontent {
	// 			transition: all 0.2s ease-in-out;

	// 			padding: 1rem 0rem;
	// 			margin: 0.2rem 0rem;

	// 			.discount {
	// 				font-size: 0.8rem;
	// 				color: #863c3c;
	// 			}
	// 		}
	// 	}
	// }
</style>
