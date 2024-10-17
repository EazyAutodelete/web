<script>
	import PageContent from "$lib/components/PageContent.svelte";
	import { _ } from "$lib/i18n";
</script>

<svelte:head>
	<title>{$_("imprint")} | EazyAutodelete - Discord Autodelete Bot</title>

	<meta
	content="See legal Information about the {$_("imprint")} of EazyAutodelete - the best & most customizable Autodelete Bot for Discord. Completely free & in unlimited channels. With EazyAutodelete's advanced configuration options, you can autodelete messages based on user roles, mentions, a large number of filters or time intervals. Set durations like 5 minutes, 1 hour, 1 day, 24 hour or 1 week."
	name="description"
/>
</svelte:head>
<PageContent>
	<div class="w-full">
		<h1>{$_("imprint")}</h1>
		<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
		<p>
			Ben Schiemann<br />
			Reinbeker Weg 70<br />
			21465 Wentorf
		</p>

		<h2>Kontakt</h2>
		<p>
			Telefon: <a class="link primary" href="tel:+49 1516 4877269">+49 1516 4877269</a><br />
			E-Mail: <a class="link primary" href="mailto:legal@eazyautodelete.xyz">legal@eazyautodelete.xyz</a>
		</p>

		<h2>Redaktionell verantwortlich</h2>
		<p>
			Ben Schiemann<br />
			Reinbeker Weg 70<br />
			21465 Wentorf
		</p>

		<h2>EU-Streitschlichtung</h2>
		<p>
			Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
			<a class="link primary" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
				>https://ec.europa.eu/consumers/odr/</a
			>.<br />
			Unsere E-Mail-Adresse finden Sie oben im Impressum.
		</p>

		<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
		<p>
			Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
			teilzunehmen.
		</p>
		<h2 id="bildernachweis">Bildernachweis</h2>
		<p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
		<p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
		<ul>
			<li>Discord Inc.</li>
			<li>YouTube LLC.</li>
			<li>Twitch</li>
			<li>GitHub Inc.</li>
			<li>Twitter Inc.</li>
			<li>Meta Platforms, Inc.</li>
		</ul>
		<p>Alle Texte sind urheberrechtlich geschützt.</p>
	</div>
</PageContent>
