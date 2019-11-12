import React, { Component } from "react";
import Todoitem from "./todoitem";

class Todolist extends Component {
  render() {
    return (
      <div>
        <h3>ToDo List</h3>
        <Todoitem />
        <button class="fluid ui button">Clear ToDo</button>
      </div>
    );
  }
}
export default Todolist;
