import {
    TOGGLE_BUTTON, 
    GET_API_FETCH,
    USER_FETCH_REQUESTED,
} from '../constants';

export function changeButtonStatus() {
    return {
        type: TOGGLE_BUTTON,
    };
}

export function callSagaApi() {
    return {
        type: USER_FETCH_REQUESTED,
    };
}

export function getResponse(data) {
    return {
        type: GET_API_FETCH,
        data
    };
}
