import * as listeners from './listeners/index.js';

/**
 * Router for JS files
 */
export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case '/profile/register.html':
      listeners.register();
      break;
    case '/profile/login.html':
      listeners.login();
      break;
    case '/profile/profile.html':
      listeners.profile();
      break;
  }
}
