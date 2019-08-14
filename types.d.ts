// Console log shortcut
declare const l: Function;

// Lodash
declare const lodash: typeof import("lodash");

// Wordpress
declare const wp: {
	apiFetch: typeof import("wordpress__api-fetch").default;
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	data: typeof import("wordpress__data");
	element: typeof import("wordpress__element");
	i18n: typeof import("wordpress__i18n");
};

interface Object {
	[key: string]: any;
}

// https://stackoverflow.com/a/49286056 | CC BY-SA 3.0
type ValueOf<T> = T[keyof T];

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

interface BlockProps {
	className: string;
	attributes: Attributes;
	setAttributes: Function;
}

interface SiteInfo {
	title: string;
	description: string;
}
