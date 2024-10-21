export function replaceSpecialChars(str: string): string {
	return (str || "")
		.replaceAll("ä", "&auml;")
		.replaceAll("ö", "&ouml;")
		.replaceAll("ü", "&uuml;")
		.replaceAll("Ä", "&Auml;")
		.replaceAll("Ö", "&Ouml;")
		.replaceAll("Ü", "&Uuml;")
		.replaceAll("ß", "&szlig;");
}
