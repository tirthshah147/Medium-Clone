import React from 'react';
import { Redirect, Route } from 'react-router-dom';


function PrivateRoute({component: Component, ...rest}) {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <Route
    {...rest}
    render = {(props) => 
      isLoggedIn ? <Component {...props}/> : <Redirect to={
        {pathname : "/auth", state:{from : props.location}}
      }/>
    }
    />
  )
}

export default PrivateRoute;







