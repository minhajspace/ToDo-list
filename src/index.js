import React from "react";
import ReactDOM from "react-dom";
import InputTodo from "./InputTodo";
import Greeting from "./Greeting";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Greeting />
        <InputTodo />
    </React.StrictMode>,
    rootElement
);
