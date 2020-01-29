import React from 'react';
import InputTodo from './InputTodo'


class App extends React.Component {
  state = {
    list: [],
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
    if (this.state.currentItem.text !== "") {
      const input = [...this.state.list, userInput]
      this.setState({
        list: input,
        userInput: {
          text: "",
          key: ""
        }
      })
      console.log(this.state.list)
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

    console.log("items:" + this.state.list);
    const items = this.state.list;
    this.state.list.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      list: items
    })

  }



  render() {
    return (
      <>
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
        <InputTodo listitems={this.state.list} onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} />
      </>

    )
  }
}
export default App