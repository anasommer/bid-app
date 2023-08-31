import { BASE_URL } from '../apiBase.js';
import { redirectToListings } from '../../helpers/redirect.js';
import { displayMessage } from '../../ui/common/displayMessage.js';
/**
 * Handles the login operation
 * @param {object} profile - The user profile object.
 */

export async function handleLogin(profile) {
  const endpoint = '/auction/auth/login';
  const method = 'POST';
  const loginURL = `${BASE_URL}${endpoint}`;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  try {
    const result = await response.json();
    const token = localStorage.setItem(
      'accessToken',
      JSON.stringify(result.accessToken)
    );
    console.log(result.name);
    localStorage.setItem('username', JSON.stringify(result.name));
    localStorage.setItem('credits', JSON.stringify(result.credits));
    redirectToListings(token);
  } catch (error) {
    displayMessage('warning', error);
  }
}
