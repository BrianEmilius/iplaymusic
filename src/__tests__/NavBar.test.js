import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", function() {
	it("has the text 'Featured'", function() {
		render(<NavBar title="Featured" />);
		var text = screen.getAllByText(/featured/i);
		expect(text)
	});
});