import { search } from '../api/listings/search.js';
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
    console.log(results);
    displaySearchResults(results);
  } catch (error) {
    console.log(error);
  }
}
