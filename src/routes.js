import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';
import Repository from './Repository';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/repository" component={Repository} exact />
            </Switch>
        </BrowserRouter>
    );
}
