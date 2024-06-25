import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";

it("Should load Header Component with a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Always go with By Role if not then By Text
    const loginButton = screen.getByRole("button", { name: "Login" });

    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument()
});


it("Should render cart component with length 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Always go with By Role if not then By Text
    const cartItems = screen.getByText("Cart (0 items)");

    // const loginButton = screen.getByText("Login");

    expect(cartItems).toBeInTheDocument()
})


// We can also use regx
it("Should render cart component with length 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Always go with By Role if not then By Text
    const cartItems = screen.getByText(/Cart/);

    // const loginButton = screen.getByText("Login");

    expect(cartItems).toBeInTheDocument()
})


it("Should change Login to logout on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Always go with By Role if not then By Text
    const loginButton = screen.getByRole("button", { name: "Login" })

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" })

    expect(logoutButton).toBeInTheDocument();
});


