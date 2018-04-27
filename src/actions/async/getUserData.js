import { fetchWebApi } from '../../webapis/dashboard';
import { handleFetchError } from '../../util/errorHandler';

export const fetchData = (asd) =>  {
    console.log(asd);
    const url = 'https://api.welcometv.net/api/v1/videoList/npQNyYVn0fgUokNaUoTXsg?langId=1&categoryId=4&page=1&size=8';
    return fetchWebApi('', url).request;
};