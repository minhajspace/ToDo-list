import React from 'react'

class Todoinput extends React.Component {
    state = {
        userInput: []
    }

    onUserInput = (e) => {
        e.preventDefault();

    }
    onButtonClick = (e) => {

        this.setState({ userInput: e.target.value })

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
                                value={""}
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