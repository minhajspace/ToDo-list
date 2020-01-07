import React from 'react'

class Todoinput extends React.Component {
    state = {
        userInput: []
    }

    onUserInput = (e) => {
        this.setState({ userInput: e.target.value })

    }

    render() {
        return (
            <>
                <div className="ui segment">

                    <form>

                        <div className="ui fluid icon input transparent ">

                            <input className=""
                                type="text"
                                placeholder="Enter your Todo task"
                                value={this.state.userInput}
                                onChange={this.onUserInput}

                            />


                        </div>




                    </form>



                </div>
                <div className="ui buttons fluid">
                    <button className="ui button  ">Cancel</button>
                    <div className="or"></div>
                    <button className="ui positive button ">Save</button>
                </div>
            </>

        )
    }
}

export default Todoinput; 