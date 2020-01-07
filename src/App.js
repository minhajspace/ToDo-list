import React from "react";
import Todoinput from './InputTodo'


let today = new Date().toISOString().slice(0, 10)

class App extends React.Component {


  render() {

    return (<>
      <div className="ui segment">
        <center><h1>Todo List</h1></center>
      </div>
      <div className="ui segment">
        <center><h3>{today}</h3></center>
      </div>
    </>)


  }
}
export default App;
