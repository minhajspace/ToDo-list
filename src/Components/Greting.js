import React from 'react';
let today = new Date().toISOString().slice(0, 10)

const Greeting = () => {
    return (<div>
        <div className="ui segment">
            <center><h1>Todo List</h1></center>
        </div>
        <div className="ui segment">
            <center><h3>{today}</h3></center>

        </div>
    </div>)
}
export default Greeting