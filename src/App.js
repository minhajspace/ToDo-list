import React from "react";
import Todoinput from './InputTodo'


let today = new Date().toLocaleDateString()


class App extends React.Component {


  render() {
    return <div className="ui segment">
      <center><h1>Todo List</h1></center>
      <div className="ui segment">
        <center><h3>{today}</h3></center>
      </div>
    </div>;
  }
}
export default App;
