import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameLogin, setBtnNameLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status{(onlineStatus === true ? "✅" : "🔴")}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About Us</Link></li>
                    <li><Link to="Contact">Contact</Link></li>
                    <button className="login" onClick={() => {
                        if (btnNameLogin === "Login") {
                            setBtnNameLogin("Logout");
                        } else {
                            return setBtnNameLogin("Login");
                        }
                    }}>{btnNameLogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;