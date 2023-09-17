import { placeBid } from '../../listeners/placeBid.js';

export default function createHtmlById(data) {
  const { title, description, media, endsAt, _count, id, tags, bids } = data;

  const container = document.querySelector('#detailsContainer');
  const listingTitleEl = document.querySelector('#listingTitle');
  listingTitleEl.textContent = title;

  const listingDiv = document.createElement('div');
  listingDiv.classList.add(
    'col-12',
    'col-md-8',
    'col-lg-8',
    'offset-lg-2',
    'offset-md-2',
    'py-2',
    'd-flex'
  );

  const listingBody = document.createElement('div');
  listingBody.classList.add(
    'card-body',
    'card',
    'col-lg-3',
    'h-100',
    'd-flex',
    'align-items-baseline'
  );

  const descEl = document.createElement('p');
  if (description) {
    descEl.textContent = description;
  }

  const tagsEl = document.createElement('p');
  if (tags) {
    tagsEl.textContent = `#Tags: ${tags}`;
  }

  const countEl = document.createElement('p');
  if (_count.bids) {
    countEl.textContent = `Bids: ${_count.bids}`;
    countEl.classList.add('bids');
  }
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  const imageEl = document.createElement('img');
  if (media.length >= 1) {
    imageEl.setAttribute('src', media[0]);
    listingBody.append(imageEl);

    for (let i = 0; i < media.length; i++) {
      const img = document.createElement('img');
      img.setAttribute('src', media[i]);
      img.classList.add('img-thumbnail', 'w-100');
      gallery.append(img);
      img.addEventListener('click', (e) => {
        imageEl.setAttribute('src', e.target.src);
      });
      listingBody.append(gallery);
    }
  } else {
    imageEl.setAttribute('src', '../../../img/no-image.jpeg');
    listingBody.append(imageEl);
  }
  imageEl.classList.add('listingImg', 'thumbnail');

  const endsAtEl = document.createElement('span');
  endsAtEl.classList.add('endTime');
  const date = new Date(endsAt);

  const today = new Date();
  if (date <= today) {
    endsAtEl.textContent = `Auction ended`;
  } else {
    endsAtEl.textContent = `Ends in: ${date.getDay()} day(s) ${date.getHours()} hour(s) ${date.getMinutes()} minutes`;
  }

  // HTML that will only registered users see
  const messageEl = document.createElement('div');
  messageEl.setAttribute('id', 'message');
  messageEl.classList.add('bidMessage');
  const bidInputEl = document.createElement('input');
  bidInputEl.setAttribute('type', 'text');
  bidInputEl.setAttribute('placeholder', 'Enter your bid');
  bidInputEl.classList.add('bidInput');

  const credits = localStorage.getItem('credits');
  const bidBtnEl = document.createElement('a');
  bidBtnEl.textContent = 'Bid';
  bidBtnEl.classList.add('bidLink', 'btn-main', 'btn', 'align-self-stretch');

  const bidContainerEl = document.createElement('div');
  bidContainerEl.textContent = `Your credit: ${credits}`;
  const bidsH2El = document.createElement('h3');
  bidsH2El.textContent = 'Bids placed:';

  const bidsUlEl = document.createElement('ol');

  if (localStorage.getItem('accessToken')) {
    bidContainerEl.append(bidsH2El);

    bids.forEach((bid) => {
      bidsUlEl.innerHTML += `<li>${bid.amount}$ by ${bid.bidderName}$</li>`;
    });
    bidContainerEl.append(bidsUlEl);

    bidBtnEl.addEventListener('click', () => {
      placeBid(bidInputEl.value, id);
    });
  } else {
    bidBtnEl.style.display = 'none';
  }

  listingBody.append(descEl);
  listingBody.append(tagsEl);
  listingBody.append(countEl);
  listingBody.append(bidInputEl);
  listingBody.append(bidBtnEl);

  listingDiv.append(listingBody);
  listingBody.append(messageEl);
  listingBody.append(endsAtEl);

  listingBody.append(bidContainerEl);
  container.append(listingDiv);
}
