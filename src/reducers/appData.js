import deepFreeze from 'deep-freeze-es6';
import {
    TOGGLE_BUTTON,
    START,
    STOP,
    GET_API_FETCH,
} from '../constants';

const initialRuntimeSettings = {
    buttonState: 'Start',
};

function updateButtonState(state) {
    const buttonState = state.buttonState === START ? STOP : START;
    return { ...state, buttonState };
}

function getUserData(state, { data }) {
    console.log(data);
    return { ...state, data };
}

export default function appData(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case TOGGLE_BUTTON: return updateButtonState(state, action);
    case GET_API_FETCH: return getUserData(state, action);
    default: return state;
    }
}
