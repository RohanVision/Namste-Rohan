import { useState } from "react"

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Dehradhun</h3>
            <h4>Contact: @rohanamberkar</h4>
        </div>
    );
};

export default User;