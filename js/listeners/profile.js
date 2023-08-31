import { BASE_URL } from '../api/apiBase.js';

export async function profile() {
  const token = localStorage.getItem('accessToken');
  const endpoint = `/auction/profiles/${JSON.parse(
    localStorage.getItem('username')
  )}`;
  console.log(endpoint);
  const method = 'GET';
  const options = {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (token) {
    await fetch(`${BASE_URL}${endpoint}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
