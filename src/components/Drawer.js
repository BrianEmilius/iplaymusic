import { Link } from "@reach/router";
import "./Drawer.scss";

export default function Drawer() {
	return (
		<nav className="drawer">
			<Link to="/albums" className="drawer__button"><i className="icon-th-large"></i></Link>
			<Link to="/playlists" className="drawer__button"><i className="icon-mic"></i></Link>
			<Link to="/featured" className="drawer__button drawer__button--large"><i className="icon-fire"></i></Link>
			<Link to="/toggle" className="drawer__button"><i className="icon-adjust"></i></Link>
			<Link to="/categories" className="drawer__button"><i className="icon-tags"></i></Link>
		</nav>
	);
}