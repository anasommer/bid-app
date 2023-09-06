import * as listeners from './listeners/index.js';
import { showFeed } from './helpers/showFeed.js';
import { showListingById } from './api/listings/showListingById.js';

/**
 * Router for JS files
 */
export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case '/':
    case '/index.html':
      showFeed();
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
  }
}
