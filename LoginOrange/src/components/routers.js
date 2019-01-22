import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux'

import Splash from './splash';
import Login from './login/login';
import Register from './login/register';

const App=()=>{
    return(
        <Router>
            <Scene key="root">
            <Scene key="Splash" component={Splash} title="Splash" hideNavBar={true}  initial={true}/>
            <Scene key="Login" component={Login} title="Login" hideNavBar={true}/>
            <Scene key="Register" component={Register} title="Register" hideNavBar={true}/>
            </Scene>
        </Router>
    )
}

export default App;