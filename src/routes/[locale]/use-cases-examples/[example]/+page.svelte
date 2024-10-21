<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _, u } from "$lib/i18n";
	import formatText from "$lib/utils/formatText";
	import replaceNameWithLink from "$lib/utils/replaceNameWithLink";

	export let data;

	const { rank, guild, tags, configs, date, guildtext, text, avatar, icon, title, name, img, invite } = data;

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

	$: description = $_("seeUseCaseExample").replace("%user", name).replace("%server", guild) + $_("descSuffix");
	$: metaTitle = $_("useCaseTitle").replace("%user", name).replace("%server", guild) + titleSuffix;
</script>

<svelte:head>
	<meta content={description} name="description" />
	<meta content={description} property="og:description" />
	<meta content={description} name="twitter:description" />

	<meta content={metaTitle} property="og:title" />
	<meta content={metaTitle} property="twitter:title" />
	<title>{metaTitle}</title>
</svelte:head>

{#if img}
	<div class="banner">
		<img src={img} alt="" />
	</div>
{/if}

<PageContent>
	<div class="w-full">
		<h1 class="underline">{title}</h1>
	</div>
	<div class="w-full lg:w-1/4 lg:order-2 lg:ps-6 side">
		<div class="user">
			<img src={avatar} alt="User Avatar" title="User Avatar of {name}" />
			<div class="text">
				<h4>{name}</h4>
				<p>{rank}</p>
			</div>
		</div>
		<a class="server" href="https://discord.com/invite/{invite || '9AKqaza'}">
			<img src={icon} alt="Server Icon of {guild}" title="Server Icon of {guild}" />

			<div class="text">
				<h4>{guild}</h4>
				<p>{guildtext}</p>
			</div>
		</a>
		<p>Tags</p>
		<ul class="tags">
			{#each tags as tag}
				<li><a href={$u("/use-cases-examples") + "?tag=" + tag.toLowerCase()}>{tag}</a></li>
			{/each}
		</ul>
		<p>{$_("sharedConfigs")}</p>

		<ul class="configs">
			{#each configs as config}
				<li><a href={`https://dash.eazyautodelete.xyz/share/${config.share}`}>{config.id}</a></li>
			{/each}
		</ul>
		<p class="date">{date.toString()}</p>
	</div>
	<div class="w-full lg:w-3/4 lg:order-1">
		{#each text.split("\n") as line}
			{@html formatText(replaceNameWithLink(line))}
		{/each}
	</div>
</PageContent>

<style lang="scss">
	.banner {
		display: block;
		width: 100%;
		max-height: 30vh;
		object-fit: fill;

		img {
			width: 100%;
			max-height: inherit;
			object-fit: cover;
		}
	}
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
			padding: 0.5rem 1rem;
			border-radius: 10px;
			width: 100%;
			margin-bottom: 1rem;

			.text {
				overflow: hidden;

				h4 {
					font-size: medium;
					font-weight: 700;
					padding: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					max-width: 100%;
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

			li {
				padding: 0.25rem 0;
				a {
					text-decoration: none;
					color: white;
					padding: 0.5rem 1rem;
					border-radius: 10px;
					background-color: #283444;
					font-size: small;
					font-weight: 600;
					letter-spacing: 0.5px;
					word-wrap: break-word;

					&:hover {
						text-decoration: underline;
						cursor: pointer;
					}
				}
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
