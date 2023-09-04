import { BASE_URL } from './apiBase.js';

export async function makeApiCall(endpoint, options = {}) {
  let data, error;

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (response.ok) {
      data = await response.json();
    } else {
      const errorResponse = await response.json();
      error = errorResponse.errors.map((err) => err.message).join(', ');
    }
  } catch (err) {
    error = err.toString();
  }
  return { data, error };
}
