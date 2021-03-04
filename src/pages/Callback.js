import axios from "axios";
import { useContext, useEffect } from "react";
import TokenContext from "../contexts/TokenContext";
import { navigate } from "@reach/router";

export default function Callback(props) {
	var setToken = useContext(TokenContext)[1];

	var code = new URLSearchParams(props.location.search).get("code");
	var state = new URLSearchParams(props.location.search).get("state");

	useEffect(
		function () {
			axios
				.post(
					"/.netlify/functions/token",
					JSON.stringify({
						code,
						state,
					})
				)
				.then(response => {
					setToken(response.data);
					navigate("/featured");
				});
		},
		[setToken, code, state]
	);

	return null;
}
