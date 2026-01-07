<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _ } from "$lib/i18n";
	import { onMount } from "svelte";

	let enteredId: string;
	let shardId: bigint;

	function calcId() {
		if (enteredId && /^[0-9]+$/.test(enteredId)) shardId = (BigInt(enteredId) >> 22n) % 16n;
		else shardId = -1n;
	}

	type Shard = {
		id: number;
		node: string;
		status: "Ready" | "Connecting" | "Disconnected" | "Unidentified" | "Identifying" | "Resuming";
		data: { available: number; unavailable: number };
		latency: number;
		last_data: Date;
	};

	$: shards = [] as Shard[]
	function fetchShardData() {
		fetch("https://shards.eazyautodelete.xyz/status")
			.then((res) => res.json())
			.then((json) => {
				shards = json.shards.map((s: Shard) => ({
					...s,
					node: s.node.split("-").length > 1 ? s.node.split("-")[1] : "0",
					last_data: new Date(s.last_data)
				}));
		})
			.catch((err) => {
				console.error("Error fetching shard data:", err);
			});
	}

	onMount(() => {
		fetchShardData();
		const interval = setInterval(fetchShardData, 60000); // Refresh every 60 seconds

		return () => clearInterval(interval); // Cleanup on component unmount
	});

	$: description = $_("seeStatusPage") + $_("descSuffix");
	$: title = $_("shardsStatus") + titleSuffix;
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
		<h1 class="text-center underline">{$_("shardsStatus")}</h1>
		<p>{$_("statusInfo")}</p>
	</div>

	<div class="guild-con">
		<input
			class="guild-input"
			type="text"
			placeholder={$_("enterGuildId")}
			bind:value={enteredId}
			on:keyup={calcId}
			on:change={calcId}
		/>
	</div>

	<div class="id-con">
		<div class="id">
			Shard: <strong>{(shardId || shardId === 0n) && shardId !== -1n ? shardId : ""}</strong>
		</div>
	</div>

	<div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
		{#if shards && shards.length > 0}
			{#each shards.sort((a, b) => a.id - b.id) as shard}
				<div class="shard" title={'Last data received: ' + shard.last_data.toLocaleString()}> 
					<div class="shard-body p-3" class:highlight={shardId === BigInt(shard.id)}>
						<h5 class="shard-title">
							Shard {shard.id} | #{shard.node}
							{#if shard.last_data < new Date(Date.now() - 2 * 60 * 1000)}
								<span class="badge bgorange ms-lg-1">Potential Timeout</span>
							{/if}
							{#if shard.status === "Ready"}
								<span class="badge bgsuccess ms-lg-1">Online</span>
							{:else if shard.status === "Connecting"}
								<span class="badge bgorange">Connecting</span>
							{:else if shard.status === "Disconnected"}
								<span class="badge bgdanger">Disconnected</span>
							{:else if shard.status === "Unidentified"}
								<span class="badge bgdanger">Unidentified</span>
							{:else if shard.status === "Identifying"}
								<span class="badge bgorange">Identifying</span>
							{:else if shard.status === "Resuming"}
								<span class="badge bgorange">Resuming</span>
							{:else}
								<span class="badge bgdanger">Offline</span>
							{/if}
						</h5>

						<div class="shard-info">
							<p>Servers: {shard.data?.available || 0}</p>
							<p>Unvailable: {shard.data?.unavailable || 0}</p>
							<p>Ping: {shard.last_data < new Date(Date.now()- 2 * 60 * 1000) ? "???" : shard.latency}ms</p>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<div class="shard">
				<div class="shard-body p-3">
					<h5 class="shard-title">{$_("noShards")}</h5>
				</div>
			</div>
		{/if}
	</div>

	<p class="status pt-4">
		{@html $_("checkStatusPage").replace(
			"%statusPage",
			'<a class="link primary" href="https://status.eazyautodelete.xyz">Status Page</a>'
		)}
	</p>
</PageContent>

<style lang="scss">
	.status {
		width: 100%;
		font-size: small;
		font-weight: 700;
	}

	.guild-con {
		height: 2.5rem;
		width: 100%;
		margin: 1rem 0 0;

		.guild-input {
			width: 100%;
			padding: 0.5rem;
			border-radius: 8px;
			border: none;
			background-color: #1b1c1c;
			color: white;
			vertical-align: middle;
			height: 2.5rem;
		}
	}

	.id-con {
		height: 2.5rem;
		width: 100%;
		margin: 0.5rem 0;

		.id {
			width: 100%;
			padding: 0.5rem;
			border-radius: 8px;
			background-color: #1b1c1c;
			color: white;
			height: 2.5rem;
			display: inline-block;
			vertical-align: middle;
			text-align: start;
		}
	}

	.badge {
		font-size: x-small;
		margin-left: 0.25rem;
		padding: 0.125rem;
		border-radius: 0.25rem;

		&.bgsuccess {
			background-color: #28a745;
		}

		&.bgdanger {
			background-color: #dc3545;
		}

		&.bgorange {
			background-color: #ffc107;
		}
	}

	.shard {
		width: 100%;
	}

	.shard-title {
		margin: 0 0 0.5rem !important;
		padding: 0 !important;
		font-size: small;
		font-weight: 500;
	}

	.shard-body {
		background-color: #1b1c1c;
		border: none;
		border-radius: 8px;

		color: white;
		font-size: x-small;

		border: transparent 1px solid;

		transition: all 0.2s ease-in-out;

		&.highlight {
			border: #28a745 1px solid;
			font-weight: bold;
		}

		p {
			margin: 0 !important;
		}
	}
</style>
