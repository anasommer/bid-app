import { displayMessage } from '../ui/common/displayMessage.js';
import { toggleAuctionLoadMore } from '../ui/helpers/toggleAuctionLoadMore.js';
import * as api from '../api/listings/get.js';
import { AUCTIONS_LIMIT } from '../api/apiBase.js';
import createHtml from '../ui/common/createHtml.js';
import { toggleLoadingIndicator } from '../ui/helpers/toggleLoadingIndicator.js';

export function getAuctions() {
  const container = document.querySelector('#listingsContainer');

  let offset = 0;

  return async function listAuctions() {
    try {
      toggleLoadingIndicator(container);
      toggleAuctionLoadMore(true);
      const auctions = await api.get(offset);
      offset = offset + AUCTIONS_LIMIT;
      createHtml(auctions, container);
      const hideButton =
        auctions.length === 0 || auctions.length < AUCTIONS_LIMIT;
      toggleAuctionLoadMore(hideButton);
    } catch (error) {
      displayMessage('danger', error.message);
    } finally {
      toggleLoadingIndicator(container);
    }
  };
}
