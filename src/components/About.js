import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log("parent constructor");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div className="lex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">About Us</h1>
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
                        <p className="text-lg font-medium text-gray-700 mb-4">LoggedIn User</p>
                        <userContext.Consumer>
                            {({ loggedInUser }) => <h2 className="text-xl font-semibold text-gray-800">{loggedInUser}</h2>}
                        </userContext.Consumer>
                    </div>
                    <h2 className="text-2xl text-gray-700 mt-6">This is the About Us page</h2>
                </div>
                {/* The UserClass component should already be styled appropriately */}
                <UserClass name={"first"} location={"Mumbai"} />
            </div>
        );
    }
}

export default About;