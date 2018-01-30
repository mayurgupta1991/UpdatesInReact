import { TOGGLE_BUTTON, GET_API_FETCH } from '../constants';

export default function changeButtonStatus() {
    return {
        type: TOGGLE_BUTTON,
    };
}

export function getResponse(response) {
    console.log(response);
    return {
        type: GET_API_FETCH,
    };
}
