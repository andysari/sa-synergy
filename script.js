/* ========================
   HERO MATRIX TEXT
======================== */
document.addEventListener("DOMContentLoaded", () => {
  const heroMatrix = document.getElementById("hero-matrix");
  if (!heroMatrix) return;

  const phrases = [
    "Bonjour et bienvenue sur mon site, je suis Andy Sari",
    "Je vous accompagne avec des formations et un suivi personnalisés",
    "Mon objectif est de vous aider à progresser et atteindre vos projets",
    "N’hésitez pas à me contacter pour échanger dès maintenant"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeMatrix() {
    if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        heroMatrix.textContent += phrases[phraseIndex][charIndex];
        charIndex++;
        setTimeout(typeMatrix, 50);
      } else {
        typing = false;
        setTimeout(typeMatrix, 5000);
      }
    } else {
      heroMatrix.textContent = "";
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
      typing = true;
      setTimeout(typeMatrix, 100);
    }
  }

  typeMatrix();

  /* ========================
     SCROLL SMOOTH
  ======================= */
  const scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
