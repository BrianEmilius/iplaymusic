import "./NavBar.scss";
import PageHeading from "./PageHeading";

export default function NavBar({children, light, title, transparent, bgImg}) {
	return (
		<header className="appHeader">
			{bgImg && <img src={bgImg} alt="" className="navbar__bgImg" />}
			<nav className={`navbar ${transparent ? "navbar--transparent" : "navbar--solid"}`}>
				<button onClick={() => window.history.back()} className="navbar__button">
					<i className="icon-left-open"></i>
				</button>
				{title}
				<i className="icon-search"></i>
			</nav>
			<PageHeading light={light}>{title}</PageHeading>
			{children}
		</header>
	)
}
