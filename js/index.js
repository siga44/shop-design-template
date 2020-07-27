const navbar = document.querySelector('.navbar');
const burger = navbar.querySelector('#burger');
const menu = navbar.querySelector('#menu');
const menuItems = navbar.querySelectorAll('.menu__item-full');

navbar.addEventListener('click', event => {
  const target = event.target;
  if (target.hasAttribute('data-burger-button')) {
    navbar.classList.toggle('active');
    menuItems.forEach(item => item.classList.toggle('active'));
  }
});
