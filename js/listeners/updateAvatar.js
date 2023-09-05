import createOptions from '../api/createOptions.js';
import token from '../api/token.js';
import { makeApiCall } from '../api/makeApiCall.js';

export async function updateAvatar(avatar) {
  const avatarUrl = document.querySelector('#avatar').value;

  const endpoint = `/auction/profiles/${JSON.parse(
    localStorage.getItem('username')
  )}/media`;
  const method = 'PUT';
  const bodyData = {
    avatar: avatarUrl,
  };
  const headers = {
    Authorization: `Bearer ${JSON.parse(token)}`,
  };

  const options = createOptions(method, bodyData, headers);

  const { data, error } = await makeApiCall(endpoint, options);
  if (data) {
    location.reload();
  } else {
    return displayMessage('danger', error);
  }
}
