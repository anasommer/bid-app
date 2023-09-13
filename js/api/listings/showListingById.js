import getListingId from '../../helpers/getListingId.js';
import createHtmlById from '../../ui/common/createHtmlById.js';
import createOptions from '../createOptions.js';
import { makeApiCall } from '../makeApiCall.js';

export async function showListingById() {
  const id = getListingId();
  const endpoint = `/auction/listings/${id}`;
  const method = 'GET';

  const options = createOptions(method);

  const { data, error } = await makeApiCall(endpoint, options);
  if (data) {
    createHtmlById(data);
  } else {
    return displayMessage('danger', error);
  }
}
