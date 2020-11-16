import React from "react";
import ReactDOM from "react-dom";
import InputTodo from "./Components/InputTodo";
import Greeting from "./Components/Greeting";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Greeting />
        <InputTodo />
    </React.StrictMode>,
    rootElement
);
