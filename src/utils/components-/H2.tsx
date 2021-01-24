import { prepareProps } from "utils/tools/prepareProps";

export const H2: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <h2 {...prepareProps(rest)}>{children}</h2>;
};
