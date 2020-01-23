import React from "react";
import Todoinput from './Components/InputTodo'
import './App.css'
import Greeting from "./Components/Greting";
import List from './Components/List'




class App extends React.Component {


  render() {

    return (<>
      <Greeting />
      <Todoinput />
      <List />


    </>)


  }
}
export default App;
