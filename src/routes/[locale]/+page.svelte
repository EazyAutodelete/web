<script lang="ts">
	import Alert from "$lib/components/Alert.svelte";
	import Server from "$lib/components/Server.svelte";
	import guilds from "$lib/data/guilds.json";
	import IntroWriter from "$lib/components/IntroWriter.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import GuildCounter from "$lib/components/GuildCounter.svelte";
	import MessageCounter from "$lib/components/MessageCounter.svelte";
	import FeatureStack1 from "$lib/components/FeatureStack1.svelte";
	import FeatureStack2 from "$lib/components/FeatureStack2.svelte";
	import FeatureStack3 from "$lib/components/FeatureStack3.svelte";
	import { _ } from "$lib/i18n";

	export let data: {
		incident: any;
		messages: { 3600000: 0; 86400000: 0; 604800000: 0; 2592000000: 0; 31536000000: 0 };
		guilds: { count: number };
	};

	const servers = guilds;

	$: activeServers = servers.reduce((shuffled: any[], _, index) => {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		if (randomIndex !== index) {
			shuffled[index] = shuffled[randomIndex];
		}
		shuffled[randomIndex] = servers[index] as any;
		return shuffled;
	}, []) as typeof servers;

	function shuffleServers() {
		activeServers = servers.reduce((shuffled: any[], _, index) => {
			const randomIndex = Math.floor(Math.random() * (index + 1));
			if (randomIndex !== index) {
				shuffled[index] = shuffled[randomIndex];
			}
			shuffled[randomIndex] = servers[index] as any;
			return shuffled;
		}, []) as typeof servers;
	}

	let width: number;
	$: width;
</script>

<svelte:head>
	<title>EazyAutodelete - Autodelete Discord Bot</title>
</svelte:head>

<svelte:window bind:innerWidth={width} />

