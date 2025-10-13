<script>
	import { _, u } from "$lib/i18n";
	import LangSwitcher from "./LangSwitcher.svelte";
</script>

<nav>
	<ul class="navlist w-11/12 xl:w-3/4">
		<li class="brand">
			<a href="/"
				><img
					src="https://storage.eazyautodelete.xyz/public/logos/logo-small.webp"
					height="32"
					width="32"
					alt="EazyAutodelete Logo"
					title="EazyAutodelete Logo"
				/></a
			>
			<a href="/">EazyAutodelete</a>
		</li>

		<li>
			<a href={$u("") + "#top"}>Home</a>
		</li>

		<li>
			<a href={$u("") + "#features"}>{$_("features")}</a>
		</li>

		<li>
			<a href={$u("use-cases-examples")}>{$_("useCases")}</a>
		</li>

		<li>
			<a href={$u("premium")}>Premium</a>
		</li>

		<li>
			<a href={$u("faq")}>FAQ</a>
		</li>

		<li>
			<a href={$u("status")}>Status</a>
		</li>

		<li>
			<a target="_blank" href="invite" class="invite">Invite</a>
		</li>

		<li class="lang">
			<LangSwitcher />
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: #283444;

		.navlist {
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem 0;
			flex-grow: 1;
			gap: 2rem;

			.brand {
				display: flex;
				align-items: center;

				a {
					display: flex;
					align-items: center;
					color: white;
					text-decoration: none;
					font-weight: 700;
					font-size: x-large;

					img {
						width: 2rem;
						height: 2rem;
						margin-right: 0.5rem;
						// keep apsect ratio, no shrinking
						flex-shrink: 0;
						flex-grow: 1;
						border-radius: 0.5rem;
					}
				}
			}

			li {
				display: inline-block;
				font-size: large;
				font-weight: 600;

				a {
					text-decoration: none;
					transition: ease-in-out 0.2s;
					text-decoration: underline 0.1em solid transparent;

					&:hover {
						color: #f0f0f0;
						text-decoration: underline 0.1em solid #f0f0f0;
					}
				}
			}

			.lang {
				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	.invite {
		background-color: #f0f0f0;
		color: var(--color-primary);

		border-radius: 0.5rem;

		text-decoration: none;
		transition: background-color ease-in-out 0.2s;
		padding: 0.5rem 1rem;

		&:hover {
			background-color: var(--color-primary);
			color: #f0f0f0;
			text-decoration: underline 0.1em solid #f0f0f0 !important;
			cursor: pointer;
		}
	}
</style>
