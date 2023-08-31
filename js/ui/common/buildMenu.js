/* 
Builds a dymanic menu 
*/

export default function buildMenu() {
  const menu = document.querySelector('#menu');
  const path = window.location.pathname;
  const token = localStorage.getItem('accessToken');

  if (token) {
    menu.innerHTML = `
                        <li class="nav-item">
                        <a class="nav-link ${
                          path === '/' || path === '/index' ? 'active' : ''
                        }" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${
                              path === '/profile/profile.html' ? 'active' : ''
                            }" aria-current="page" href="/profile/profile.html">Profile</a>
                        </li>
                        <li class="nav-item">
                        <a
                          class="btn btn-warning" id="logout-btn"
                          aria-current="page"
                          href="/"
                          >Log Out </a
                        >
                      </li>
                    `;

    document.querySelector('#logout-btn').addEventListener('click', () => {
      const userResponse = confirm('Are you sure you want to log out?');
      userResponse && localStorage.clear();
    });
  } else {
    menu.innerHTML = `
    <li class="nav-item">
    <a class="nav-link ${
      path === '/' || path === '/index.html' ? 'active' : ''
    }" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${
      path === '/profile/login.html' ? 'active' : ''
    }" aria-current="page" href="/profile/login.html"
      >Login </a
    >
  </li>
  <li class="nav-item">
 
    <a class="nav-link  ${
      path === '/profile/register.html' ? 'active' : ''
    } " aria-current="page" href="/profile/register.html">Sign Up</a>
  </li>
    `;
  }
}
