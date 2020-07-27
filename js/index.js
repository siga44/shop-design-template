const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main__body');
const navbar = wrapper.querySelector('.navbar');
const burger = navbar.querySelector('#burger');
const menu = navbar.querySelector('#menu');

navbar.addEventListener('click', event => {
  const target = event.target;
  const menuItems = [...menu.children].map(li => li.lastElementChild);
  const elementWithActive = [...wrapper.children, ...burger.children, ...menuItems, main];
  if (target.hasAttribute('data-burger-button')) {
    elementWithActive.forEach(item => item.classList.toggle('active'));
  }
});
