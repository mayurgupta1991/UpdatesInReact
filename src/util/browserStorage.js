import cookie from 'react-cookie';
import { COOKIE_EXPIRY_TIME, BROWSER_STORAGE } from '../constants';

export function setUserStorage({ token }) {
    cookie.save(
        BROWSER_STORAGE.ACCESS_TOKEN,
        JSON.stringify(
            {
                token,
            },
        ),
        {
            maxAge: COOKIE_EXPIRY_TIME,
        },
    );
}

export function getUserStorage() {
    return cookie.load(BROWSER_STORAGE.ACCESS_TOKEN);
}

export function removeUserStorage() {
    cookie.save(
        BROWSER_STORAGE.ACCESS_TOKEN, '',
        {
            maxAge: 0,
        },
    );
    cookie.remove(BROWSER_STORAGE.ACCESS_TOKEN);
}
