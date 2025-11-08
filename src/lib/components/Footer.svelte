<script>
	import { _, u } from "$lib/i18n";
	import PageContent from "./PageContent.svelte";
</script>

<div style="background-color: #1b1c1c">
	<svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 0,400 C 0,400 0,133 0,133 C 53.82136722775678,137.5214702851254 107.64273445551356,142.04294057025078 169,153 C 230.35726554448644,163.95705942974922 299.25042940570256,181.3497080041223 387,174 C 474.74957059429744,166.6502919958777 581.3555479216764,134.55822741326006 645,116 C 708.6444520783236,97.44177258673996 729.3273789075919,92.41738234283751 791,93 C 852.6726210924081,93.58261765716249 955.3349364479559,99.77224321538989 1031,120 C 1106.665063552044,140.2277567846101 1155.332875300584,174.4936447956029 1219,179 C 1282.667124699416,183.5063552043971 1361.333562349708,158.25317760219855 1440,133 C 1440,133 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262b88"
			transform="rotate(-180 720 200)"
		/>
		<path
			d="M 0,400 C 0,400 0,266 0,266 C 80.96255582274131,250.91514943318447 161.92511164548262,235.83029886636896 228,228 C 294.0748883545174,220.16970113363104 345.26210924081073,219.5939539677087 397,220 C 448.73789075918927,220.4060460322913 501.02645139127446,221.7938852627963 583,227 C 664.9735486087255,232.2061147372037 776.6320851940914,241.23050498110612 853,248 C 929.3679148059086,254.76949501889388 970.4452078323602,259.28409481277913 1020,264 C 1069.5547921676398,268.71590518722087 1127.5870834764685,273.6331157677774 1199,274 C 1270.4129165235315,274.3668842322226 1355.2064582617659,270.18344211611134 1440,266 C 1440,266 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262bff"
			transform="rotate(-180 720 200)"
		/>
	</svg>
</div>

<footer>
	<PageContent>
		<div class="footer">
			<div class="brand w-full lg:w-1/2 order-2 lg:order-1 lg:pe-2">
				<div class="img-name">
					<a href="/">
						<img
							src="https://storage.eazyautodelete.xyz/public/logos/logo-small.webp"
							height="42"
							width="42"
							alt="EazyAutodelete Logo"
							title="EazyAutodelete Logo"
						/>
					</a>
					<a href="/"> <p class="name">EazyAutodelete</p></a>
				</div>

				<p class="ad">{$_("ad")}</p>

				<p class="copy">
					&copy; 2020-{new Date().getFullYear()} -
					<a href="https://schiemann.work">Ben</a>
				</p>
			</div>
			<div class="navigation w-full order-1 lg:w-1/2 lg:ps-2">
				<div class="section">
					<p class="title">Navigation</p>
					<ul>
						<li>
							<a href={$u("/faq")} class="footer-text">FAQ</a>
						</li>
						<li>
							<a href={$u("/use-cases-examples")} class="footer-text">{$_("useCases")}</a>
						</li>
						<li>
							<a href={$u("#features")} class="footer-text">{$_("features")}</a>
						</li>
						<li><a href="/discord" target="_blank" class="footer-text">Support</a></li>

						<li>
							<a href="https://docs.eazyautodelete.xyz" target="_blank" class="footer-text">{$_("docs")}</a>
						</li>

						<li>
							<a href={$u("status")} class="footer-text">Bot Status</a>
						</li>
					</ul>
				</div>
				<div class="section">
					<p class="title">Links</p>
					<ul>
						<li>
							<a href="/invite" target="_blank" class="footer-text">Invite</a>
						</li>
						<li>
							<a href={$u("premium")} class="footer-text">Premium</a>
						</li>
						<li>
							<a href="/discord" target="_blank" class="footer-text">Discord</a>
						</li>
						<li>
							<a href="https://twitter.com/eazyautodelete" target="_blank" class="footer-text">Twitter</a>
						</li>
						<li>
							<a href="https://tiktok.com/@eazyautodelete" target="_blank" class="footer-text">TikTok</a>
						</li>
						<li>
							<a href="https://instagram.com/eazyautodelete" target="_blank" class="footer-text">Instagram</a>
						</li>
					</ul>
				</div>
				<div class="section">
					<p class="title">{$_("legal")}</p>
					<ul>
						<li>
							<a href={$u("/terms")} target="_blank" class="footer-text">{$_("terms")}</a>
						</li>
						<li>
							<a href={$u("/privacy")} target="_blank" class="footer-text">{$_("privacy")}</a>
						</li>
						<li>
							<a href={$u("imprint")} target="_blank" class="footer-text">{$_("imprint")}</a>
						</li>
						<li>
							<a href={$u("/licenses")} target="_blank" class="footer-text">{$_("licenses")}</a>
						</li>
						<li>
							<a href={$u("/right-of-withdrawal")} target="_blank" class="footer-text">{$_("rightow")}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</PageContent>
	<div class="disclaimer">
		<a href="/">EazyAutodelete</a> is not affiliated with Discord Inc.
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: #1b1c1c;
	}
	.footer {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.brand {
			margin-bottom: 3rem;

			.img-name {
				display: flex;
				align-items: center;

				img {
					width: 42px;
					height: 42px;
					border-radius: 16px;
					display: inline-block;
				}

				.name {
					font-size: xx-large;
					font-weight: 600;
					color: white;
					display: inline-block;
					margin-left: 1rem;
				}
			}

			.ad {
				padding-top: 0.5rem;
			}

			.copy {
				color: gray;
				font-size: small;
				margin-top: 1rem;

				a {
					font-weight: 600;
				}
			}
		}

		.navigation {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 3rem;

			.section {
				width: 33.333333%;

				.title {
					font-size: large;
					font-weight: 600;
					color: white;
				}

				ul {
					padding-left: 0;
					// list-style: circle;
					margin-top: 1rem;

					li {
						margin-bottom: 0.375rem;

						a {
							color: white;
							text-decoration: underline;
							transition: all 0.2s ease-in-out;
							word-break: break-word;
							overflow-wrap: break-word;

							&:hover {
								color: #00b0f0;
							}
						}
					}
				}
			}
		}
	}

	.disclaimer {
		background-color: #26262b;
		text-align: center;
		width: 100%;
		padding: 0.5rem;

		a {
			color: var(--color-primary);
			font-weight: 600;
		}
	}
</style>
