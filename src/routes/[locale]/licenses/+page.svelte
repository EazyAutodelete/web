<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _ } from "$lib/i18n";

	$: description = $_("seeLegalInfo").replace("%topic", $_("licenses")) + $_("descSuffix");
	$: title = $_("licenses") + titleSuffix;
</script>

<svelte:head>
	<meta content={description} name="description" />
	<meta content={description} property="og:description" />
	<meta content={description} name="twitter:description" />

	<meta content={title} property="og:title" />
	<meta content={title} property="twitter:title" />
	<title>{title}</title>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">{$_("licenses")}</h1>
		<h3>Last updated: May 14th, 2024.</h3>

		<p class="text-justify">
			The following section sets forth attribution notices for third party software that may be contained in portions of
			this project. Thanks to all developers who have contributed to any of the third party software listed below.
		</p>

		<ul>
			<li><a class="link secondary" href="https://getbootstrap.com">Bootstrap</a></li>
			<li><a class="link secondary" href="https://discordeno.js.org/">Discordeno</a></li>
			<li><a class="link secondary" href="https://abal.moe/Eris">Eris</a></li>
			<li><a class="link secondary" href="https://tailwindcss.com">Tailwind CSS</a></li>
			<li><a class="link secondary" href="https://svelte.dev">Svelte (+ Kit)</a></li>
		</ul>
		<ul>
			<li><a class="link secondary" href="https://directus.io">Directus</a></li>
			<li><a class="link secondary" href="https://grafana.com/">Grafana</a></li>
			<li><a class="link secondary" href="https://mongodb.com">MongoDB</a></li>
			<li><a class="link secondary" href="https://nodejs.org">Node.js</a></li>
			<li><a class="link secondary" href="https://npmjs.com">npm</a></li>
			<li><a class="link secondary" href="https://portainer.io/">Portainer</a></li>
			<li><a class="link secondary" href="https://prometheus.io">Prometheus</a></li>
			<li><a class="link secondary" href="https://redis.io">Redis</a></li>
			<li><a class="link secondary" href="https://stripe.com">Stripe</a></li>
			<li><a class="link secondary" href="https://uptime.kuma.pet/">Uptime Kuma</a></li>
			<li><a class="link secondary" href="https://weblate.org">Weblate</a></li>
		</ul>
		<ul>
			<li><a class="link secondary" href="https://npmjs.com/package/autoprefixer">autoprefixer</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/axios">axios</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/bootstrap-icons">Bootstrap Icons</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/chalk">chalk</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/colorette">colorette</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/cors">cors</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/commitizen">commitizen</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/discord-api-types">discord-api-types</a></li>
			<li>
				<a class="link secondary" href="https://npmjs.com/package/discord-hybrid-sharding">discord-hybrid-sharding</a>
			</li>
			<li><a class="link secondary" href="https://npmjs.com/package/dotenv">dotenv</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/eslint">eslint</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/express">express</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/fastify">fastify</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/flowbite">flowbite</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/husky">husky</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/ioredis">ioredis</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/mongodb">mongodb</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/mongoose">mongoose</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/ms">ms</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/nanoid">nanoid</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/node-emoji">node-emoji</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/nodemailer">nodemailer</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/postcss">postcss</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/prettier">prettier</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/prom-client">prom-client</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/qs">qs</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/redis">redis</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/sass">sass</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/standard-version">standard-version</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/swc-node">swc-node</a></li>
			<li><a class="link secondary" href="https://npmjs.com/package/typescript">typescript</a></li>
		</ul>
	</div>
</PageContent>

<style lang="scss">
	ul {
		list-style-type: disc;
		padding: 1rem;

		li {
			margin-top: 0.5rem;

			a {
				text-decoration-thickness: 1px;
			}
		}
	}
</style>
