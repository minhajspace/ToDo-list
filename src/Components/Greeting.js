import React from "react";
import "./styles.css";
let today = new Date().toISOString().slice(0, 10);

export default function Greeting() {
    return (
        <div className="App">
            <h2>{today}</h2>
            <h1>ToDo List</h1>
        </div>
    );
}
