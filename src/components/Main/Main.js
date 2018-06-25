import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from "../../LoginPage";
import Register from "../../RegisterPage";
import Home from "../../HomePage";



class Main extends React.Component{
    render(){
        return(
                    <main>
                      <Switch>
                          <Route exact path='/' component={Login} />
                          <Route path='/register' component={Register} />
                          <Route path='/home' component={Home} />
                      </Switch>
                    </main>
        );
    }
}

export default Main;