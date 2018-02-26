/**
* This function checks the status given HTTP response object, console.logs a
* success and returns the response or throws and error if the request has failed.
* @param {Object} response - HTTP response.
* @return {Object/Error} response - HTTP response or throws an error.
*/
export function handleHttp(response) {
  const message = `HTTP Request ${(response.ok === true) ? 'Suceeded' : 'Failed'}`;
  // console.log('@handleHttp', response); // eslint-disable-line no-console

  if (response.status >= 200 && response.status < 300) {
    // console.log(message); // eslint-disable-line no-console
    return response;
  }
  const httpError = new Error(`@handleHttp - ${message} : ${response.status} (${response.statusText})`);
  console.error(httpError); // eslint-disable-line no-console
  throw httpError;
}
// TODO: There's a far bigger range of scenarios to allow for here.


/**
* This function throws error if array argument is not an Array.
* @param {Array?} array - thing to be checked.
* @return {Boolean/Error} - The boolean for readabilty, the Error is want you're looking for.
*/
export function validateArray(array) {
  if (array && Array.isArray(array)) {
    // console.info('^validateArray - Valid Array was returned'); // eslint-disable-line no-console
    return true;
  }
  const arrayError = '@validateArray - Response Returned from API Request was not an Array';
  console.warn(arrayError); // eslint-disable-line no-console
  throw Error(arrayError);
}
