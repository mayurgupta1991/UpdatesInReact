import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UnauthContent from './UnauthContentPane';
import NoMatch from '../NoMatchContainer';

const UnauthContainer = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UnauthContent} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
}

export default UnauthContainer;