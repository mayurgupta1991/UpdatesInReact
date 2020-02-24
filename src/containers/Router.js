import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import ReduxDispatcher from '../components/ReduxDispatcher/index';
import Slider from '../components/Slider/index';

const Home = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to='/reduxDispatchers'>reduxDispatchers</Link>
            </div>
            <div>
                <Link to='/slider'>Slider</Link>
            </div>
            <div>
                <Link to='/secondWay'>Second Way</Link>
            </div>
            <div>
                <Link to='/thirdWay'>thirdWay</Link>
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
                <Route path="/slider" component={Slider} />
                <Route path="/secondWay" render={() => <h1>Second Way</h1>} />
                <Route
                    path="/thirdWay"
                    children={() => <div>New Way to add routes via children <Link to='/'>Home</Link></div>}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}


export default RoutingNavigation;