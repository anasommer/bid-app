/* 
Builds a dymanic menu 
*/

export default function buildMenu() {
  const menu = document.querySelector('#menu');
  const path = window.location.pathname;
  const token = localStorage.getItem('accessToken');
  const username = JSON.parse(localStorage.getItem('username'));

  if (token) {
    menu.innerHTML = `
                        <li class="nav-item">
                        <a class="nav-link ${
                          path === '/' || path === '/index.html' ? 'active' : ''
                        }" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${
                              path === '/profile/' ? 'active' : ''
                            }" aria-current="page" href="/profile">Profile</a>
                        </li>
                        <li class="nav-item">
                        <a
                          class="btn btn-warning" id="logout-btn"
                          aria-current="page"
                          href="/"
                          >Log Out ${username}</a
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
      path === '/src/user/login.html' ? 'active' : ''
    }" aria-current="page" href="login.html"
      >Login </a
    >
  </li>
  <li class="nav-item">
 
    <a class="nav-link  ${
      path === '/' || path === '/src/user/register.html' ? 'active' : ''
    } " aria-current="page" href="register.html">Sign Up</a>
  </li>
    `;
  }
}
