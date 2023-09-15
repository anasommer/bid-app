import createOptions from '../api/createOptions.js';
import { displayMessage } from '../ui/common/displayMessage.js';

import { makeApiCall } from '../api/makeApiCall.js';

export async function placeBid(bidValue, id) {
  console.log(bidValue, id);

  const method = 'POST';
  const bodyData = {
    amount: +bidValue,
  };
  const endpoint = `/auction/listings/${id}/bids`;

  const options = createOptions(method, bodyData);

  const { data, error } = await makeApiCall(endpoint, options);
  if (data) {
    location.reload();
  } else {
    return displayMessage('danger', error);
  }
}
