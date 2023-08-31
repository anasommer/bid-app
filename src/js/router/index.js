import * as listeners from '../listeners/index.js';

/**
 * Router for JS files
 */
export default function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case 'src/user/register.html':
      listeners.register();
      break;
  }
}
