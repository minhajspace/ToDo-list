import React, { Component } from "react";

class Input extends Component {
  render() {
    const { handleChange, handleSubmit, item } = this.props;
    return (
      <>
        <form>
          <div className="fluid ui input">
            <input type="text" placeholder="Add an Todo Item"></input>
          </div>
        </form>
        <button class="fluid ui button">Fits container</button>
      </>
    );
  }
}
export default Input;
