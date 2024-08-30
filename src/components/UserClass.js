import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // Create local state variable
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }

        // console.log(this.props.name, "Child Component Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rohanvision");
        const json = await data.json();

        // console.log("Component Did Mount");

        // Updating my state with userInfo Object
        this.setState({
            userInfo: json,
        });

        // console.log(json);
    }

    // componentDidUpdate() {
    //     console.log("Component DID Update");
    // }

    // componentWillUnmount() {
    //     console.log("Component Will Unmount");
    // }

    render() {
        // console.log(this.props.name, "Child Render");
        // Destructure my state
        const { name, location, avatar_url, bio } = this.state.userInfo;
        return (
            <div className="user-card max-w-sm cursor-pointer bg-white rounded-lg shadow-md overflow-hidden mx-auto transform transition-transform hover:scale-105">
                <div className="user-card__image-wrapper w-full h-56 overflow-hidden">
                    <img
                        className="user-card__image w-full h-full object-cover"
                        src={avatar_url}
                        alt={`${name}'s avatar`}
                    />
                </div>
                <div className="user-card__details p-6 text-center">
                    <h2 className="user-card__name text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
                    <h3 className="user-card__location text-xl text-gray-600 mb-2">{location}</h3>
                    <h4 className="user-card__contact text-md text-gray-800">Contact: amberkar.rohan17@gmail.com</h4>
                    <h4 className="user-card__contact text-md text-gray-500">Skills: {bio}</h4>
                </div>
            </div>
        );
    }
}

export default UserClass;