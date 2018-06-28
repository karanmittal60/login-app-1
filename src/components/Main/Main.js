import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from "../../LoginPage";
import Register from "../../RegisterPage";
import Home from "../../HomePage";

// import Header from './../Header/Header'



class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {/*<Header/>*/}

                </div>
                <div>
                    <main>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/home' component={Home} />
                        </Switch>
                    </main>

                </div>
            </div>

        );
    }
}

export default Main;