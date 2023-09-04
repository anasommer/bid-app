import { BASE_URL } from '../api/apiBase.js';
import token from '../helpers/token.js';

export default function updateAvatar(avatar) {
  const avatarUrl = document.querySelector('#avatar').value;

  const endpoint = `/auction/profiles/${JSON.parse(
    localStorage.getItem('username')
  )}/media`;
  const method = 'PUT';
  const options = {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${JSON.parse(token)}`,
    },

    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  };

  updateUrl(BASE_URL, endpoint, options);
}

async function updateUrl(BASE_URL, endpoint, options) {
  try {
    await fetch(`${BASE_URL}${endpoint}`, options);
  } catch (error) {
    console.log(error);
  } finally {
    location.reload();
  }
}
