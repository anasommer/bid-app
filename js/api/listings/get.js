import { BASE_URL, AUCTIONS_LIMIT } from '../apiBase.js';
import handleErrors from '../handleErrors.js';

export async function get(offset) {
  const url = `${BASE_URL}/auction/listings?limit=${AUCTIONS_LIMIT}&offset=${offset}&_active=true`;
  const response = await fetch(url);

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  handleErrors(data);
}
