export default function formatText(text: string) {
	if (text.startsWith("# ")) return `<h2>${text.slice(2)}</h2>`;
	if (text.startsWith("## ")) return `<h3>${text.slice(3)}</h3>`;
	if (text.startsWith("### ")) return `<h4>${text.slice(4)}</h4>`;

	return `<p class="mb-2 text-justify">${text}</p>`;
}
