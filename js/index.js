const wrapper = document.querySelector('.wrapper');
const navbar = wrapper.querySelector('.navbar');
const burger = navbar.querySelector('#burger');
const menu = navbar.querySelector('#menu');

navbar.addEventListener('click', event => {
  const target = event.target;
  if (target.hasAttribute('data-burger-button')) {
    const menuItems = [...menu.children].map(li => li.lastElementChild);
    [navbar, ...burger.children, ...menuItems].forEach(item => item.classList.toggle('active'));
  }
});
