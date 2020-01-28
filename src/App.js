import React from "react";
import Todoinput from './Components/InputTodo'
import './App.css'
import Greeting from "./Components/Greting";





class App extends React.Component {


  render() {

    return (<>
      <Greeting />
      <Todoinput onSubmit={this.onUserSubmit} />



    </>)


  }


}
export default App;
