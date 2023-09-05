import { updateAvatar } from '../../listeners/updateAvatar.js';

export default function createPage(profile) {
  const { name, email, avatar, credits } = profile;
  const avatarEl = document.querySelector('#avatarEl');
  const profileEl = document.querySelector('#profileEl');

  const avatarImg = document.createElement('img');
  if (avatar) {
    avatarImg.setAttribute('src', avatar);
  } else {
    avatarImg.setAttribute('src', '/img/avatar.jpeg');
  }
  avatarImg.classList.add('avatar');
  avatarEl.append(avatarImg);

  const nameEl = document.createElement('li');
  nameEl.textContent = `Name: ${name}`;

  const emailEl = document.createElement('li');
  emailEl.textContent = `Email: ${email}`;

  const creditsEl = document.createElement('li');
  creditsEl.textContent = `Your total credit: ${credits}`;
  creditsEl.classList.add('credit');

  const listEl = document.createElement('ul');
  listEl.append(nameEl);
  listEl.append(emailEl);
  listEl.append(creditsEl);
  profileEl.append(listEl);

  const updateAvatarEl = document.querySelector('#avatar');
  updateAvatarEl.style.display = 'block';

  const updateBtn = document.querySelector('#update-btn');
  updateBtn.style.display = 'block';
  updateBtn.addEventListener('click', updateAvatar);
}
