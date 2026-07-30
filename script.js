const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#site-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('#site-nav a')];

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});
