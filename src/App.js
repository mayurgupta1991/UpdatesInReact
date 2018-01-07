import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Router from './containers/Router';
import './App.css';

export default function App({ store }) {
    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme({})}>
                <Router />
            </MuiThemeProvider>
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};
