import React from 'react'


let arr = [];
let tododata;





class Todoinput extends React.Component {
    state = {
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
        this.setState({ todolist: arr })
        this.setState({ userInput: "" })

    }
    onDoneClick = (e) => {
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

                    {this.state.todolist.map((items, key) => (<div className="ui segment">{items}

                        <button className="ui right floated  red basic button " >Edit</button>
                        <button className="ui right floated  red basic button" onClick={this.onDoneClick}>Done</button>

                    </div>))}

                </form>
            </>

        )
    }
}


export default Todoinput;