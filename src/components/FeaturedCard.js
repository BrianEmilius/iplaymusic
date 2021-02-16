import { Link, navigate } from "@reach/router";
import "./FeaturedCard.scss";

export default function FeaturedCard({ image, album, genre, id }) {
	return (
		<article className="featuredCard" onClick={() => navigate(`/playlists/${id}`)}>
			<img src={image} className="featuredCard__image" alt={album} />
			<div className="featuredCard__text">
				<p className="featuredCard__album">
					<Link to={`/playlists/${id}`}>{album}</Link>
				</p>
				<p className="featuredCard__genre">{genre}</p>
			</div>
		</article>
	);
}
