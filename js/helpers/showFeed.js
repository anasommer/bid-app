import { BASE_URL } from '../api/apiBase.js';
import createHtml from '../ui/common/createHtml.js';

let listingsToShow = 12;
const endpoint = `/auction/listings`;

export async function showFeed() {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    const listingsArray = await response.json();

    for (let i = 0; i < listingsToShow; i++) {
      let listing = listingsArray[i];
      createHtml(listing);
    }
  } catch (error) {
    console.log(error);
  }
}
