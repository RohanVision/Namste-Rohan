
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "How Are you"),
        React.createElement("h2", {}, "I am fine")
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "How Are you"),
        React.createElement("h2", {}, "I am fine")
        ])
    ]
);


const heading = React.createElement('h1', { id: "title" }, "Hello From React");
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);