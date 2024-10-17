export default function (
	string: string,
	word: string,
	link: string,
	newTab: boolean = true,
	primary: boolean = true
): string {
	return string.replaceAll(
		word,
		`<a class="link ${primary ? "primary" : "secondary"}" href="${link}" target="${newTab ? "_blank" : ""}">${word}</a>`
	);
}
