import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        // promise.resolve ^ return json or convert to json fn and then it will return promise
        json: () => { return Promise.resolve(MOCK_DATA) }
    })
})

it("should load restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Recommended (11)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    // console.log(addBtns.length)
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(17);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    expect(screen.getByText("Cart is Empty please add some Item")).toBeInTheDocument();

});