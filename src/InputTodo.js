import React from 'react'

// const todolist = []
class Todoinput extends React.Component {
    state = {
        userInput: [],
        todolist: []
    }

    onUserInput = (e) => {
        this.setState({ todolist: e.target.value })

    }
    onButtonClick = (e) => {
        e.preventDefault();
        this.setState({ userInput: this.state.todolist })


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
                                value={this.state.todolist}
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
                        <h5>{this.state.userInput}</h5>

                    </div>

                </form>
            </>

        )
    }
}

export default Todoinput; 