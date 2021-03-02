import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Login from "./pages/Login";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";
import Callback from "./pages/Callback";
import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://6ab813dbe6bb4a4a9dd8064c394329ed@o320952.ingest.sentry.io/5657483"
});

function App() {
	var tokenState = useState(null);

	return (
		<TokenContext.Provider value={tokenState}>
			<div className="app">
				<Router>
					{(function () {
						if (tokenState[0]?.access_token) {
							return (
								<>
									<Featured path="/featured" />
									<Playlists path="/playlists" />
									<Playlists path="/playlists/:id" />
									<Player path="/player" />
								</>
							);
						}
					})()}
					<Login default path="/login" />
					<Callback path="/callback" />
				</Router>
			</div>
		</TokenContext.Provider>
	);
}

export default App;
