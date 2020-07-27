const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('#burger');
const menu = wrapper.querySelector('#menu');

burger.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});
