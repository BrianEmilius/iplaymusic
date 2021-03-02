// src/components/ErrorBoundary.js
import { Component } from "react";
import axios from "axios";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			info: null
		};
	}

	/* static getDerivedStateFromError() {
		return { hasError: true };
	} */

	componentDidCatch(error, info) {
		this.setState({
			error,
			info
		});
		
		axios.post("/.netlify/functions/error-logging", {
			error,
			info
		});
		//console.error("ErrorBoundary caught an error", error, info);
	}
	
	render() {
		if (this.state.error) {
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
