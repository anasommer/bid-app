import { makeApiCall } from '../api/makeApiCall.js';
import createOptions from '../api/createOptions.js';
import { displayMessage } from '../ui/common/displayMessage.js';

export async function addItem() {
  const form = document.querySelector('#addListing');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const listing = Object.fromEntries(formData.entries());
    const { title, description, ends, tags, media } = listing;
    console.log(listing);
    const endsAt = new Date(ends).toISOString();
    console.log(endsAt);
    const endpoint = '/auction/listings';
    const method = 'POST';
    const bodyData = {
      title: title,
      description: description,
      endsAt: endsAt,
      tags: tags,
      media: Array.from(media),
    };
    const options = createOptions(method, bodyData);

    const { data, error } = await makeApiCall(endpoint, options);

    if (error) {
      console.log(error);
      return displayMessage('danger', error);
    } else {
      console.log(data);
    }
  });
}
