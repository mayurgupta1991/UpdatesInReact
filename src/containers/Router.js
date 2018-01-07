import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import ReduxDispatcher from '../ReduxDispatcher';

const Home = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to='/reduxDispatchers'>reduxDispatchers</Link>
            </div>
            <div>
                <Link to='/props'>Props</Link>
            </div>
        </div>
    );
}

const RoutingNavigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/reduxDispatchers" component={ReduxDispatcher} />
                <Route path="/props" render={() => <h1>Props</h1>} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}


export default RoutingNavigation;