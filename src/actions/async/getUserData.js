import { fetchWebApi } from '../../webapis/dashboard';

export const fetchData = (asd) =>  {
    const url = 'https://api.welcometv.net/api/v1/videoList/npQNyYVn0fgUokNaUoTXsg?langId=1&categoryId=4&page=1&size=8';
    return fetchWebApi('', url).request;
};