// Ajoute la classe .active au lien de menu correspondant à la section visible
const sections = document.querySelectorAll("section, header.hero");
const links = document.querySelectorAll(".menu a");

function onScroll() {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY + 120; // marge pour la navbar
    if (top >= sec.offsetTop && top < sec.offsetTop + sec.offsetHeight) {
      current = "#" + sec.id;
    }
  });
  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === current);
  });
}
window.addEventListener("scroll", onScroll);
onScroll();
