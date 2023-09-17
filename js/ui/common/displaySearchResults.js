import hideSearchResults from '../common/hideSearchResults.js';
import { displayMessage } from './displayMessage.js';

export default function displaySearchResults(results) {
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    hideSearchResults();
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = 'Sorry, no results found';
    return;
  }

  results.forEach((result) => {
    const link = document.createElement('a');
    link.href = `/listings/details.html?id=${result.id}`;
    link.innerText = result.title;
    resultsContainer.appendChild(link);
  });

  resultsContainer.style.display = 'block';
}
