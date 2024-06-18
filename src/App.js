import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// React Element

// const heading = React.createElement("h1", { id: "heading" }, "Namste React");

// JSX
// React Element
// const jsxHeading = (
//     [<h1>Namste ROhan JSX here</h1>,
//     <h2>Second </h2>]
// );

// Function Component
// const HeadingComponent = () => {
//     return <h1 className="header">This is Functional Component</h1>;
// };


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    // UseContext How to use Globally with API example
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Rohan Amberkar",
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);