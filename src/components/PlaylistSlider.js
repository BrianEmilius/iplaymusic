import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import PlaylistSliderItem from "./PlaylistSliderItem";
import SliderContext from "../contexts/SliderContext";

export default function PlaylistSlider() {
	var [token] = useContext(TokenContext);
	var sliderState = useState({});
	var [playlists, setPlaylists] = useState([]);

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/me/playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
			.then(response => setPlaylists(response.data.items));
	}, [token, setPlaylists]);

	return (
		<SliderContext.Provider value={sliderState}>
			<ul className="slider">
				{playlists.map(list=><PlaylistSliderItem key={list.id} image={list.images[0].url} name={list.name} id={list.id} />)}
			</ul>
			<p style={{fontSize: "2rem", fontWeight: "700", textAlign: "center", margin: "0"}}>{sliderState[0]?.title}</p>
		</SliderContext.Provider>
	);
}
