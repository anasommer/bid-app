import hideSearchResults from '../common/hideSearchResults.js';

export default function displaySearchResults(results) {
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.innerHTML = '';
  const mainContainer = document.querySelector('#main-container');

  if (results.length === 0) {
    hideSearchResults();
    return;
  }

  results.forEach((result) => {
    const link = document.createElement('a');
    link.href = `/listings/details.html?id=${result.id}`;
    link.innerText = result.title;
    resultsContainer.appendChild(link);
  });
  mainContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
}
