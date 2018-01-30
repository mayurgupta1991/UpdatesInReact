import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    thunkMiddleware, // lets us dispatch() functions
    sagaMiddleware, // lets us dispatch() functions
];

export default function configureStore(reducers) {
    const store = createStore(
        reducers,
        compose(applyMiddleware(...middlewares)),
    );
    sagaMiddleware.run(mySaga);
    return store;
}

