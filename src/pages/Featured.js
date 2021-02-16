import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Drawer from "../components/Drawer";
import FeaturedCard from "../components/FeaturedCard";
import NavBar from "../components/NavBar";
import TokenContext from "../contexts/TokenContext";

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setContent(response.data.playlists.items));
		},
		[token, setContent]
	);

	return (
		<>
			<NavBar title="Pølsehorn" />
			<div
				style={{
					position: "absolute",
					inset: "120px 2rem 4rem",
					overflowY: "scroll",
				}}
			>
				{content?.map(item => (
					<FeaturedCard key={item.id} image={item.images[0].url} album={item.name} genre={item.type} id={item.id} />
				))}
			</div>
			<Drawer />
		</>
	);
}
