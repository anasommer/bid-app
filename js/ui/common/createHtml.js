export default function createHtml(listings, container) {
  listings.forEach((listing) => {
    const { title, description, media, endsAt, _count, id } = listing;

    const listingDiv = document.createElement('div');
    listingDiv.classList.add(
      'col-12',
      'col-sm-6',
      'col-lg-4',
      'py-2',
      'd-flex'
    );

    const listingBody = document.createElement('div');
    listingBody.classList.add(
      'card-body',
      'card',
      'h-100',
      'd-flex',
      'align-items-baseline'
    );

    const titleEl = document.createElement('h2');
    titleEl.textContent = title;
    listingBody.append(titleEl);

    const descEl = document.createElement('p');
    if (description) {
      descEl.textContent = description;
    }

    const imageEl = document.createElement('img');
    if (media.length >= 1) {
      imageEl.setAttribute('src', media[0]);
    } else {
      imageEl.setAttribute('src', '../../../img/no-image.jpeg');
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

    const bidBtnEl = document.createElement('a');
    bidBtnEl.setAttribute('href', `listings/details.html?id=${id}`);
    bidBtnEl.classList.add('bidLink', 'btn-main', 'btn', 'align-self-stretch');
    bidBtnEl.textContent = 'See more';

    listingBody.append(titleEl);
    descEl.append(endsAtEl);
    listingBody.append(imageEl);
    listingBody.append(descEl);
    listingBody.append(bidBtnEl);
    listingDiv.append(listingBody);

    container.append(listingDiv);
  });
}
