import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./Routes";

import  {Provider} from 'react-redux';

import {createStore} from 'redux';

import reducer from './reducers/index';



const  store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >

        <Routes/>


    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
