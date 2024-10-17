<script lang="ts">
	import { u } from "$lib/i18n";

	export let id: string;
	export let title: string;
	export let description: string;
	export let tags: string[];
	export let img: string;
</script>

<a href="{$u('use-cases-examples')}/{id}">
	<div class="example">
		<img src={img} alt={title} title={title} />
		<h3>{title}</h3>
		<p>{description}</p>
		<div class="tags">
			{#each tags as tag}
				<span>{tag}</span>
			{/each}
		</div>
	</div>
</a>

<style lang="scss">
	.example {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		padding: 1rem;
		border-radius: 10px;
		background-color: #1b1c1c;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;

		img {
			width: 100%;
			height: 200px;
			object-fit: cover;
			border-radius: 10px;
			margin-bottom: 1rem;
		}

		h3 {
			font-size: x-large;
			font-weight: 700;
			padding-top: 0;
		}

		p {
			font-size: medium;
			font-weight: 400;
			margin-bottom: 1rem;
		}

		.tags {
			display: flex;
			gap: 0.5rem;
			margin-top: 1rem;

			span {
				padding: 0.25rem 0.5rem;
				border-radius: 5px;
				background-color: #283444;
				font-size: small;
				font-weight: 700;
			}
		}

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
		}
	}
</style>
