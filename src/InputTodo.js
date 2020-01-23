import React from 'react'
import List from './Components/List'
let arr = [];
let tododata;

class Todoinput extends React.Component {
    state = {
        isTrue: true,
        userInput: "",
        todolist: [],
    }

    onUserInput = (e) => {
        this.setState({ userInput: e.target.value })
    }
    onButtonClick = (e) => {
        e.preventDefault();
        tododata = this.state.userInput
        arr.push(tododata)
        this.setState(
            {
                todolist: arr,
                userInput: ""
            })
        this.props.onSubmit(this.state.todolist)
    }

    onDoneClick = (e) => {
        e.preventDefault();
    }
    onEditClick = (e) => {
        e.preventDefault();
    }

    render() {

        return (
            <>
                <form>
                    <div className="ui segment">
                        <div className="ui fluid icon input transparent ">

                            <input className=""
                                type="text"
                                placeholder="Enter your Todo task"
                                value={this.state.userInput}
                                onChange={this.onUserInput}
                            />
                        </div>
                    </div>
                    <div className="ui buttons fluid">

                        <button className="ui positive button " onClick={this.onButtonClick}>Save</button>
                    </div>

                </form>
            </>

        )
    }
}


export default Todoinput;