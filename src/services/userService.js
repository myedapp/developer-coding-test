import * as errorHandlers from '../lib/errorHandlers';

/**
* This function performs a GET request from the given url returning json.
* @param {String} url - in our case an API endpoint.
* @return {promise} repsone.json() - data from our API.
*/
export default function getAPIData(url) {
  return fetch(url, {
    method: 'GET',
  })
    .then(errorHandlers.handleHttp)
    .then(response => response.json())
    .catch((error) => {
      console.error('There was an error fetching the data from the API', error);
    });
}
