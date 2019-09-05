// Console log shortcut
declare const l: Function;

interface Object {
	[key: string]: any;
}

interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

interface Attributes {
	title_html: "h1" | "h1_a" | "a" | "a_h1" | "span";
	description_enabled: boolean;
	description_html: "h2" | "h3" | "h4" | "span";
}

interface EditProps {
	className: string;
	attributes: Attributes;
	setAttributes: Function;
}

interface SiteInfo {
	title: string;
	description: string;
}
