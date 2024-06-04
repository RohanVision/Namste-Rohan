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

        console.log(this.props.name, "Child Component Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        console.log("Component Did Mount");

        // Updating my state with userInfo Object
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component DID Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        // console.log(this.props.name, "Child Render");
        // Destructure my state
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @rohanamberkar</h4>
            </div>
        );
    }
}

export default UserClass;