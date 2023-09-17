import { search } from '../api/listings/search.js';
import { displayMessage } from '../ui/common/displayMessage.js';

import displaySearchResults from '../ui/common/displaySearchResults.js';
import hideSearchResults from '../ui/common/hideSearchResults.js';

export default function handleSearch() {
  const input = document.querySelector('#search');

  input.addEventListener('input', doSearch);
}

async function doSearch(event) {
  const tag = event.target.value.trim();

  if (tag.length < 3) {
    return hideSearchResults();
  }

  try {
    const results = await search(tag);

    displaySearchResults(results);
  } catch (error) {
    displayMessage(error);
  }
}
