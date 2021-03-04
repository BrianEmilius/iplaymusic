import NavBar from "../components/NavBar";
import Drawer from "../components/Drawer";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import axios from "axios";
import Track from "../components/Track";
import PlaylistSlider from "../components/PlaylistSlider";

export default function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [tracks, setTracks] = useState({});

	// this is a friggin comment, yo!
	useEffect(function() {
		if (props.id)
		axios.get("https://api.spotify.com/v1/playlists/" + props.id + "/tracks", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
			.then(response => setTracks(response.data));
	}, [token, props.id, setTracks]);

	return (
		<>
			<NavBar title="Playlists" light={true} transparent bgImg="./images/sound-wave.png">
				<PlaylistSlider />
			</NavBar>
				<div
					style={{
						position: "absolute",
						inset: "310px 2rem 4rem",
						overflowY: "scroll",
					}}
				>
					<ul className="trackList">
						{tracks.items?.map(({ track }) => (
							<Track
								key={track.id}
								id={track.id}
								artist={track.artists[0].name}
								title={track.name}
								duration={track.duration_ms}
							/>
						))}
					</ul>
				</div>
			<Drawer />
		</>
	);
}
