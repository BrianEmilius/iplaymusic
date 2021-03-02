import { Link, navigate } from "@reach/router";
import timeConvert from "../helpers/time";
import "./Track.scss";

export default function Track({ title, artist, duration, id }) {
	return (
		<li className="trackList__item" onClick={() => navigate(`/player/${id}`)}>
			<Link href={`/player/${id}`} className="item__playBtn">
				<i className="icon-play"></i>
			</Link>
			<div>
				<p className="item__title">{title}</p>
				<p className="item__artist">{artist}</p>
			</div>
			<p className="item__duration">{timeConvert(duration)}</p>
		</li>
	);
}
