import { makeApiCall } from '../api/makeApiCall.js';
import createOptions from '../api/createOptions.js';
import { displayMessage } from '../ui/common/displayMessage.js';

/**
 * Performs a login operation
 */
export async function login() {
  const form = document.querySelector('#registerForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    const endpoint = '/auction/auth/login';
    const method = 'POST';

    const options = createOptions(method, profile);

    const { data, error } = await makeApiCall(endpoint, options);

    if (error) {
      return displayMessage('danger', error);
    } else {
      const token = localStorage.setItem(
        'accessToken',
        JSON.stringify(data.accessToken)
      );

      localStorage.setItem('username', JSON.stringify(data.name));
      localStorage.setItem('credits', JSON.stringify(data.credits));

      form.reset();
      window.location.href = '../../index.html';
    }
  });
}
