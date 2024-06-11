import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User
                    <userContext.Consumer>
                        {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
                    </userContext.Consumer>
                </div>
                <h2> This is About us page</h2>
                <UserClass name={"first"} location={"Mumbai"} />
            </div>
        );
    }
}

export default About;