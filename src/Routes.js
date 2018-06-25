import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import App from "./App";

// import App from '';

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <App/>


            </BrowserRouter>

        );
    }
}

export default Routes;