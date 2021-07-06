import React,{Component} from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import Activate from "./components/Activate";
import Auth from './components/Auth';
import WriteHome from './components/WriteHome';
import WriteBlog from "./components/WriteBlog";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/Dashboard";

class App extends Component{
  render(){
    return(
      <>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/activate/:token' component={Activate} exact/>
          <Route path='/auth' component={Auth} exact/>
          <Route path='/creator-tools' component={WriteHome} exact/>
          <PrivateRoute path='/new-story' component={WriteBlog} exact/>
          <PrivateRoute path='/dashboard' component={Dashboard} exact/>

        </Switch>
      </>
    )
  }
}

export default App;
