<script lang="ts">
	import Alert from "$lib/components/Alert.svelte";
	import Server from "$lib/components/Server.svelte";
	import { onMount } from "svelte";

	export let data: {
		incident: any;
		messages: { 3600000: 0; 86400000: 0; 604800000: 0; 2592000000: 0; 31536000000: 0 };
		guilds: { count: number };
	};

	const servers: {
		name: string;
		members: number;
		type: ("verified" | "partnered" | "large") | ("verified" | "partnered" | "large")[];
		id: string;
	}[] = [
		{
			id: "927657096718204969",
			name: "The Fightory",
			members: 3400,
			type: "partnered",
		},
		{
			id: "170289352604254217",
			name: "GermanSimRacing",
			members: 11500,
			type: ["partnered", "verified"],
		},
		{
			id: "198050786440249344",
			name: "r/Indonesia",
			members: 7700,
			type: "partnered",
		},
		{
			id: "228236573370482688",
			name: "UniversoCraft",
			members: 306000,
			type: "partnered",
		},
		{
			id: "251162774833594369",
			name: "Fnatic",
			members: 35000,
			type: "verified",
		},
		{
			id: "278511854525874177",
			name: "Clash of Clans FR",
			members: 17500,
			type: "partnered",
		},
		{
			id: "286201567760089088",
			name: "Clash Royale FR",
			members: 34800,
			type: "partnered",
		},
		{
			id: "343067824979443722",
			name: "Guild Wars 1 Community & [LGiT] Alliance",
			members: 9400,
			type: "partnered",
		},
		{
			id: "346403197700538369",
			name: "Pokemon GO Remote Raids",
			members: 31500,
			type: "partnered",
		},

		{
			id: "455918764223889428",
			name: "🔥・Tobi's Gang",
			members: 6400,
			type: "verified",
		},
		{
			id: "469586581599158303",
			name: "Little Rock Games",
			members: 6000,
			type: "verified",
		},
		{
			id: "492821138305712149",
			name: "ECAC Esports",
			members: 6900,
			type: "verified",
		},
		{
			id: "542602456132091904",
			name: "Aether Hunts",
			members: 50700,
			type: "large",
		},
		{
			id: "574711449566445603",
			name: "Tolarian Community College",
			members: 26600,
			type: "partnered",
		},

		{
			id: "749810954644095007",
			name: "Cool Cats Club (18+)",
			members: 7600,
			type: "partnered",
		},
		{
			id: "754130819634692106",
			name: "ZooMafia",
			members: 33100,
			type: ["partnered", "verified"],
		},
		{
			id: "774176471097933854",
			name: "StudyTme | CEOgang",
			members: 10700,
			type: "partnered",
		},
		{
			id: "818839424481624146",
			name: "超DTM部",
			members: 2200,
			type: "partnered",
		},
		{
			id: "875035050826162177",
			name: "Destiny 2 AR",
			members: 17300,
			type: "partnered",
		},
		{
			id: "904694496061689866",
			name: "Match Masters",
			members: 53400,
			type: "large",
		},
		{
			id: "928141101846650890",
			name: "Reverse: 1999",
			members: 242800,
			type: "large",
		},

		{
			id: "1010305792181801003",
			name: "d4vd’s closet",
			members: 15300,
			type: "verified",
		},
		{
			id: "1045128379512393810",
			name: "URIBO THE CAT",
			members: 4500,
			type: "partnered",
		},
		{
			id: "1060639626601185381",
			name: "Kaiber AI",
			members: 107700,
			type: "large",
		},
		{ id: "329272032778780672", members: 24000, type: "verified", name: "Kitfox Games" },

		{
			id: "1138109331863248960",
			name: "moonvalley🌕",
			members: 269900,
			type: "large",
		},
		{
			id: "413076003603087361",
			name: "Sea of Thieves Poland",
			members: 23000,
			type: "partnered",
		},
	];

	$: activeServers = servers.reduce((shuffled, _, index) => {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		if (randomIndex !== index) {
			shuffled[index] = shuffled[randomIndex];
		}
		shuffled[randomIndex] = servers[index] as any;
		return shuffled;
	}, []) as typeof servers;

	let messageIndex = 1;
	let messagesStop = Math.round(Object.entries(data.messages)[messageIndex][1] / 100) * 100;

	let duration = 1250;

	onMount(() => {
		const guilds = Math.floor((data?.guilds?.count || 11300) / 100) * 100;
		const increment = Math.ceil(guilds / (duration / 10));

		const guildsInterval = setInterval(() => {
			serverCount = increment + serverCount;
			if (serverCount >= guilds) {
				serverCount = guilds;
				clearInterval(guildsInterval);
			}
		}, 10);

		const targetText = " Discord Bot to automatically delete messages.";
		let currentIndex = 0;
		const textInterval = setInterval(() => {
			if (currentIndex >= targetText.length) {
				clearInterval(textInterval);
			} else {
				introText += targetText[currentIndex];
				currentIndex++;
			}
		}, duration / targetText.length);

		if (data && data.messages) {
			console.log(data.messages);
		}

		animateMessages();
	});

	function animateMessages() {
		messageCount = 0;
		const messagesIncrement = Math.ceil(messagesStop / (duration / 10));

		const messagesInterval = setInterval(() => {
			messageCount += messagesIncrement;
			if (messageCount >= messagesStop) {
				messageCount = messagesStop;
				clearInterval(messagesInterval);
			}
		}, 10);
	}

	function nextStat() {
		messageIndex++;
		if (messageIndex >= Object.entries(data.messages).length) {
			messageIndex = 0;
		}
		messagesStop = Math.round(Object.entries(data.messages)[messageIndex][1] / 100) * 100;

		duration = 500;

		animateMessages();
	}

	$: serverCount = 0;
	$: messageCount = 0;
	$: introText = "A";
	$: messageText = `${Object.values(statOptions)[messageIndex]}`;

	const statOptions = {
		3600000: "hour",
		86400000: "today",
		604800000: "last 7 days",
		2592000000: "last 30 days",
		31536000000: "last year",
	};
