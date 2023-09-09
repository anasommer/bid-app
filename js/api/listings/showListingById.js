import getListingId from '../../helpers/getListingId.js';
import createOptions from '../createOptions.js';
import { makeApiCall } from '../makeApiCall.js';

const token = localStorage.getItem('accessToken');

export async function showListingById() {
  const id = getListingId();
  console.log('working', id);
  const endpoint = `/auction/listings/${id}`;
  const method = 'GET';

  const options = createOptions(method);

  const { data, error } = await makeApiCall(endpoint, options);
  if (data) {
    console.log(data);
  } else {
    return displayMessage('danger', error);
  }
  // const endpoint = '/auction/listings/';
  // const method = 'GET';
  // const options = {
  //   method,
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //     Authorization: `Bearer ${JSON.parse(token)}`,
  //   },
  // };

  // here goes the function that will make a call to the API
}
