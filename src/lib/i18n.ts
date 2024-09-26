const translations: { [key: string]: string } = {
	"Hello, world!": "Hallo, Welt!",
};

export default function t(key: string): string {
	return translations[key] || key;
}
