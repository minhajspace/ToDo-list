import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    return (
      <div className="ui link list">
        <div className="active item">
         
          <div className="fluid ui action input">
            <input type="text" placeholder="Search..." />
            <button className="ui button">Edit</button>
            <button className="ui button">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Todoitem;
