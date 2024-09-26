<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { slide } from "svelte/transition";

	const t = (a, b) => a;
	const getUrl = (a, b) => b;

	export let toggle = false;
	export let active = false;
	export let scrolled = false;

	const locale = writable("en");

	onMount(() => {
		scrolled = window.scrollY > 0;

		toggle = false;

		window.addEventListener("scroll", () => {
			scrolled = window.scrollY > 0;
		});

		window.addEventListener("resize", () => {
			window.innerWidth > 1279 ? (active = false) : toggle ? (active = true) : (active = false);
		});
	});

	let innerWidth = 0;

	$: innerWidth = innerWidth;
</script>

<svelte:window bind:innerWidth />

<nav class="p-2" class:scrolled class:toggled={toggle}>
	<div class="w-11/12 xl:w-3/4 flex flex-wrap items-center justify-between mx-auto">
		<div class="block flex">
			<div class="text-sm navlist">
				<a href="/" class="navheader block">
					<img src="/assets/img/logo-small.webp" class="logo shadow" alt="EazyAutodelete Logo" />
				</a>
			</div>
		</div>

		<div class="block h-full name">
			<a href="https://eazyautodelete.xyz"><p class="accent">EazyAutodelete</p></a>
		</div>

		<div class="block">
			<button
				class="flex items-center primary"
				style="background-color: #26262b"
				on:click={() => ((toggle = !toggle), (active = !active))}
			>
				<svg class="fill-current w-5 burger" class:active viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>

		{#if toggle || innerWidth > 1279}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="w-full block flex-grow xl:flex xl:items-center xl:w-auto"
				transition:slide={{ duration: innerWidth > 1279 ? 0 : 200 }}
				on:click={() => ((toggle = !toggle), (active = !active))}
			>
				<div class="text-base xl:text-lg xl:flex-grow navlist">
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/#top">
						<span>Home</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/#features">
						<span>Features</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/use-cases-examples">
						<span>Use Cases</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/premium">
						<span>Premium</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/faq">
						<span>FAQ</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/status">
						<span>Status</span>
					</a>
					<a class="block xl:inline-block nosty" class:active class:scrolled href="/invite">
						<span>Invite</span>
					</a>
					<!-- svelte-ignore a11y-missing-attribute -->
				</div>
			</div>
		{/if}
	</div>
</nav>

<style lang="scss">
	.name {
		align-items: center;
		// height: 100%;
		a {
			&:hover {
				cursor: pointer;
			}
			p {
				font-size: x-large;
				font-weight: 800;
				// color: #fff;
			}
		}
	}

	.logo {
		border-radius: 15px;
		display: inline-block;
		height: 3rem;
	}

	nav {
		letter-spacing: 0.02rem;
		position: relative;
		width: 100%;
		z-index: 100;
		background-color: #283444;
		transition: all 0.5s ease-in-out;
		border-bottom: 1px solid transparent;
		color: #fff;

		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		// border-bottom: 1px solid #e2e8f0;

		.burger {
			transition: transform 0.2s ease-in-out;
			margin: 0 0.5rem;
			background-color: #26262b;
			&.active {
				transform: rotate(-90deg);
			}
		}

		.navheader {
			color: var(--text-color);
			border: none;
			display: flex;
			justify-content: flex-end;

			.logo {
				border-radius: 15px;
				display: inline-block;
			}
		}
		.navlist {
			> a {
				&:not(:last-child) {
					margin-right: 1rem;
					&.active {
						margin-bottom: 0.5rem;
						margin-right: 0rem;
					}
				}

				&:first-child.active {
					margin-top: 1rem;
				}
				span {
					text-decoration: none;
					transition: border 0.2s ease-in-out;
					border-bottom: 2px solid transparent;
					font-weight: 600;
					line-height: 1rem;
					font-size: medium;
				}
				&:hover {
					span {
						border-bottom: 2px solid var(--color-primary);
					}
				}
			}
		}
	}
</style>
