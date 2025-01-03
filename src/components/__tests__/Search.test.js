import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";


// Dummy Mock fetch function which will Identical to Original fetch function
global.fetch = jest.fn(() => {
    // Return promise and resovlve
    return Promise.resolve({
        // Resolve with JSON and JSON will again return a Promise with DATA
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Res list for burger test input", async () => {
    // Where using State updates wrap render inside act function
    // act return promise so we will await 
    await act(async () => { // takes callback function which is async function which return render
        render(
            <BrowserRouter>
                <Body />;
            </BrowserRouter>
        )
    });

    // Before
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    // Check for Search button and Search Input
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput"); // We need to pass searchInput as data-testId

    // Change Input and Click on Search Button
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    // After Search
    const cardsAfterSearch = screen.getAllByTestId("resCard"); // Give the testId to restaurant card
    // screen should load 1 cards
    expect(cardsAfterSearch.length).toBe(1);

});

// Filter Restaurant Data Test

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should filter the Top rated restaurant", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    });

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2)
})