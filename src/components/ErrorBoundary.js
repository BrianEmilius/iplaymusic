// src/components/ErrorBoundary.js
import { Link, Redirect } from "@reach/router";
import { Component } from "react";

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
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<h1>Oops, there was an error</h1>
					<p>Something went wrong, please try again later.</p>
					<p>
						<Link to="/featured">Click here</Link> to go to home.
					</p>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
