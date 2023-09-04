import { makeApiCall } from '../api/makeApiCall.js';
import createOptions from '../api/createOptions.js';
import { displayMessage } from '../ui/common/displayMessage.js';

/**
 * Function for handling registration of a new user.
 * Collects form data and makes API call to the server, if entered information is correct, then user will see a success message, if something is wrong then user will get the error message.
 */

export async function register() {
  const form = document.querySelector('#registerForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    const endpoint = '/auction/auth/register';
    const method = 'POST';

    const options = createOptions(method, profile);

    const { error } = await makeApiCall(endpoint, options);

    if (error) {
      return displayMessage('danger', error);
    }

    displayMessage(
      'success',
      `You have successfully registered, please <a href="../../profile/login.html">login</a>`
    );

    form.reset();
  });
}
