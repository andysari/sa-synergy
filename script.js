// --- Menu mobile (burger) ---
const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });

  // Fermer le menu au clic sur un lien
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// --- Liens actifs selon la section visible ---
const sections = document.querySelectorAll('section, header.hero');
const links = document.querySelectorAll('.menu a');

const setActiveLink = () => {
  let currentId = '';
  const scrollY = window.scrollY + 120; // marge pour la navbar
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      currentId = sec.getAttribute('id') || 'accueil';
    }
  });
  links.forEach(link => {
    const href = link.getAttribute('href').replace('#','');
    link.classList.toggle('active', href === currentId);
  });
};
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// --- Smooth scroll (optionnel si CSS scroll-behavior déjà actif) ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
