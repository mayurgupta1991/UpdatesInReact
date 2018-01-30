import { webapiGet, webapiPut, webapiPost, webapiAuthPost } from './core';

export function fetchWebApi(accessToken, url) {
    return webapiGet(accessToken, url);
}

export function putDashboardWebApi(accessToken, url, bodyObject) {
    return webapiPut(accessToken, url, bodyObject);
}

export function postDashboardWebApi(accessToken, url, bodyObject) {
    return webapiPost(accessToken, url, bodyObject);
}

export function postAuthApi(url, bodyObject) {
    return webapiAuthPost(url, bodyObject);
}
