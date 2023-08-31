import { BASE_URL } from '../api/apiBase.js';

import spinner from '../ui/utils/spinner.js';
import createPage from '../api/profile/createPage.js';

const profileEl = document.querySelector('#profile');

export async function profile() {
  profileEl.append(spinner);
  const token = localStorage.getItem('accessToken');
  const endpoint = `/auction/profiles/${JSON.parse(
    localStorage.getItem('username')
  )}`;

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
      .then((profile) => createPage(profile));
    spinner.style.display = 'none';
  }
}
