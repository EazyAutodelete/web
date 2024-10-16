<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import { u } from "$lib/i18n.js";

	export let data;

	const { rank, guild, tags, configs, date, guildtext, text, avatar, icon, title, name } = data;

	// let name: string;
	// let rank: string;
	// let guild: string;
	// let tags: string[];
	// let configs: string[];
	// let date: string;
	// let guildtext: string;
	// let text: string;
	// let avatar: string;
	// let icon: string;
	// let title: string;
</script>

<PageContent>
	<div class="w-full">
		<h1 class="underline">{title}</h1>
	</div>
	<div class="w-full lg:w-1/4 lg:order-2 lg:ps-6 side">
		<div class="user">
			<img src={avatar} alt="User" />
			<div class="text">
				<h4>{name}</h4>
				<p>{rank}</p>
			</div>
		</div>
		<div class="server">
			<img src={icon} alt="Server" />
			<div class="text">
				<h4>{guild}</h4>
				<p>{guildtext}</p>
			</div>
		</div>
		<p>Tags</p>
		<ul class="tags">
			{#each tags as tag}
				<a href={$u("/use-cases-examples") + "?tag=" + tag.toLowerCase()}><li>{tag}</li></a>
			{/each}
		</ul>
		<p>Shared configs</p>

		<ul class="configs">
			{#each configs as config}
				<a href={$u("/share") + "/{config}"}><li>{config}</li></a>
			{/each}
		</ul>
		<p class="date">{date.toString()}</p>
	</div>
	<div class="w-full lg:w-3/4 lg:order-1">
		{@html text}
	</div>
</PageContent>

<style lang="scss">
	p {
		text-align: justify;
		margin-bottom: 0.5rem;
	}

	.side {
		.user,
		.server {
			display: flex;
			align-items: center;
			gap: 1rem;
			background-color: #283444;
			padding: 1rem;
			border-radius: 10px;
			width: 100%;
			margin-bottom: 1rem;

			.text {
				h4 {
					font-size: large;
					font-weight: 700;
					padding: 0 0 0.25rem;
				}

				p {
					font-size: small;
					font-weight: 400;
					margin-top: 0;
				}
			}

			img {
				width: 3rem;
				height: auto;
				object-fit: cover;
				border-radius: 50%;
			}
		}

		.date {
			font-size: small;
			font-weight: 400;
			margin-top: 1rem;
			color: #8d8d8d;
		}

		.configs,
		.tags {
			list-style-type: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;

			a {
				text-decoration: none;
				color: white;

				&:hover {
					text-decoration: underline;
					cursor: pointer;
				}
			}

			li {
				padding: 0.5rem 1rem;
				border-radius: 10px;
				background-color: #283444;
				font-size: small;
				font-weight: 600;
				letter-spacing: 0.5px;
				word-wrap: break-word;
			}
		}

		p {
			font-size: medium;
			font-weight: 400;
			margin-top: 1rem;
			margin-bottom: 0.125rem;
		}
	}
</style>
