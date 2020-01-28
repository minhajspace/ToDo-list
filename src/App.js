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
    console.log(this.state.text)
  }

  addInput = (e) => {

  }


  render() {
    return (
      <div>
        <InputTodo handleInput={this.handleInput} />
      </div>
    )
  }
}
export default App