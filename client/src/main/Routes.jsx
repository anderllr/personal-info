import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/screens/Home';
import UserCrud from '../components/screens/UserCrud';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>