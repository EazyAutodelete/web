<script>
	import PageContent from "$lib/components/PageContent.svelte";
	import { titleSuffix } from "$lib/const";
	import { _, u } from "$lib/i18n";
	import replaceWordWithLink from "$lib/utils/replaceWordWithLink";

	$: description = $_("seeFAQ") + $_("descSuffix");
	$: title = $_("faq") + titleSuffix;
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
		<h1 class="text-center underline">{$_("faq")}</h1>

		<div>
			<ul class="nav">
				<li>
					<a href="#getting-started" class="link primary">{$_("gettingStarted")}</a>
					<ul>
						<li><a href="#how-to-invite" class="link primary">1. {$_("howToAdd")}</a></li>
						<li><a href="#how-to-use" class="link primary">2. {$_("howToUse")}</a></li>
						<li><a href="#how-many-channels" class="link primary">3. {$_("howManyChannels")}</a></li>
						<li><a href="#how-many-configs" class="link primary">4. {$_("howManyConfigs")}</a></li>
					</ul>
				</li>
				<li>
					<a href="#supported-features" class="link primary">{$_("supportFeatures")}</a>
					<ul>
						<li>
							<a href="#supported-channel-types" class="link primary">5. {$_("supportedChannels")}</a>
						</li>
						<li><a href="#which-languages-are-supported" class="link primary">6. {$_("supportedLanguages")}</a></li>
						<li><a href="#what-are-the-limits" class="link primary">7. {$_("whatAreTheLimits")}</a></li>
					</ul>
				</li>
				<li>
					<a href="#support" class="link primary">Support</a>
					<ul>
						<li><a href="#is-the-bot-online" class="link primary">8. {$_("isTheBotOnline")}</a></li>
						<li><a href="#get-help" class="link primary">9. {$_("getHelp")}</a></li>
						<li><a href="#why-not-delete" class="link primary">10. {$_("whyNotDelete")}</a></li>
					</ul>
				</li>
				<li>
					<a href="#contribution" class="link primary">{$_("contribution")}</a>
					<ul>
						<li><a href="#how-to-report-bugs" class="link primary">11. {$_("howToReportBugs")}</a></li>
						<li><a href="#how-to-request-features" class="link primary">12. {$_("howToRequestFeatures")}</a></li>
						<li><a href="#how-to-report-abuse" class="link primary">13. {$_("howToReportAbuse")}</a></li>
						<li><a href="#how-to-contact" class="link primary">14. {$_("howToContact")}</a></li>
					</ul>
				</li>
				<li>
					<a href="#support-bot" class="link primary">Supporting EazyAutodelete</a>
					<ul>
						<li><a href="#how-to-support" class="link primary">15. {$_("howToSupport")}</a></li>
						<li><a href="#premium-plan" class="link primary">16. {$_("whatIsPremium")}</a></li>
						<li><a href="#how-to-translate" class="link primary">17. {$_("howToTranslate")}</a></li>
					</ul>
				</li>
			</ul>

			<h1 id="getting-started">{$_("gettingStarted")}</h1>
			<ul>
				<li>
					<h2 id="how-to-invite">1. {$_("howToAdd")}</h2>
					<p>Click on the invite link: <a href="/invite" class="link primary">eazyautodelete.xyz/invite</a>.</p>
					<p>Select your server and press the "Authorize" Button.</p>
					<p>
						Thats it, EazyAutodelete should now be in your server. Run the <code>/autodelete</code> command to get started.
					</p>
				</li>

				<li>
					<h2 id="how-to-use">2. {$_("howToUse")}</h2>
					<p>After inviting EazyAutodelete, use the <code>/setup</code> command to create a new configuration.</p>
					<p>
						You can contact the team on our <a href="/discord" class="link primary">Support Server</a>. We are happy to
						help you with any questions or issues you might have.
					</p>
					<p>
						A config always consists of a mode and a limit for the selected mode. Additionally, you can freely add as
						many as filters as you would like and configure them accordingly to your needs.
					</p>
				</li>
				<li>
					<h2 id="how-many-channels">3. {$_("howManyChannels")}</h2>
					<p>{$_("manyChannels")}</p>
				</li>
				<li>
					<h2 id="how-many-configs">4. {$_("howManyConfigs")}</h2>
					<p>
						{@html replaceWordWithLink($_("manyConfigs"), "EazyAutodelete Premium", $u("premium"))}
					</p>
				</li>
			</ul>

			<h1 id="supported-features">{$_("supportFeatures")}</h1>
			<ul>
				<li>
					<h2 id="supported-channel-types">
						5. {$_("supportedChannels")}
					</h2>
					<p>{$_("channelTypes")}</p>
				</li>

				<li>
					<h2 id="which-languages-are-supported">6. {$_("supportedLanguages")}</h2>
					<p>
						{$_("supportedLanguagesDesc1")}
					</p>
					<div class="w-full">
						<div class="images">
							<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
								<p>Bot</p>
								<img
									src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/commands/horizontal-blue.svg"
									alt="Translation status Bot"
									title="Translation status Bot"
								/>
							</a>

							<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
								<p>Web</p>
								<img
									src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/website/horizontal-blue.svg"
									alt="Translation status Website"
									title="Translation status Website"
								/>
							</a>

							<a href="https://translate.eazyautodelete.xyz/engage/eazyautodelete/" target="_blank">
								<p>Dash</p>
								<img
									src="https://translate.eazyautodelete.xyz/widget/eazyautodelete/dashboard/horizontal-blue.svg"
									alt="Translation status Dashboard"
									title="Translation status Dashboard"
								/>
							</a>
						</div>
					</div>
					<p>
						{@html replaceWordWithLink($_("supportedLanguagesDesc2"), "Discord", "/discord")}
					</p>
					<p>
						{@html replaceWordWithLink($_("supportedLanguagesDesc3"), "eazyautodelete.xyz/translate", "/translate")}
					</p>
				</li>

				<li>
					<h2 id="what-are-the-limits">7. {$_("whatAreTheLimits")}</h2>
					<p>
						EazyAutodelete has a few limits to ensure a reliable and fast service as well as a pleasant user experience.
						The limits are evaluated regularly and chosen wisely.
					</p>
					<div class="grid grid-cols-2 gap-x-3 pb-3">
						<ul>
							<li><h3 class="p-0">Normal:</h3></li>
							<li><strong> Max. Configs per Channel:</strong> 3</li>
							<li><strong>Mode 1 Limit:</strong> &#62;10 secs, &#60;7 days</li>
							<li><strong>Mode 2 Limit:</strong> &#62;10 secs, &#60;2 days</li>
							<li><strong>Mode 3 Limit:</strong> &#62;5 msgs, &#60;100 msgs</li>
							<li><strong>Mode 4 Limit:</strong> &#62;3 msgs, &#60;200 msgs</li>
						</ul>
						<ul>
							<li><h3 class="p-0">Premium:</h3></li>
							<li><strong>Max. Configs per Channel:</strong> 6</li>
							<li><strong>Mode 1 Limit:</strong> &#62;3 secs, &#60;13,96 days</li>
							<li><strong>Mode 2 Limit:</strong> &#62;3 secs, &#60;7 days</li>
							<li><strong>Mode 3 Limit:</strong> &#62;1 msgs, &#60;500 msgs</li>
							<li><strong>Mode 4 Limit:</strong> &#62;1 msgs, &#60;1,000 msgs</li>
						</ul>
					</div>

					<p>
						If you need more configurations or want access to the Premium Limits, you should consider subscribing to <a
							href={$u("/premium")}
							class="link primary">EazyAutodelete Premium</a
						>.
					</p>
					<span class="disclaimer"
						>Higher limits mean higher server load. Therefore, premium users have higher limits as they help cover the
						server costs. The limits are experimental and may be changed in the future.</span
					>
				</li>
			</ul>

			<h1 id="support">Support</h1>
			<ul>
				<li>
					<h2 id="is-the-bot-online">8. {$_("isTheBotOnline")}</h2>
					<p>Yes. EazyAutodelete is online 24/7 and processes messages in real-time.</p>
					<p>
						However, neither we, Discord nor our partners are 100% protected of Downtimes. We all are only humans and
						can make mistakes - even when we try our best not to.
					</p>
					<p>
						You can check the status of the bot at <a href={$u("/status")} class="link primary"
							>eazyautodelete.xyz/status</a
						>. The status of our other services can be found on
						<a href="https://status.eazyautodelete.xyz" class="link primary">status.eazyautodelete.xyz</a>.
						Additionally, we post status update on our <a href="/discord" class="link primary">Support Server</a>.
					</p>
				</li>

				<li>
					<h2 id="get-help">9. {$_("getHelp")}</h2>
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
				</li>

				<li>
					<h2 id="why-not-delete">10. {$_("whyNotDelete")}</h2>
					<p>If EazyAutodelete does not delete messages, you should check the following:</p>
					<ul>
						<li>
							<strong>Is the Bot online?</strong><br />Does it respond to your commands? Check the
							<a href={$u("status")} class="link primary">Bot Status</a>,
							<a href="https://status.eazyautodelete.xyz" class="link primary">Status Page</a>
							and the
							<a href="https://discord.com/channels/670695157661696002/932713921486401626" class="link primary"
								>#status</a
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
							Due to Limitations by Discord, every Bot on Discord can not delete messages that are more than 14 days old.
							Read
							<a href="https://github.com/discord/discord-api-docs/issues/208" class="link primary"
								>Discord's explanation</a
							>.
						</li>
					</ul>
					<p>
						If you still have issues, you can join our <a href="/discord" class="link primary">Support Server</a> to get
						help.
					</p>
				</li>
			</ul>

			<h1 id="contribution">{$_("contribution")}</h1>
			<ul>
				<li>
					<h2 id="how-to-report-bugs">11. {$_("howToReportBugs")}</h2>
					<p>
						{@html replaceWordWithLink($_("reportBugs"), "Support Server", "/discord")}
					</p>
				</li>

				<li>
					<h2 id="how-to-request-features">12. {$_("howToRequestFeatures")}</h2>
					<p>
						{@html replaceWordWithLink($_("requestFeatures"), "Support Server", "/discord")}
					</p>
				</li>

				<li>
					<h2 id="how-to-report-abuse">13. {$_("howToReportAbuse")}</h2>
					<p>
						{@html replaceWordWithLink($_("reportAbuse"), "Support Server", "/discord")}
					</p>
				</li>

				<li>
					<h2 id="how-to-contact">14. {$_("howToContact")}</h2>
					<p>
						{@html replaceWordWithLink($_("contactTeam"), "Support Server", "/discord")}
					</p>
				</li>
			</ul>

			<h1 id="support-bot">Supporting EazyAutodelete</h1>
			<ul>
				<li>
					<h2 id="how-to-support">15. {$_("howToSupport")}</h2>
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
				</li>

				<li>
					<h2 id="premium-plan">16. {$_("whatIsPremium")}</h2>
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
						The premium plan was introduced to finance the operation of EazyAutodelete. This includes Server Costs,
						Domain fees and much more.
					</p>
				</li>

				<li>
					<h2 id="how-to-translate">17. {$_("howToTranslate")}</h2>
					<p>
						{@html replaceWordWithLink(
							replaceWordWithLink(
								$_("helpTranslate"),
								"Translation Platform",
								"https://translate.eazyautodelete.xyz/engage/eazyautodelete/",
								true
							),
							"eazyautodelete.xyz/translate",
							"/translate"
						)}
					</p>
				</li>
			</ul>
		</div>

		<h3 class="text-center">
			{@html replaceWordWithLink($_("gotOtherQuestions"), "Support Server", "/discord")}
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
