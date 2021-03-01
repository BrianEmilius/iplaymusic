import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Login from "./pages/Login";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";
import Callback from "./pages/Callback";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
	var tokenState = useState(null);

	return (
		<ErrorBoundary>
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
		</ErrorBoundary>
	);
}

export default App;
