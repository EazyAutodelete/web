<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";

	import type Stripe from "stripe";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Tick from "$lib/icons/Tick.svelte";
	import Cross from "$lib/icons/Cross.svelte";
	// import Spinner from '$lib/components/Spinner.svelte';
	// import { error } from '../../../../stores';

	let guildId = $page.params.guildId;

	type PlanData = { product: Stripe.Product; price: Stripe.Price };

	let yearlyPlans: PlanData[];
	let monthlyPlans: PlanData[];
	let selected: "yearly" | "monthly" | "loading" = $page.url.search.includes("yearly")
		? "yearly"
		: $page.url.search.includes("mothly")
			? "monthly"
			: "loading";
	let currency: "eur" | "usd" = "eur";

	let checkout = -1;

	let premium = false;

	onMount(async () => {
		const premiumReq = await fetch("/api/data/guilds/" + guildId + "/modules/premium");
		const premiumData = await premiumReq.json();

		premium = premiumData.premium;

		if (premium) return;

		const plansData = await fetch("/api/billing/plans");

		const data = await plansData.json();

		yearlyPlans = data.yearlyPlans;
		monthlyPlans = data.monthlyPlans;

		selected = $page.url.hash.includes("yearly") ? "yearly" : "monthly";
	});

	const changePlan = (option: "yearly" | "monthly") => {
		selected = option;
		checkout = -1;
	};

	async function createCheckOutSession(plan: PlanData) {
		// const priceId = plan.price.id;
		// const data = await fetch(
		// 	`/api/billing/create-checkout-session` +
		// 		`?price=${priceId}` +
		// 		`&back=${'/manage/' + guildId + '/premium'}` +
		// 		`&guild=${guildId}`,
		// 	{
		// 		method: 'POST'
		// 	}
		// );
		// const body = await data.json();
		// if (body.url) window.location = body.url;
		// else {
		// 	const error = body;
		// 	($error = [
		// 		{ text: `Failed to create checkout session [Code 1]`, id: $error.length, read: false },
		// 		...$error!
		// 	]),
		// 		console.error(`[${data.status}]: ${data.statusText} - ${data.url}`);
		// 	console.error(error);
		// }
	}

	function scroll() {
		const element = document.getElementById("#plans")!;
		element.scrollIntoView({ behavior: "smooth" });
	}

	$: monthlyPlans;
	$: yearlyPlans;
	$: selected;
	$: currency;
	$: checkout;
</script>

<svelte:head>
	<title>Premium - EazyAutodelete</title>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">Premium</h1>
		<p>
			Subscribe to EazyAutodelete Premium to get access to more features, better limits and support the development of
			the project.
		</p>

		<div class="w-full table">
			<div class="grid heading">
				<div />
				<div>Community Version</div>
				<div>Premium Plan</div>
			</div>
			<div class="grid">
				<div>All filters</div>
				<Tick />
				<Tick />
			</div>
			<div class="grid">
				<div>All commands</div>
				<Tick />
				<Tick />
			</div>
			<div class="grid">
				<div>More than 3 configs per channel</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>
					Better limits (<a class="link secondary" href="/faq#what-are-the-limits">See here</a>)
				</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>Your channels are handled first</div>
				<Cross />

				<Tick />
			</div>
			<div class="grid">
				<div>
					More than 10 <a class="link secondary" href="https://docs.eazyautodelete.xyz/config/roles"
						>Target/Ignore</a
					> Roles
				</div>
				<!-- <div> -->
				<Cross />
				<!-- </div> -->

				<!-- <div> -->
				<Tick />
				<!-- </div> -->
			</div>
			<div class="grid">
				<div  />

				<div>
					<a href="discord://-/channels/{guildId}">
						<button class=""> Start using </button>
					</a>
				</div>
				<div>
					<a href={premium ? "/subscriptions" : "#plans"} on:click={() => scroll()}>
						<button class="primary" class:premium
							>{premium ? "Manage" : "Subscribe Now"}
						</button></a
					>
				</div>
			</div>
		</div>
		<p class="disclaimer px-2">
			Better limits and more configs result in higher server load. Therefore, premium users have better limits as they
			help cover the server costs. The limits are experimental and may be changed in the future.
		</p>
	</div>
</PageContent>

<style lang="scss">
	.premium {
		background-color: var(--lighter);
		color: rgb(14 159 110) !important;
		border-color: rgb(14 159 110) !important;
	}

	h1 {
		padding-top: 2rem;
		font-weight: bold;
	}

	.disclaimer {
		margin-top: 0.75rem;
		font-size: 0.75rem;
		color: #bebec5;
	}

	.table {
		margin-top: 2rem;

		// button {
		// 	background-color: var(--lighter);
		// 	color: #fff;
		// 	border: 2px solid var(--more-lighter);
		// 	border-radius: 0.5rem;
		// 	padding: 0.5rem 1rem;
		// 	width: 100%;

		// 	transition: all 0.2s ease-in-out;

		// 	&:hover {
		// 		background-color: var(--more-lighter);
		// 	}
		// }

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
