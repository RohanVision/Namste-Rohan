import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameLogin, setBtnNameLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    // console.log(loggedInUser);

    // Subscribing to the store using Selector(hook)
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems);

    return (
        <div className="flex flex-wrap justify-between items-center shadow-lg text-sm p-4">
            {/* Logo Section */}
            <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center">
                <Link to="/">
                    <img
                        className="w-28 h-auto transform transition-transform hover:scale-105"
                        src={LOGO_URL}
                        alt="Logo"
                    />
                </Link>
            </div>
            {/* Navigation and Other Items */}
            <div className="w-full md:flex md:w-auto items-center justify-between text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
                <ul className="flex flex-col md:flex-row md:items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        Online Status {onlineStatus === true ? "✅" : "🔴"}
                    </li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        <Link to="About">About Us</Link>
                    </li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        <Link to="Contact">Contact</Link>
                    </li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        <Link to="Grocery">Grocery</Link>
                    </li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">
                        <Link to="Cart">Cart ({cartItems.length} items)</Link>
                    </li>
                </ul>
                {/* Login Button */}
                <button
                    className="login mt-2 md:mt-0 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 mx-auto md:mx-0"
                    onClick={() => {
                        if (btnNameLogin === "Login") {
                            setBtnNameLogin("Logout");
                        } else {
                            setBtnNameLogin("Login");
                        }
                    }}
                >
                    {btnNameLogin}
                </button>
                {/* Username Display */}
                <li className="mt-2 md:mt-0 md:ml-4 px-4 font-bold text-gray-700 mx-auto md:mx-0">
                    {loggedInUser}
                </li>
            </div>
        </div>

    )
}

export default Header;