import { Link } from "@reach/router";
import { useContext } from "react";
import SliderContext from "../contexts/SliderContext";
import "./PlaylistSliderItem.scss";

export default function PlaylistSliderItem({ image, name, id }) {
	// eslint-disable-next-line
	var [slider, setSlider] = useContext(SliderContext);

	return (
		<li className="slider__item">
			<Link to={`/playlists/${id}`} onClick={() => setSlider({ title: name })}>
				<img src={image} alt={name} className="slider__image" />
			</Link>
		</li>
	);
}