{#if data.incident}
	<Alert
		title={"Status Information"}
		text={"Check the status of the bot and the API on our status page."}
		duration={7500}
		type="warning"
	/>
{/if}

<PageContent>
	<div class="hero pt-9 lg:pt-16">
		<div class="w-full text-center lg:text-start lg:w-2/3">
			<h1 class="inline text-2xl">
				{$_("hey")}
				<a href="invite">EazyAutodelete</a>!
			</h1>

			<IntroWriter />

			<div class="stats space-x-2 space-y-2">
				<a href="invite">
					<button type="button" class="primary px-2 py-2 lg:py-4">{$_("addToDc")}</button>
				</a>

				<GuildCounter guilds={data.guilds.count} />

				<MessageCounter data={data.messages} />
			</div>
		</div>

		{#if width >= 1024}
			<div class="w-1/3 h-full">
				<video id="mode-1" class="rounded-3 animated-105 shadow" width="100%" height="100%" autoplay loop muted>
					<source src="/assets/vid/webm/mode-1.webm" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
			</div>
		{/if}
	</div>
</PageContent>

<div style="background-color: #1b1c1c;" class="mt-6 pb-6 lg:mt-6 lg:p-0">
	<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 0,400 C 0,400 0,133 0,133 C 85.25936104431463,139.16695293713502 170.51872208862926,145.33390587427002 237,135 C 303.48127791137074,124.66609412572998 351.1844726897974,97.83132944005497 407,95 C 462.8155273102026,92.16867055994503 526.7433871521813,113.34077636551012 603,137 C 679.2566128478187,160.65922363448988 767.841978701477,186.80556509790455 841,174 C 914.158021298523,161.19443490209545 971.88869804191,109.43696324287184 1031,107 C 1090.11130195809,104.56303675712816 1150.603229130883,151.44658193060806 1219,164 C 1287.396770869117,176.55341806939194 1363.6983854345585,154.77670903469595 1440,133 C 1440,133 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262b88"
			transform="rotate(-180 720 200)"
		/>
		<path
			d="M 0,400 C 0,400 0,266 0,266 C 51.69632428718651,267.71350051528685 103.39264857437303,269.4270010305737 178,266 C 252.60735142562697,262.5729989694263 350.1257299896944,254.00549639299211 432,247 C 513.8742700103056,239.99450360700789 580.1044314668499,234.5510133974579 632,252 C 683.8955685331501,269.4489866025421 721.4565441429064,309.7904500171762 793,312 C 864.5434558570936,314.2095499828238 970.0693919615251,278.28718653383714 1055,255 C 1139.930608038475,231.71281346616286 1204.2658880109927,221.0608038474751 1265,225 C 1325.7341119890073,228.9391961525249 1382.8670559945035,247.46959807626246 1440,266 C 1440,266 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262bff"
			transform="rotate(-180 720 200)"
		/>
	</svg>
</div>

<div style="background-color: #1b1c1c;">
	<PageContent>
		<div class="w-full">
			<h2 class="pt-0" id="features">{$_("features")}</h2>
			<p class="intro">
				<a href="/invite" class="link primary">EazyAutodelete</a>
				{@html $_("websiteIntro")}
			</p>
		</div>

		<div class="w-full features">
			<h3>{$_("youDecide")}</h3>
			<FeatureStack1 />

			<h3>{$_("adjustable")}</h3>
			<FeatureStack2 />

			<h3>{$_("noLimits")}</h3>
			<FeatureStack3 stats={data.messages} />
		</div>
	</PageContent>
</div>

<!-- SVG -->
<div style="background-color: #1b1c1c">
	<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 0,400 C 0,400 0,133 0,133 C 53.204397114393686,147.87873582961183 106.40879422878737,162.75747165922365 173,168 C 239.59120577121263,173.24252834077635 319.5692201992443,168.84884919271727 391,170 C 462.4307798007557,171.15115080728273 525.3143249742357,177.84713156990728 603,168 C 680.6856750257643,158.15286843009272 773.1734799038131,131.7626245276537 836,115 C 898.8265200961869,98.2373754723463 931.9917554105118,91.10237031947786 995,104 C 1058.0082445894882,116.89762968052214 1150.8594984541394,149.8278941944349 1230,158 C 1309.1405015458606,166.1721058055651 1374.5702507729302,149.58605290278257 1440,133 C 1440,133 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262b88"
		/>
		<path
			d="M 0,400 C 0,400 0,266 0,266 C 56.51803503950532,284.29543112332533 113.03607007901064,302.5908622466506 188,300 C 262.96392992098936,297.4091377533494 356.3737547234628,273.9319821367228 431,262 C 505.6262452765372,250.06801786327722 561.4689110271385,249.68120920645833 616,257 C 670.5310889728615,264.31879079354167 723.7506011679835,279.34318103744414 795,277 C 866.2493988320165,274.65681896255586 955.5286843009276,254.94606664376505 1040,246 C 1124.4713156990724,237.05393335623495 1204.1346616283065,238.8725523874957 1270,244 C 1335.8653383716935,249.1274476125043 1387.9326691858469,257.56372380625214 1440,266 C 1440,266 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262bff"
		/>
	</svg>
</div>

<PageContent>
	<div id="servers" class="w-full servers">
		<h2>Trusted by large & <span class="accent">partnered</span> Servers</h2>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
			{#each activeServers.slice(0, 16) as server}
				<Server name={server.name} members={server.members} id={server.id} type={server.type} />
			{/each}
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p class="link shuffle" on:click={shuffleServers}>Shuffle Servers...</p>
	</div>
</PageContent>

<style lang="scss">

	.shuffle {
		text-decoration-color: inherit;
		font-size: x-small;
		text-decoration-thickness: 1px;
	}

	.hero {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		h1 {
			font-size: xx-large;
			font-weight: 700;
			padding-top: 0;

			a {
				color: #5865f2;
				text-decoration: underline;
				text-decoration-color: #fff;
				text-decoration-thickness: 15%;
				text-underline-position: below;
				text-underline-offset: 0.375rem;
			}
		}

		.stats {
			display: inline-block;
			margin-top: 2.5rem;
			font-size: small;
		}
	}

	h2 {
		text-align: center;

		line-break: normal;
		text-decoration: underline;
		text-decoration-color: #5865f2;
		text-decoration-thickness: 15%;
		text-underline-position: below;
	}

	h3 {
		text-align: start;
		padding-bottom: 0.75rem;
		line-break: normal;
		text-decoration: underline;
		text-decoration-color: #5865f2;
		text-decoration-thickness: 15%;
		text-underline-position: below;
		font-weight: 600;
		margin-top: 1.5rem;
		font-size: x-large;
	}

	p {
		text-align: justify;
		line-break: normal;
	}
</style>
