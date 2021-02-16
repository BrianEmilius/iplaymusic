import mockedAxios from "axios";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Featured from "../pages/Featured";
import TokenContext from "../contexts/TokenContext";

afterEach(cleanup);
jest.mock("axios");

describe("Featured Page", function () {
	var response = {
		data: {
			playlists: {
				items: [
					{
						id: 1,
						images: [
							{
								url: "https://via.placeholder.com/600",
							},
						],
						name: "Pølsehorn",
						type: "playlist",
					},
					{
						id: 2,
						images: [
							{
								url: "https://via.placeholder.com/600",
							},
						],
						name: "Dance Moves",
						type: "playlist",
					},
				],
			},
		},
	};

	var mockContext = [
		{
			access_token: "1234",
		},
	];

	it("shows a list of featured playlists", async function () {
		mockedAxios.get.mockResolvedValue(response);

		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Featured />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/pølsehorn/i);
			expect(text).toBeInTheDocument();
		});
	});
});
