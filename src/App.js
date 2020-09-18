import React from 'react';
import InputTodo from './InputTodo'

import Greeting from './Components/Greting';


class App extends React.Component {
  state = {
    list: [],
    complete:false,
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
      // this.state.currentItem.text,
      // this.state.currentItem.key
    )
  }

  addInput = (e) => {
    e.preventDefault()
    const userInput = this.state.currentItem
    console.log(userInput)
    if (this.state.currentItem.text !== "") {
      const input = [...this.state.list, userInput]
      this.setState({
        list: input,
        currentItem: {
          text: "",
          key: ""
        }
      })

      console.log(this.state.currentItem.text)
    }
  }

  onDeleteClick = (key) => {
    console.log(this.state.list)
    console.log(key, this.state.currentItem.key)
    const filterList = this.state.list.filter(items => items.key !== key)
    this.setState({
      list: filterList
    })
  }

  onEditClick = (text, key) => {
    const list = this.state.list
    list.map((value) => {
      if (value.key === key) {
        value.text = text
      }
    })
    this.setState({
      list: list
    })
  }

  onCompleteClick = () =>{
    this.setState({
     complete:true  })
     console.log(this.state.complete)
  }


  render() {
    return (
      <>
        <Greeting />
        <form onSubmit={this.addInput}>
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

            <button className="ui positive button " >Save</button>
          </div>

        </form>
        <InputTodo listitems={this.state.list} onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} onCompleteClick={this.onCompleteClick}/>
       

      </>

    )
  }
}
export default App