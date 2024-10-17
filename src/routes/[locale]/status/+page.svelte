<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import shards from "$lib/data/shards.json";

	export let data;

	let enteredId: string;
	let shardId: bigint;

	function calcId() {
		if (enteredId && /^[0-9]+$/.test(enteredId)) shardId = (BigInt(enteredId) >> 22n) % 16n;
		else shardId = -1n;
	}
</script>

<svelte:head>
	<title>Status Page - See Bot Status | EazyAutodelete Discord Bot</title>

	<meta
	content="See the Status Page of EazyAutodelete - the best & most customizable Autodelete Bot for Discord. Completely free & in unlimited channels. With EazyAutodelete's advanced configuration options, you can autodelete messages based on user roles, mentions, a large number of filters or time intervals. Set durations like 5 minutes, 1 hour, 1 day, 24 hour or 1 week."
	name="description"
/>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">Shards Status</h1>
		<p>EazyAutodelete is split into shards for better performance. Each shard handles around 1,000 servers.</p>
	</div>

	<div class="guild-con">
		<input
			class="guild-input"
			type="text"
			placeholder="Enter your guild id"
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
		{#if data.shards && data.shards.length > 0}
			{#each data.shards.sort((a, b) => a.shardId - b.shardId) as shard}
				<div class="shard">
					<div class="shard-body p-3" class:highlight={shardId === BigInt(shard.shardId)}>
						<h5 class="shard-title">
							Shard {shard.shardId} | #{shard.workerId}
							{#if shard.state === 0}
								<span class="badge bgsuccess ms-lg-1">Online</span>
							{:else if shard.state === 1}
								<span class="badge bgorange">Connecting</span>
							{:else if shard.state === 2}
								<span class="badge bgdanger">Disconnected</span>
							{:else if shard.state === 3}
								<span class="badge bgdanger">Unidentified</span>
							{:else if shard.state === 4}
								<span class="badge bgorange">Identifying</span>
							{:else if shard.state === 5}
								<span class="badge bgorange">Resuming</span>
							{:else}
								<span class="badge bgdanger">Offline</span>
							{/if}
						</h5>

						<div class="shard-info">
							<p>Servers: {shard.data?.guilds?.length || 0}</p>
							<p>Unvailable: {shard.data?.unavailable?.length || 0}</p>
							<p>Ping: {shard.rtt}ms</p>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<div class="shard">
				<div class="shard-body p-3">
					<h5 class="shard-title">No Shards found</h5>
				</div>
			</div>
		{/if}
	</div>

	<p class="status pt-4">
		Check the <a class="link primary" href="https://status.eazyautodelete.xyz">Status Page</a> for more information.
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
