import React from 'react'



class Todoinput extends React.Component {





    render() {

        return (
            <>
                <form>
                    <div className="ui segment">
                        <div className="ui fluid icon input transparent ">

                            <input className=""
                                type="text"
                                placeholder="Enter your Todo task"

                            />
                        </div>
                    </div>
                    <div className="ui buttons fluid">

                        <button className="ui positive button " >Save</button>
                    </div>

                </form>
            </>

        )
    }
}


export default Todoinput;