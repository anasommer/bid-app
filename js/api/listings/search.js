import { BASE_URL } from '../apiBase.js';
export async function search(tag) {
  const url = `${BASE_URL}/auction/listings/?_tag=${tag}`;

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error('Search failed');
}
