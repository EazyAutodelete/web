<script lang="ts">
	export let name: string;
	export let members: number;
	export let id: string;
	export let type: ("partnered" | "verified" | "large") | ("partnered" | "verified" | "large")[];
</script>

<div class="col-10 col-md-5 col-lg-3 mt-2 px-3 text-start">
	<div class="guild row">
		<div class="col-2 icon">
			<img src="/assets/ref/{id}.webp" alt="{name} Discord Logo" class="img-fluid" />
		</div>
		<div class="col-10 info">
			{#if type === "partnered" || type.includes("partnered")}
				<svg width="16" height="16" viewBox="0 0 16 15.2">
					<path
						fill="#5865F2"
						fill-rule="evenodd"
						d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
					/>
					<path
						d="M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
						fill="#fff"
					/>
				</svg>
			{/if}
			{#if type === "verified"}
				<img src="/assets/verified.png" alt="White check mark" height="16" width="16" />
			{/if}
			{#if type === "large"}
				<img src="/assets/large.png" alt="Silhouette" height="16" width="16" />
			{/if}

			<span class="fw-bold" style="color: white">{name}</span>

			<div class="mt-1">
				<svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
						fill="rgba(154,161,181,0.16)"
						data-fill="secondary"
					/>
					<path
						d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
						stroke="#9B9D9F"
						data-stroke="main"
						stroke-width="1.5"
					/>
					<path
						d="M15 11a3.5 3.5 0 100-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 00-3.432-4.023v0a2.28 2.28 0 00-.359-.029h-.968"
						stroke="#9B9D9F"
						data-stroke="main"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
				</svg>
				<span style="color: white">{members.toLocaleString()}+</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.guild {
		background-color: #2c2c44;
		border-radius: 6px;
		padding: 6px 6px;

		.icon {
			padding: 0 0 0 0;
			img {
				border-radius: 50%;
				width: 100%;
			}
		}

		.info {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
