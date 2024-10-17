export default function (string: string, word: string, link: string, newTab: boolean = true) {
	return string.replaceAll(
		word,
		`<a class="link primary" href="${link}" target="${newTab ? "_blank" : ""}">${word}</a>`
	);
}
