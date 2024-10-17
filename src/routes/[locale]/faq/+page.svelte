<script>
	import PageContent from "$lib/components/PageContent.svelte";
	import { u } from "$lib/i18n";
</script>

<svelte:head>
	<title>Frequently Asked Questions - EazyAutodelete</title>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">Frequently Asked Questions</h1>

		<div>
			<ul class="nav">
				<li>
					<a href="#getting-started" class="link primary">Getting Started</a>
					<ul>
						<li><a href="#how-to-invite" class="link primary">1. How to add EazyAutodelete to my server?</a></li>
						<li><a href="#how-to-use" class="link primary">2. How do I use EazyAutodelete?</a></li>
						<li><a href="#how-many-channels" class="link primary">3. How many channels can I configure?</a></li>
						<li><a href="#how-many-configs" class="link primary">4. How many configurations can I create?</a></li>
					</ul>
				</li>
				<li>
					<a href="#supported-features" class="link primary">Supported Features</a>
					<ul>
						<li>
							<a href="#supported-channel-types" class="link primary"
								>5. Does EazyAutodelete work with Announcement, Thread, Voice or Forum Channels?</a
							>
						</li>
						<li><a href="#which-languages-are-supported" class="link primary">6. Which languages are supported?</a></li>
						<li><a href="#what-are-the-limits" class="link primary">7. What are the limits of EazyAutodelete?</a></li>
					</ul>
				</li>
				<li>
					<a href="#support" class="link primary">Support</a>
					<ul>
						<li><a href="#is-the-bot-online" class="link primary">8. Is EazyAutodelete online 24/7?</a></li>
						<li><a href="#get-help" class="link primary">9. Where can I get help?</a></li>
						<li><a href="#why-not-delete" class="link primary">10. Why does EazyAutodelete not delete messages?</a></li>
					</ul>
				</li>
				<li>
					<a href="#contribution" class="link primary">Contribution</a>
					<ul>
						<li><a href="#how-to-report-bugs" class="link primary">11. How do I report bugs?</a></li>
						<li><a href="#how-to-request-features" class="link primary">12. How do I request features?</a></li>
						<li><a href="#how-to-report-abuse" class="link primary">13. How do I report abuse?</a></li>
						<li><a href="#how-to-contact" class="link primary">14. How can I contact the team?</a></li>
					</ul>
				</li>
				<li>
					<a href="#support-bot" class="link primary">Supporting EazyAutodelete</a>
					<ul>
						<li><a href="#how-to-support" class="link primary">15. How can I support EazyAutodelete?</a></li>
						<li><a href="#premium-plan" class="link primary">16. What is EazyAutodelete Premium?</a></li>
						<li><a href="#how-to-translate" class="link primary">17. How can I help translate EazyAutodelete?</a></li>
					</ul>
				</li>
			</ul>

			<h1 id="getting-started">Getting Started</h1>
			<ul>
				<h2 id="how-to-invite"><li>1. How to add EazyAutodelete to my server?</li></h2>
				<p>Click on the invite link: <a href="/invite" class="link primary">eazyautodelete.xyz/invite</a>.</p>
				<p>Select your server and press the "Authorize" Button.</p>
				<p>
					Thats it, EazyAutodelete should now be in your server. Run the <code>/autodelete</code> command to get started.
				</p>

				<h2 id="how-to-use"><li>2. How do I use EazyAutodelete?</li></h2>
				<p>After inviting EazyAutodelete, use the <code>/setup</code> command to create a new configuration.</p>
				<p>
					You can contact the team on our <a href="/discord" class="link primary">Support Server</a>. We are happy to
					help you with any questions or issues you might have.
				</p>
				<p>
					A config always consists of a mode and a limit for the selected mode. Additionally, you can freely add as many
					as filters as you would like and configure them accordingly to your needs.
				</p>

				<h2 id="how-many-channels"><li>3. How many channels can I configure?</li></h2>
				<p>There is no limit to the number of channels you can configure.</p>

				<h2 id="how-many-configs"><li>4. How many configurations can I create?</li></h2>
				<p>
					You are limited to 3 configs per channel. If that doesn't fulfill your needs, you should consider subscribing
					to <a href={$u("/premium")} class="link primary">EazyAutodelete Premium</a>.
				</p>
			</ul>

			<h1 id="supported-features">Supported Features</h1>
			<ul>
				<h2 id="supported-channel-types">
					<li>5. Does EazyAutodelete work with Announcement, Thread, Voice or Forum Channels?</li>
				</h2>
				<p>Yes, EazyAutodelete supports all types of channels on Discord.</p>

				<h2 id="which-languages-are-supported"><li>6. Which languages are supported?</li></h2>
				<p>
					EazyAutodelete is available in multiple Languages. Those Languages include English, German, French, Japanese,
					Dutch, Korean, Spanish, Turkish, Portuguese and Polish. You can see the translation Progress for every
					language below.
				</p>
				<div class="w-full">
					<div class="images">

					<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
						<p>Bot</p>
						<img
							src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/commands/horizontal-blue.svg"
							alt="Translation status Bot"
						/>
					</a>

					<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
						<p>Web</p>
						<img
							src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/website/horizontal-blue.svg"
							alt="Translation status Website"
						/>
					</a>

					<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
						<p>Dash</p>
						<img

							src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/dashboard/horizontal-blue.svg"
							alt="Translation status Dashboard"
						/>
					</a>
				</div>

				</div>
				<p>Some languages only have some parts translated. Untranslated strings are shown in English. If you are missing translations or have found an issue with a translation, please contact us on <a href="/discord" class="link primary">Discord</a>.</p>
				<p>If you want to help us translating, click on the charts above or visit <a href="/traslate" class="link primary">eazyautodelete.xyz/translate</a>.</p>

				<h2 id="what-are-the-limits"><li>7. What are the limits of EazyAutodelete?</li></h2>
				<p>
					EazyAutodelete has a few limits to ensure a reliable and fast service as well as a pleasant user experience.
					The limits are evaluated regularly and chosen wisely.
				</p>
				<ul>
					<li><strong>Max. Configs per Channel:</strong> 3</li>
					<li><strong>Mode 1 Limit:</strong> &#62;10 secs, &#60;7 days</li>
					<li><strong>Mode 2 Limit:</strong> &#62;10 secs, &#60;2 days</li>
					<li><strong>Mode 3 Limit:</strong> &#62;5 msgs, &#60;100 msgs</li>
					<li><strong>Mode 4 Limit:</strong> &#62;3 msgs, &#60;200 msgs</li>
				</ul>
				<p>
					If you need more configurations or want to increase the limits, you should consider subscribing to <a
						href={$u("/premium")}
						class="link primary">EazyAutodelete Premium</a
					>.
				</p>
				<span class="disclaimer"
					>Higher limits mean higher server load. Therefore, premium users have higher limits as they help cover the
					server costs. The limits are experimental and may be changed in the future.</span
				>
			</ul>

			<h1 id="support">Support</h1>
			<ul>
				<h2 id="is-the-bot-online"><li>8. Is EazyAutodelete online 24/7?</li></h2>
				<p>Yes. EazyAutodelete is online 24/7 and processes messages in real-time.</p>
				<p>
					However, neither we, Discord nor our partners are 100% protected of Downtimes. We all are only humans and can
					make mistakes - even when we try our best not to.
				</p>
				<p>
					You can check the status of the bot at <a href={$u("/status")} class="link primary"
						>eazyautodelete.xyz/status</a
					>. The status of our other services can be found on
					<a href="https://status.eazyautodelete.xyz" class="link primary">status.eazyautodelete.xyz</a>. Additionally,
					we post status update on our <a href="/discord" class="link primary">Support Server</a>.
				</p>

				<h2 id="get-help"><li>9. Where can I get help?</li></h2>
				<p>
					First of all, you should read this FAQ to check if your message has been answered here. Our Documentation at <a
						href="https://docs.eazyautodelete.xyz"
						class="link primary">docs.eazyautodelete.xyz</a
					> is worth a visit and answers many question.
				</p>
				<p>
					If you still need further help, you can join our <a href="/discord" class="link primary">Support Server</a> to
					get help from our team and the community.
				</p>

				<h2 id="#why-not-delete"><li>10. Why does EazyAutodelete not delete messages?</li></h2>
				<p>If EazyAutodelete does not delete messages, you should check the following:</p>
				<ul>
					<li>
						<strong>Is the Bot online?</strong><br />Does it respond to your commands? Check the
						<a href={$u("status")} class="link primary">Bot Status</a>,
						<a href="https://status.eazyautodelete.xyz" class="link primary">Status Page</a>
						and the
						<a href="https://discord.com/channels/670695157661696002/932713921486401626" class="link primary">#status</a
						>
						announcements on our <a href="/discord" class="link primary">Support Server</a>.
					</li>
					<li>
						<strong>Does the bot have all needed permissions in that channel?</strong><br />Check the channel specific
						permissions and verify that EazyAutodelete has permissions to View the Channel and Manage Messages.
					</li>
					<li>
						<strong>Check your configs</strong><br />
						Verify that you set everything up correctly. Wrong Filters? Wrong Mode? Wrong Limit?
					</li>
					<li>
						<strong>Are the messages less than 14 days old?</strong><br />
						Due to Limitations by Discord, every Bot on Discord can not delete messages that are more than 14 days old. Read
						more <a href="https://github.com/discord/discord-api-docs/issues/208" class="link primary">here</a>.
					</li>
				</ul>
				<p>
					If you still have issues, you can join our <a href="/discord" class="link primary">Support Server</a> to get help.
				</p>
			</ul>

			<h1 id="contribution">Contribution</h1>
			<ul>
				<h2 id="how-to-report-bugs"><li>11. How do I report bugs?</li></h2>
				<p>
					If you encounter a bug, you can report it on our <a href="/discord" class="link primary">Support Server</a>.
					Please provide as much information as possible, so we can reproduce the bug and fix it.
				</p>
				<h2 id="how-to-request-features"><li>12. How do I request features?</li></h2>
				<p>
					If you have a feature request, you can submit it on our <a href="/discord" class="link primary"
						>Support Server</a
					>. We will review your request and decide if it fits our roadmap.
				</p>
				<h2 id="how-to-report-abuse"><li>13. How do I report abuse?</li></h2>
				<p>
					If you encounter abuse or misuse of EazyAutodelete, you can report it on our <a
						href="/discord"
						class="link primary">Support Server</a
					>. Please provide as much information as possible, so we can take action against the abuser.
				</p>
				<h2 id="how-to-contact"><li>14. How can I contact the team?</li></h2>
				<p>
					You can contact the team on our <a href="/discord" class="link primary">Support Server</a>. We are happy to
					help you with any questions or issues you might have.
				</p>
			</ul>

			<h1 id="support-bot">Supporting EazyAutodelete</h1>
			<ul>
				<h2 id="how-to-support"><li>15. How can I support EazyAutodelete?</li></h2>
				<p>
					You can support EazyAutodelete by inviting it to your server, using it and sharing it with your friends and
					just help spreading the word.
				</p>
				<p>
					If you want to support us financially, you can consider subscribing to <a
						href={$u("/premium")}
						class="link primary">EazyAutodelete Premium</a
					>.
				</p>
				<p>
					We also appreciate everyone voting for us on <a
						href="https://top.gg/bot/746453621821931634/vote"
						class="link primary">top.gg/bot/746453621821931634/vote</a
					>. Additionally, you can leave us a review there.
				</p>

				<h2 id="premium-plan"><li>16. What is EazyAutodelete Premium?</li></h2>
				<p>
					EazyAutodelete Premium is a subscription plan that offers additional features and benefits to its users.
					Premium users have higher limits, more configurations and access to premium support.
				</p>
				<p>
					You can find more information about EazyAutodelete Premium on our <a
						href={$u("/premium")}
						class="link primary">Premium Page</a
					>.
				</p>
				<p>
					The premium plan was introduced to finance the operation of EazyAutodelete. This includes Server Costs, Domain
					fees and much more.
				</p>
				<h2 id="how-to-translate"><li>17. How can I help translate EazyAutodelete?</li></h2>
				<p>
					If you want to help translate EazyAutodelete into your language, you can do so on our <a
						href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/"
						class="link primary">Translation Platform</a
					>. A short introduction to translating EazyAutodelete is available on our GitHub Profile at
					<a href="https://eazyautodelete.xyz/translate" class="link primary">eazyautodelete.xyz/translate</a>.
				</p>
			</ul>
		</div>

		<h3 class="text-center">
			Got any other questions? Join our <a class="link primary" href="/discord">Support Server</a>!
		</h3>
	</div>
</PageContent>

<style lang="scss">

.images {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	justify-content: space-around;


	 > * {
		p {
			text-align: center;
		}
	 }

}

	h1 {
		padding-bottom: 0;
	}
	ul {
		// list-style-type: decimal;
		// padding-left: 1rem;

		h2 {
			font-size: large;
			font-weight: 700;
			margin-top: 0;
		}

		li:not(:first-child) {
			margin-top: 0.5rem;
		}

		&.nav {
			li {
				a {
					color: #fff;
				}
				ul {
					list-style-type: none;
					padding-left: 0;
					margin-top: 0.5rem;

					li {
						margin-top: 0;
						margin-left: 1rem;

						a {
							color: #aaa;
						}
					}
				}
			}
		}
	}

	p {
		// text-align: justify;
		// word-break: normal;
		line-break: auto;

		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	.disclaimer {
		font-size: small;
		color: #8d8d8d;
	}
</style>
