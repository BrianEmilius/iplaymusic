import "./PageHeading.scss";

export default function PageHeading({ children, light }) {
	if (!light) return <h1 className="pageHeading">{children}</h1>;
	return <h1 className="pageHeading pageHeading--alt">{children}</h1>;
}
