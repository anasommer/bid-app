export function loadMore(func) {
  const button = document.querySelector('#loadMore');

  button.addEventListener('click', func);
}
