import React from 'react'

const InputTodo = (props) => {

    const items = props.items;

    return (
        <>
            <form>
                <div className="ui segment">
                    <div className="ui fluid icon input transparent ">

                        <input className=""
                            type="text"
                            placeholder="Enter your Todo task"
                            value={props.handleInput}

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
export default InputTodo;