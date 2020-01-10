import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Aboutme from './aboutme';
import Contact from './contact';


const Main = () =>(
    <Switch>
        <Route exact path = '/' component={LandingPage}></Route>
        <Route path = '/aboutme' component={Aboutme}></Route>
        <Route path = '/resume' component={Resume}></Route>
        <Route path = '/projects' component={Projects}></Route>
        <Route path = '/contact' component={Contact}></Route>
        <Redirect to="/" />
    </Switch>
)

export default Main;