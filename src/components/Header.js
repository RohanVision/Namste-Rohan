import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constant";
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
        <div className="flex justify-between shadow-lg text-sm">
            <div>
                <Link to="/"><img className="w-28 h-auto transform transition-transform hover:scale-105" src={LOGO_URL} /></Link>
            </div>
            <div className="flex space-x-6 items-center">
                <ul className="flex p-2 items-center">
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2">Online Status {(onlineStatus === true ? "✅" : "🔴")}</li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2"><Link to="/">Home</Link></li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2"><Link to="About">About Us</Link></li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2"><Link to="Contact">Contact</Link></li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2"><Link to="Grocery">Grocery</Link></li>
                    <li className="text-gray-600 hover:text-green-600 transition-colors duration-300 px-2"><Link to="Cart">Cart ({cartItems.length} items)</Link></li>

                    <button className="login ml-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300" onClick={() => {
                        if (btnNameLogin === "Login") {
                            setBtnNameLogin("Logout");
                        } else {
                            return setBtnNameLogin("Login");
                        }
                    }}>{btnNameLogin}</button>

                    {/* Change Username */}
                    <li className="ml-4 px-4 font-bold text-gray-700">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;