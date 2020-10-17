import React from 'react';
import { Provider } from 'react-redux';
import {store } from '../../store/index';
import {ConnectedDashboard} from './DashBoard';


export const Main = () => (

<Provider store={store}>
    <div>
        {/* Dashboard goes here */}
        <ConnectedDashboard/>
    </div>

</Provider>
)