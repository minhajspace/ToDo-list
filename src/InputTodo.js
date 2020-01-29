import React from 'react'

const InputTodo = (props) => {
    // const { listitems } = props.listitems
    console.log(props.listitems)
    const listdata = props.listitems.map((value) => {
        return <div className="ui segment" key={value.key}>
            <p>{value.text} </p>
        </div>
    })


    // const listItems = props.listData.map(item =>
    //     <div>
    //         {item.text}
    //     </div>)

    return (
        <>

            {listdata}
        </>

    )
}
export default InputTodo;