import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Admin, Home, Login, UserCrud } from '../components/screens';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/admin/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>