import React,{Component} from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Activate from "./components/Activate";
import Auth from './components/Auth';
import './App.css';



class App extends Component{
  render(){
    return(
      <>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/activate/:token' component={Activate} exact/>
          <Route path='/auth' component={Auth} exact/>
        </Switch>
      </>
    )
  }
}

export default App;
