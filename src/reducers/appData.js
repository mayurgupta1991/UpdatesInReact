import deepFreeze from 'deep-freeze-es6';
import {
    TOGGLE_BUTTON,
    START,
    STOP,
} from '../constants';

const initialRuntimeSettings = {
    buttonState: 'Start',
};

function updateButtonState(state) {
    const buttonState = state.buttonState === START ? STOP : START;
    return { ...state, buttonState };
}

export default function appData(state = initialRuntimeSettings, action = {}) {
    deepFreeze(state);
    deepFreeze(action);

    switch (action.type) {
    case TOGGLE_BUTTON: return updateButtonState(state, action);
    default: return state;
    }
}
