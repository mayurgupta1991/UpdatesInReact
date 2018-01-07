import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(reducers);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
