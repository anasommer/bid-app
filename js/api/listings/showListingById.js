import getListingId from '../../helpers/getListingId.js';

const token = localStorage.getItem('accessToken');

export async function showListingById() {
  const id = getListingId();
  console.log('working', id);
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
