import NavBar from "../components/NavBar";
import "./Player.scss";

export default function Player() {
	return (
		<>
			<NavBar transparent light>
				Playing
			</NavBar>
			<div className="player">
				<img src="https://picsum.photos/600/800" alt="" className="player__bgImg" />
				<div className="player__artist">
					<img src="https://picsum.photos/300/300" alt="" />
				</div>
				<div>
					<div>
						<input type="range" />
					</div>
					<button>
						<i className="icon-previous"></i>
					</button>
					<button>
						<i className="icon-play"></i>
					</button>
					<button>
						<i className="icon-next"></i>
					</button>
				</div>
			</div>
		</>
	);
}
