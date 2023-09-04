export default function createHtml(listing) {
  const listingsContainer = document.querySelector('#listingsContainer');

  const { title, description, media, endsAt, _count } = listing;

  const listingDiv = document.createElement('div');
  listingDiv.classList.add('col-12', 'col-sm-12', 'col-lg-6', 'text-center');
  const listingBody = document.createElement('div');
  listingBody.classList.add('card-body');

  const titleEl = document.createElement('h2');
  titleEl.textContent = title;
  listingBody.append(titleEl);

  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', media[0]);
  imageEl.classList.add('listingImg', 'card-img-top');

  const descEl = document.createElement('p');
  descEl.classList.add('card-text');
  descEl.textContent = description;
  listingBody.append(descEl);

  listingDiv.append(listingBody);

  listingDiv.append(imageEl);

  listingsContainer.append(listingDiv);
}
