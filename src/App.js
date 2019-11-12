import React from "react";
import Input from "./input";

import Todolist from "./todolist";
import Todoitem from "./todoitem";
import "./App.css";

class App extends React.Component {
  state = {
    item: [],
    id: 0,
    items: "null",
    editItem: false
  };
  handleChnage = e => {
    this.setState({
      item: e.target.value
    });
  };

  render() {
    return (
      <div className="contenair">
        <div className="main">
          <h1>Todo Input </h1>
          <Input item={this.state.item} handleChnage={this.handleChnage} />

          <Todolist />
        </div>
      </div>
    );
  }
}

export default App;
