import React from 'react';
import InputTodo from './InputTodo'


class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      key: "",
      text: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        key: Date.now(),
        text: e.target.value
      }
    })
    console.log(
      this.state.currentItem.text,
      this.state.currentItem.key
    )
  }

  addInput = (e) => {
    e.preventDefault()

  }


  render() {
    return (
      <form>
        <div className="ui segment">
          <div className="ui fluid icon input transparent ">

            <input className=""
              type="text"
              placeholder="Enter your Todo task"
              value={this.state.text}
              onChange={this.handleInput}

            />
          </div>
        </div>
        <div className="ui buttons fluid">

          <button className="ui positive button " onSubmit={this.addInput}>Save</button>
        </div>

      </form>
    )
  }
}
export default App