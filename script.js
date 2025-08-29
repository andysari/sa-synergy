document.addEventListener("DOMContentLoaded", () => {
  /* ------------ BURGER MENU ------------ */
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      burger.classList.toggle("open");
    });
  }

  /* ------------ TESTIMONIALS SLIDER (apropos) ------------ */
  const testimonies = [
    {
      nom: "Tom",
      role: "Entrepreneur",
      texte: "Andy est exceptionnel. Sa passion et son dévouement sont inspirants. ...",
      image: "assets/tom.jpg"
    },
    {
      nom: "Marina",
      role: "Entrepreneur",
      texte: "Andy and I collaborated in the development of my business in Athens. ...",
      image: "assets/marina.jpg"
    },
    {
      nom: "Laura",
      role: "Responsable de magasin",
      texte: "Un professeur passionné, avec un bagage de connaissances incroyables ...",
      image: "assets/laura.jpg"
    },
    {
      nom: "Alexandre",
      role: "Assistant comptable",
      texte: "Très pédagogue et sérieux. C'est un professeur très polyvalent ...",
      image: "assets/alexandre.jpg"
    },
    {
      nom: "Mélanie",
      role: "Étudiante en Master Finance",
      texte: "Andy est très professionnel et réactif. ...",
      image: "assets/melanie.jpg"
    },
    {
      nom: "Leontin",
      role: "Étudiant BTS MCO",
      texte: "Je tiens à exprimer ma profonde gratitude ...",
      image: "assets/leontin.jpg"
    },
    {
      nom: "Nicolas",
      role: "Étudiant BTS Comptabilité et Gestion",
      texte: "J’ai pu approfondir mes connaissances sur le bilan ...",
      image: "assets/nicolas.jpg"
    }
  ];

  const display = document.getElementById("temoignage-display");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let curIndex = 0;

  function renderTestimony(i) {
    if (!display) return;
    const t = testimonies[i];
    display.innerHTML = `
      <img src="${t.image}" alt="${t.nom}" class="temoignage-img">
      <p class="temoignage-text">${t.texte}</p>
      <div class="temoignage-footer">${t.nom}, ${t.role}</div>
    `;
  }

  if (display) {
    renderTestimony(curIndex);

    if (prevBtn) prevBtn.addEventListener("click", () => {
      curIndex = (curIndex - 1 + testimonies.length) % testimonies.length;
      renderTestimony(curIndex);
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
      curIndex = (curIndex + 1) % testimonies.length;
      renderTestimony(curIndex);
    });
  }

  // helper to add testimonials dynamically
  window.addTestimonial = function (nom, role, texte, imagePath) {
    testimonies.push({ nom, role, texte, image: imagePath });
  };

  /* ------------ FADE-IN SECTIONS ------------ */
  const faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && faders.length) {
    const obs = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          ob.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    faders.forEach(el => obs.observe(el));
  }
});
