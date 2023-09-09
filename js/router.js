import * as listeners from './listeners/index.js';
import { showListingById } from './api/listings/showListingById.js';
import createHtml from './ui/common/createHtml.js';

/**
 * Router for JS files
 */
export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case '/':
    case '/index.html':
      const listAuctions = listeners.getAuctions();
      listAuctions();
      listeners.loadMore(listAuctions);
      break;
    case '/profile/register.html':
      listeners.register();
      break;
    case '/profile/login.html':
      listeners.login();
      break;
    case '/profile/profile.html':
      listeners.profile();
      break;

    case '/listings/index.html':
      showListingById();
      break;
    case '/listings/details.html':
      showListingById();
      break;
  }
}
