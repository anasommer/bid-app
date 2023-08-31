import { BASE_URL } from '../api/apiBase.js';
import { getData } from '../api/getData.js';

export async function register() {
  const form = document.querySelector('#registerForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    const endpoint = '/auction/auth/register';
    const method = 'POST';

    const registerOptions = {
      method,
      body: JSON.stringify(profile),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    console.log(profile);
    console.log(getData(BASE_URL, endpoint, registerOptions));
  });
}
// register();
