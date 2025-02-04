import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement('div',{id:"Parent"},
    [
        React.createElement('div',{id:"child-1"},[
            React.createElement('h1',{},"hello this is H1"),
            React.createElement('h3',{},"hello this is H3")
        ]),
        React.createElement('div',{id:"child-1"},[
            React.createElement('h1',{},"hello this is H1"),
            React.createElement('h3',{},"hello this is H3")
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);