<script>
	import PageContent from "$lib/components/PageContent.svelte";
	import { _, u } from "$lib/i18n";
</script>

<svelte:head>
	<title>{$_("rightow")} | EazyAutodelete - Discord Autodelete Bot</title>

	<meta
		content="See legal Information about the {$_(
			'rightow'
		)} of EazyAutodelete - the best & most customizable Autodelete Bot for Discord. Completely free & in unlimited channels. With EazyAutodelete's advanced configuration options, you can autodelete messages based on user roles, mentions, a large number of filters or time intervals. Set durations like 5 minutes, 1 hour, 1 day, 24 hour or 1 week."
		name="description"
	/>
</svelte:head>

<PageContent>
	<div class="w-full">
		<h1 class="text-center underline">{$_("rightow")}</h1>
		<p class="intro">when purchasing a premium subscription.</p>

		<p>
			This declaration only applies to purchases made online via our website using the payment processor Stripe.
			Purchases made directly via the Discord platform are subject to Discord's <a
				class="link primary"
				href="https://discord.com/terms/paid-services-terms">Paid Service Terms</a
			>.
		</p>

		<h2>Your right</h2>
		<p>
			You have the right to withdraw from your subscription within a period of fourteen days without the need to provide
			any explanation.
		</p>
		<p>The withdrawal period will expire after fourteen days from the day of the conclusion of the contract.</p>

		<p>
			To exercise your right of withdrawal, please notify us via email at <a
				class="link primary"
				href="mailto:billing@eazyautodelete.xyz"
			>
				billing@eazyautodelete.xyz
			</a>
			within the withdrawal period. Alternatively, you can send a letter to our postal adress available
			<a class="link primary" href={$u("/impressum")}>here</a>.
		</p>
		<p>You may use the following template for withdrawal, although it is not obligatory:</p>

		<p>
			<i>— To: EazyAutodelete, [insert email address or postal address here]</i>
			<br />
			<i
				>— I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods
				(*)/for the provision of the following service (*),</i
			>
			<br />
			<i>— Ordered on (*)/received on (*),</i>
			<br />
			<i>— Name of consumer(s),</i>
			<br />
			<i>— Address of consumer(s),</i>
			<br />
			<i>— Signature of consumer(s) (only if this form is notified on paper),</i>
			<br />
			<i>— Date</i>
		</p>

		<p>
			To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of
			the right of withdrawal before the withdrawal period has expired.
		</p>

		<h2>Effects of withdrawal</h2>
		<p>
			If you withdraw from your subscription, we shall reimburse to you all payments received from you, without undue
			delay and in any event not later than fourteen days from the day on which we are informed about your decision to
			withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for
			the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as
			a result of such reimbursement.
		</p>

		<p>
			If you requested to begin the performance of services during the withdrawal period, you shall pay us an amount
			which is in proportion to what has been provided until you have communicated us your withdrawal from this
			contract, in comparison with the full coverage of the contract.
		</p>

		<h2>Questions</h2>
		<p>
			If you have any questions about the right of withdrawal, please contact us via email at
			<a class="link primary" href="mailto:billing@eazyautodelete.xyz">billing@eazyautodelete.xyz</a>
			or via our postal address available
			<a class="link primary" href={$u("/impressum")}>here</a>.
		</p>

		<p>
			<i> This document was last updated on 13th of April, 2024. </i>
		</p>

		<br />
		<p>
			<i> (*) Delete as appropriate. </i>
		</p>
	</div>
</PageContent>

<style>
	p {
		text-align: justify;
		padding-bottom: 1rem;
	}

	.intro {
		text-align: center;
		font-size: 1.25rem;
		font-weight: 700;
		margin: 1rem 0 1.5rem;
	}
</style>
