import React from 'react'


let arr = [];
let tododata;





class Todoinput extends React.Component {
    state = {
        userInput: [],
        todolist: [],
    }

    onUserInput = (e) => {

        tododata = e.target.value
        arr = this.state.userInput
        arr.push(tododata)
        this.setState({ userInput: arr })

    }
    onButtonClick = (e) => {
        e.preventDefault();
        this.setState({ todolist: this.state.userInput })
    }

    onCancelButtonClick = () => {

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
                                value={tododata}
                                onChange={this.onUserInput}

                            />

                        </div>

                    </div>
                    <div className="ui buttons fluid">
                        <button className="ui button  ">Cancel</button>
                        <div className="or"></div>
                        <button className="ui positive button " onClick={this.onButtonClick}>Save</button>
                    </div>
                    <div className="ui segment">
                        <h5>{this.state.todolist}</h5>

                    </div>

                </form>
            </>

        )
    }
}

export default Todoinput; 