</script>

{#if data.incident}
	<Alert
		title={"Status Information"}
		text={"Check the status of the bot and the API on our status page."}
		duration={7500}
		type="warning"
	/>
{/if}

<div class="container-fluid" style="font-family: 'Exo'">
	<div class="mt-5 pt-4" style="background-color: #26262b">
		<div class="row justify-content-center">
			<div class="col-10 text-center fw-bolder mb-3">
				<div>
					<img
						src="/assets/img/logo-small.webp"
						height="128"
						width="128"
						style="border-radius: 35px"
						class="mb-4 shadow-lg animated-105"
						alt="EazyAutodelete Logo"
					/>
					<h1 class="fs-1 fw-bold">
						Hey, I'm
						<a href="invite" style="text-decoration: none"><span class="accent">EazyAutodelete</span></a>!
					</h1>
				</div>
				<div>
					<h2
						class="fs-lg-2 fs-3 fw-normal"
						id="intro-writer"
						aria-label="A Discord Bot to automatically delete messages!"
					>
						{introText}
					</h2>
				</div>
			</div>
			<div class="col-10 row text-center justify-content-center">
				<div class="order-lg-3 col-12 col-lg-12 mt-lg-2 mb-4 mb-lg-0 align-items-center pb-lg-3 animated-105">
					<a href="invite"
						><button
							type="button"
							class="col-10 col-md-6 col-xl-4 col-xx mt-2 btn btn-outline-primary shadow"
							style="color: #fff; background-color: #5865f2; border-color: #5865f2; border-radius: 50px"
						>
							Add to Server
						</button></a
					>
				</div>
				<div class="col-5 col-md-3 col-xl-2 me-2 stats shadow">
					<div>
						<h4 id="server-count">{serverCount.toLocaleString()}+</h4>
					</div>
					<div>
						<p>Servers</p>
					</div>
				</div>
				<div class="col-5 col-md-3 col-xl-2 ms-2 me-2 stats shadow">
					<div>
						<h4 id="msg-count">{messageCount.toLocaleString()}+</h4>
					</div>
					<div>
						<p style="display: inline; padding-right: 4px">Deleted Messages</p>
						<a id="stats" data-stat="week" on:click={nextStat}>{messageText}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div style="background-color: #1b1c1c">
	<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M 0,400 C 0,400 0,133 0,133 C 85.25936104431463,139.16695293713502 170.51872208862926,145.33390587427002 237,135 C 303.48127791137074,124.66609412572998 351.1844726897974,97.83132944005497 407,95 C 462.8155273102026,92.16867055994503 526.7433871521813,113.34077636551012 603,137 C 679.2566128478187,160.65922363448988 767.841978701477,186.80556509790455 841,174 C 914.158021298523,161.19443490209545 971.88869804191,109.43696324287184 1031,107 C 1090.11130195809,104.56303675712816 1150.603229130883,151.44658193060806 1219,164 C 1287.396770869117,176.55341806939194 1363.6983854345585,154.77670903469595 1440,133 C 1440,133 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262b88"
			class="transition-all duration-300 ease-in-out delay-150 path-0"
			transform="rotate(-180 720 200)"
		/>
		<path
			d="M 0,400 C 0,400 0,266 0,266 C 51.69632428718651,267.71350051528685 103.39264857437303,269.4270010305737 178,266 C 252.60735142562697,262.5729989694263 350.1257299896944,254.00549639299211 432,247 C 513.8742700103056,239.99450360700789 580.1044314668499,234.5510133974579 632,252 C 683.8955685331501,269.4489866025421 721.4565441429064,309.7904500171762 793,312 C 864.5434558570936,314.2095499828238 970.0693919615251,278.28718653383714 1055,255 C 1139.930608038475,231.71281346616286 1204.2658880109927,221.0608038474751 1265,225 C 1325.7341119890073,228.9391961525249 1382.8670559945035,247.46959807626246 1440,266 C 1440,266 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262bff"
			class="transition-all duration-300 ease-in-out delay-150 path-1"
			transform="rotate(-180 720 200)"
		/>
	</svg>
</div>

<div class="container-fluid" style="font-family: 'Exo'; background-color: #1b1c1c">
	<div class="container" id="features">
		<div class="row content">
			<div class="col-10 col-lg-5 p-3" data-aos="fade-up">
				<div class="ft">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						class="bi bi-stopwatch"
						viewBox="0 0 16 16"
					>
						<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
						<path
							d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"
						/>
					</svg>
					<h2>Set WHEN to delete messages</h2>
				</div>

				Choose from 4 different
				<a href="https://docs.eazyautodelete.xyz/config/mode" target="_blank">modes</a> that delete the messages.<br
				/>You can delete the messages after a certain number of messages, a certain duration or many other criteria.
			</div>
			<div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5" data-aos="fade-up">
				<div class="col-6 pb-2 col-lg-9 ps-lg-5 ms-lg-5">
					<video id="mode-1" class="rounded-3 animated-105 shadow" width="80%" autoplay loop muted>
						<source src="/assets/vid/webm/mode-1.webm" type="video/mp4" />
						Your Browser does not support the video tag.
					</video>
				</div>
				<div class="col-6 pb-2 col-lg-9">
					<video class="img-fluid rounded-3 animated-105 shadow" width="70%" id="mode-2" autoplay loop muted>
						<source src="/assets/vid/webm/mode-3.webm" type="video/mp4" />
						Your Browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>

		<hr />

		<div class="row content">
			<div class="col-10 col-lg-5 p-3 order-lg-2" data-aos="fade-up">
				<div class="ft">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						class="bi bi-funnel"
						viewBox="0 0 16 16"
					>
						<path
							d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"
						/>
					</svg>
					<h2>Set WHICH messages to delete</h2>
				</div>

				You can choose from a large number of
				<a href="https://docs.eazyautodelete.xyz/config/filters" target="_blank">filters</a> that the messages must meet
				in order to be deleted.<br />Set whether
				<a href="https://docs.eazyautodelete.xyz/config/filter-behavior" target="_blank"
					>only one filter or all filters</a
				>
				must be met for a message to be deleted.
			</div>

			<div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5 order-lg-1" data-aos="fade-up">
				<div class="col-6 pb-2 col-lg-9">
					<img
						src="/assets/img/filters.webp"
						class="rounded-3 animated-105 shadow"
						width="100%"
						alt="A list of available filters"
					/>
				</div>
			</div>
		</div>

		<hr />

		<div class="row content">
			<div class="col-10 col-lg-5 p-3" data-aos="fade-up">
				<div class="ft">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						class="bi bi-person-check"
						viewBox="0 0 16 16"
						style="font-size: 150%;"
					>
						<path
							d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
						/>
						<path
							d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"
						/>
					</svg>
					<h2>Set WHOSE messages to delete&#160;</h2>
				</div>

				<a href="https://docs.eazyautodelete.xyz/config/ignore-roles" target="_blank">Ignore messages</a> from members
				with certain roles or delete messages from
				<a href="https://docs.eazyautodelete.xyz/config/filters" target="_blank">bots only</a>.<br />The many settings
				allow you to customize everything exactly to your needs.
			</div>
			<div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5" data-aos="fade-up">
				<div class="col-5 pb-2 col-lg-7">
					<img src="/assets/img/ignore.webp" class="rounded-3 animated-105 shadow" width="100%" alt="Role selection" />
				</div>
				<div class="col-5 pb-2 col-lg-8 ps-lg-5 ms-lg-5">
					<img
						src="/assets/img/bots.webp"
						class="img-fluid rounded-3 animated-105 shadow"
						alt="Toggle author is bot or author isnt bot"
					/>
				</div>
			</div>
		</div>

		<div class="col-12 row text-center mt-5 pt-5 justify-content-center">
			<div
				class="col-7 col-md-5 col-lg-4 col-xl-3 fs-3 pt-2 pb-2 animated-105 shadow"
				style="background-color: #242424; border-radius: 20px"
			>
				<a href="/invite" style="color: #fff; text-decoration: none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						class="bi bi-arrow-right-circle-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
						/>
					</svg>
					<a href="/invite" class="nolink underline accent fw-bold">Get started...</a></a
				>
			</div>
		</div>
	</div>
</div>

<div style="background-color: #1b1c1c">
	<svg
		width="100%"
		height="100%"
		id="svg"
		viewBox="0 0 1440 400"
		xmlns="http://www.w3.org/2000/svg"
		class="transition duration-300 ease-in-out delay-150"
	>
		<path
			d="M 0,400 C 0,400 0,133 0,133 C 53.204397114393686,147.87873582961183 106.40879422878737,162.75747165922365 173,168 C 239.59120577121263,173.24252834077635 319.5692201992443,168.84884919271727 391,170 C 462.4307798007557,171.15115080728273 525.3143249742357,177.84713156990728 603,168 C 680.6856750257643,158.15286843009272 773.1734799038131,131.7626245276537 836,115 C 898.8265200961869,98.2373754723463 931.9917554105118,91.10237031947786 995,104 C 1058.0082445894882,116.89762968052214 1150.8594984541394,149.8278941944349 1230,158 C 1309.1405015458606,166.1721058055651 1374.5702507729302,149.58605290278257 1440,133 C 1440,133 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262b88"
			class="transition-all duration-300 ease-in-out delay-150 path-0"
		/>
		<path
			d="M 0,400 C 0,400 0,266 0,266 C 56.51803503950532,284.29543112332533 113.03607007901064,302.5908622466506 188,300 C 262.96392992098936,297.4091377533494 356.3737547234628,273.9319821367228 431,262 C 505.6262452765372,250.06801786327722 561.4689110271385,249.68120920645833 616,257 C 670.5310889728615,264.31879079354167 723.7506011679835,279.34318103744414 795,277 C 866.2493988320165,274.65681896255586 955.5286843009276,254.94606664376505 1040,246 C 1124.4713156990724,237.05393335623495 1204.1346616283065,238.8725523874957 1270,244 C 1335.8653383716935,249.1274476125043 1387.9326691858469,257.56372380625214 1440,266 C 1440,266 1440,400 1440,400 Z"
			stroke="none"
			stroke-width="0"
			fill="#26262bff"
			class="transition-all duration-300 ease-in-out delay-150 path-1"
		/>
	</svg>
</div>

<div class="container-fluid">
	<div class="container text-center pb-5 mb-5">
		<div class="pb-2">
			<h3 class="fs-2 fw-bold">Trusted by large & <span class="accent">partnered</span> Servers</h3>
		</div>
		<div class="row justify-content-center pt-3 pt-lg-0">
			{#each activeServers.slice(0, 24) as server}
				<Server name={server.name} members={server.members} id={server.id} type={server.type} />
			{/each}
		</div>
	</div>

	<div class="container text-center pt-5">
		<div class="pb-2">
			<h4 class="fs-2 fw-bold">Ready? Then what are you waiting for?</h4>
		</div>
		<div class="row pt-3 pt-lg-0 justify-content-center">
			<div class="col-5 col-lg-2">
				<a href="/invite">
					<button type="button" class=" btn btn-outline-primary btn-lg" id="inviteButton"> Add to Server </button>
				</a>
			</div>
			<div class="col-5 col-lg-2">
				<a href="/discord">
					<button type="button" class="btn btn-outline-secondary btn-lg" id="supportButton"> Support Server </button>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		justify-content: center;
		padding-bottom: 5rem;

		&:not(:first-child) {
			padding-top: 5rem;
		}
	}

	.ft {
		display: flex;
		line-break: normal;
		text-decoration: underline;
		text-decoration-color: #5865f2;
		text-decoration-thickness: 15%;
		text-underline-position: below;

		flex: 1;

		h2 {
			display: inline-block;
			line-break: normal;

			flex: 1;

			margin-bottom: 2rem;
		}

		svg {
			margin-right: 1rem;
			color: #5865f2;
		}
	}
</style>
