<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _ } from "$lib/i18n";
	import { replaceSpecialChars } from "$lib/replaceSpecialChars";

	$: description = $_("seeLegalInfo").replace("%topic", $_("licenses")) + $_("descSuffix");
	$: title = $_("licenses") + titleSuffix;
</script>

<svelte:head>
	<meta content={replaceSpecialChars(description)} name="description" />
	<meta content={replaceSpecialChars(description)} property="og:description" />
	<meta content={replaceSpecialChars(description)} name="twitter:description" />

	<meta content={replaceSpecialChars(title)} property="og:title" />
	<meta content={replaceSpecialChars(title)} property="twitter:title" />
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
			<li><a class="link secondary" href="https://github.com/disgoorg/disgo">Disgo</a></li>
			<li><a class="link secondary" href="https://discordeno.js.org/">Discordeno</a></li>
			<li><a class="link secondary" href="https://abal.moe/Eris">Eris</a></li>
			<li><a class="link secondary" href="https://tailwindcss.com">Tailwind CSS</a></li>
			<li><a class="link secondary" href="https://svelte.dev">Svelte (+ Kit)</a></li>
			<li><a class="link secondary" href="https://github.com/davfsa/nirn-proxy">Nirn</a></li>
		</ul>
		<ul>
			<li><a class="link secondary" href="https://grafana.com">Grafana</a></li>
			<li><a class="link secondary" href="https://victoriametrics.com">VictoriaMetrics</a></li>
			<li><a class="link secondary" href="https://mongodb.com">MongoDB</a></li>
			<li><a class="link secondary" href="https://postgresql.org">PostgreSQL</a></li>
			<li><a class="link secondary" href="https://nodejs.org">Node.js</a></li>
			<li><a class="link secondary" href="https://go.dev">Go</a></li>
			<li><a class="link secondary" href="https://k3s.io">k3s</a></li>
			<li><a class="link secondary" href="https://prometheus.io">Prometheus</a></li>
			<li><a class="link secondary" href="https://redis.io">Redis</a></li>
			<li><a class="link secondary" href="https://stripe.com">Stripe</a></li>
			<li><a class="link secondary" href="https://paddle.com">Paddle</a></li>
			<li><a class="link secondary" href="https://uptime.kuma.pet">Uptime Kuma</a></li>
			<li><a class="link secondary" href="https://weblate.org">Weblate</a></li>
			<li><a class="link secondary" href="https://temporal.io">Temporal</a></li>
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
