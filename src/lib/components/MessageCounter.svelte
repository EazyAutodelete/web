<script lang="ts">
	import { _ } from "$lib/i18n";
	import { onMount } from "svelte";

	export let data: { 3600000: 0; 86400000: 0; 604800000: 0; 2592000000: 0; 31536000000: 0 };

	let messageIndex = 1;
	let messagesStop = Math.round(Object.entries(data)[messageIndex][1] / 100) * 100;

	let duration = 1250;

	onMount(() => {
		animateMessages();
	});

	function animateMessages() {
		messageCount =
			Math.floor(messagesStop / Math.pow(10, Math.floor(Math.log10(messagesStop)))) *
			Math.pow(10, Math.floor(Math.log10(messagesStop)));
		const messagesIncrement = Math.ceil((messagesStop - messageCount) / (duration / 10));

		const messagesInterval = setInterval(() => {
			messageCount += messagesIncrement;
			if (messageCount >= messagesStop) {
				messageCount = messagesStop;
				clearInterval(messagesInterval);
			}
		}, 10);
	}

	function nextStat() {
		messageIndex++;
		if (messageIndex >= Object.entries(data).length) {
			messageIndex = 0;
		}
		messagesStop = Math.round(Object.entries(data)[messageIndex][1] / 100) * 100;

		duration = 500;

		animateMessages();
	}

	$: messageCount = 0;
	$: messageText = $_(statOptions[Object.entries(data)[messageIndex][0]]);

	const statOptions = {
		3600000: "hour",
		86400000: "today",
		604800000: "last7days",
		2592000000: "last30days",
		31536000000: "lastYear",
	};
</script>

<div class="count px-2 py-2 lg:py-4">
	<p>
		{$_("deletedMessages")} <a class="link light" id="stats" data-stat="week" on:click={nextStat}>{messageText}</a>:
		<strong>{messageCount.toLocaleString()}+</strong>
	</p>
</div>

<style lang="scss">
	.count {
		width: fit-content;
		border-radius: 10px;
		background-color: #1b1c1c;
		text-align: center;
		display: inline-block;

		p {
			display: inline;
		}
	}
</style>
