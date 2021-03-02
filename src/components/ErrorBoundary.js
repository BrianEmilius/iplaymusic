// src/components/ErrorBoundary.js
import { Component } from "react";
//import axios from "axios";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught an error", error, info);
		/* axios.post("/.netlify/functions/error-logging", {
			error: JSON.stringify(error),
			info
		})
			.then(response => console.log(response)); */
	}
	
	render() {
		if (this.state.hasError) {
			return (
				<>
					<p>The playlist could not be generated. Try again later.</p>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
