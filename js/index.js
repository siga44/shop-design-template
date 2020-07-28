const wrapper = document.querySelector('.wrapper');
const navbar = wrapper.children[0];
const burgerButton = navbar.querySelector('#burger');
const navbarItemsNodes = navbar.querySelectorAll('[data-menu-item]');

wrapper.addEventListener('click', event => {
  const target = event.target;
  if (target.hasAttribute('data-burger-button')) {
    const navbarItemsArray = [...navbarItemsNodes].map(el => el.lastElementChild);
    const changingWithBurgerClickElements = [...wrapper.children, ...burgerButton.children, ...navbarItemsArray];
    changingWithBurgerClickElements.forEach(el => el.classList.toggle('active'));
  }
});
