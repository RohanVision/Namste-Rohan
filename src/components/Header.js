import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
    const [btnNameLogin, setBtnNameLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    console.log(loggedInUser);

    return (
        <div className="flex justify-between shadow-lg mb-2">
            <div>
                <img className="w-48" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status {(onlineStatus === true ? "✅" : "🔴")}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="About">About Us</Link></li>
                    <li className="px-4"><Link to="Contact">Contact</Link></li>
                    <li className="px-4"><Link to="Grocery">Grocery</Link></li>
                    <button className="login" onClick={() => {
                        if (btnNameLogin === "Login") {
                            setBtnNameLogin("Logout");
                        } else {
                            return setBtnNameLogin("Login");
                        }
                    }}>{btnNameLogin}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;