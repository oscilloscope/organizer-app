// console.log("hello world")

import {store} from '../store';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components/Main';


// import {Dashboard} from './components/DashBoard'


ReactDOM.render(
    <Main/>,
    document.getElementById('app')
)

// console.log(store.getState());
