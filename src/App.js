import React from "react";
import Todoinput from './Components/InputTodo'
import './App.css'
import Greeting from "./Components/Greting";
import List from './Components/List'




class App extends React.Component {
  onUserSubmit = (props) => {
    console.log(props.list)
  }

  render() {

    return (<>
      <Greeting />
      <Todoinput onSubmit={this.onUserSubmit} />
      <List />


    </>)


  }
}
export default App;
