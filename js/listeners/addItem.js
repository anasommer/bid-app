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

    const endsAt = new Date(ends).toISOString();

    const endpoint = '/auction/listings';
    const method = 'POST';
    const bodyData = {
      title: title,
      description: description,
      endsAt: endsAt,
      tags: tags.split(','),
      media: media.split(','),
    };
    const options = createOptions(method, bodyData);

    const { data, error } = await makeApiCall(endpoint, options);

    if (error) {
      return displayMessage('danger', error);
    } else {
      location.replace(`/listings/details.html?id=${data.id}`);
    }
  });
}
