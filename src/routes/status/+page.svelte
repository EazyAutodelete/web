<script lang="ts">
	import type { ShardData } from "../../app";

	export let data: { shards: ShardData[] };

	let enteredId: string;
	let shardId: bigint;

	function calcId() {
		if (enteredId && /^[0-9]+$/.test(enteredId)) shardId = (BigInt(enteredId) >> 22n) % 16n;
		else shardId = -1n;
	}
</script>

<svelte:head>
	<title>Status | EazyAutodelete</title>
</svelte:head>

<div class="container-fluid" style="font-family: 'Exo'">
	<div class="mt-5 pt-4" style="background-color: #26262b">
		<div class="row justify-content-center">
			<div class="col-10 text-center fw-bolder mb-3">
				<h1>Shards Status</h1>
				<p>EazyAutodelete is split into shards for better performance. Each shard handles around 1,000 servers.</p>
			</div>
		</div>
	</div>

	<div class="row justify-content-center mb-3">
		<div class="col-8">
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
		</div>
		<div class="col-4 col-lg-2" style="text-align: left;">
			<div class="id-con" style=" height: 2rem">
				<div class="id">
					Shard: <strong>{(shardId || shardId === 0n) && shardId !== -1n ? shardId : ""}</strong>
				</div>
			</div>
		</div>
	</div>

	<div class="row justify-content-center">
		<div class="col-12 col-lg-10">
			<div class="row">
				{#if data.shards && data.shards.length > 0}
					{#each data.shards.sort((a, b) => a.shardId - b.shardId) as shard}
						<div class="col-6 col-lg-2 shard">
							<div class="shard-body p-2 p-lg-3" class:highlight={shardId === BigInt(shard.shardId)}>
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
					<div class="col-12 shard">
						<div class="shard-body p-3">
							<h5 class="shard-title">No Shards found</h5>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="col-12 col-lg-10">
			<div class="row">
				<div class="col-12">
					<p class="status">
						Check the <a href="https://status.eazyautodelete.xyz">Status Page</a> for more information.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.status {
		font-size: 0.8rem;
		font-weight: 700;
	}

	h1 {
		padding-top: 2rem;
	}

	.guild-con {
		height: 2.5rem;

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
		font-size: 0.7rem;
		// margin-left: 0.5rem;

		transform: translateY(-0.2rem);

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
		margin-bottom: 1rem;
	}

	.shard-title {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.shard-body {
		background-color: #1b1c1c;
		border: none;
		border-radius: 8px;

		color: white;
		font-size: 0.7rem;

		border: transparent 1px solid;

		transition: all 0.2s ease-in-out;

		&.highlight {
			border: #28a745 1px solid;
			font-weight: bold;
		}

		p {
			margin: 0 !important;
		}

		/* display: flex; */

		/* justify-content: space-between; */
	}
</style>
