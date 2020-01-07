import React from 'react'

class Todoinput extends React.Component {
    state = {
        userInput: []
    }


    render() {
        return (
            <div className="ui segment">


                <div className="ui fluid icon input transparent ">

                    <input className=""
                        type="text"
                        placeholder="Enter your Todo task"
                        value={this.state.userInput}

                    />
                </div>





            </div>
        )
    }
}

export default Todoinput; 