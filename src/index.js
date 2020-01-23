import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Todoinput from "./InputTodo";
import List from './Components/List'

const Index = () => {
    return (
        <>
            <App />
            <Todoinput />
            <List list />
        </>
    )

}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
