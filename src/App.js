import React from 'react';
import InputTodo from './InputTodo'


class App extends React.Component {
  state = {
    items: [],
    currentItem: " ",
    key: "",
    text: ""
  }

  render() {
    return (
      <div>
        <InputTodo />$ git clone https://github.com/schacon/simplegit-progit
      </div>
    )
  }
}
export default App