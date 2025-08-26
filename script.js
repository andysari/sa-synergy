/* =====================================================
   script.js
   - gestion menu burger (index + apropos)
   - slider témoignages 1 à 1 (A propos)
   - fonction addTestimonial pour ajouter dynamiquement
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- NAV BURGER ---------- */
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      burger.classList.toggle("open");
    });
  }

  /* ---------- HOVER WARNINGS (contact) ---------- */
  // Les .hover-warning s'affichent au hover des champs (CSS gère l'affichage)
  // Aucun JS nécessaire sauf si tu veux repositionner/dynamiser.

  /* ---------- SLIDER TÉMOIGNAGES (A PROPOS) ---------- */
  const testimonies = [
    {
      nom: "Tom",
      role: "Entrepreneur",
      texte: "Andy est exceptionnel. Sa passion et son dévouement sont inspirants. Il comprend nos défis et offre des conseils pertinents. Il écoute attentivement, pose des questions perspicaces et crée un environnement sûr. Grâce à lui, j'ai acquis une meilleure connaissance de mon potentiel et atteint mes objectifs. Sa connexion authentique et son énergie positive sont motivantes. Je le recommande vivement.",
      image: "assets/tom.jpg"
    },
    {
      nom: "Marina",
      role: "Entrepreneur",
      texte: "Andy and I collaborated in the development of my business in Athens. He really helped me and I always consider his advices. 8 years later I still ask him for his opinion :) Much recommended professional and a very positive human being.",
      image: "assets/marina.jpg"
    },
    {
      nom: "Laura",
      role: "Responsable de magasin",
      texte: "Un professeur passionné, avec un bagage de connaissances incroyables dans plusieurs domaines. Nous avons pu voir notamment les principales formes d'organisation qui existent ainsi que les stratégies, les styles de management... Il sait comment nous captiver et rendre les cours très intéressants et interactifs avec beaucoup d'exemples concrets pour mieux comprendre.",
      image: "assets/laura.jpg"
    },
    {
      nom: "Alexandre",
      role: "Assistant comptable",
      texte: "Très pédagogue et sérieux. C'est un professeur très polyvalent qui s'intéresse à énormément de domaines tout en en étant passionné. Très curieux et se posant beaucoup de question, il a un sens critique affûté. Pour finir, il possède beaucoup de compétences et de connaissance à transmettre.",
      image: "assets/alexandre.jpg"
    },
    {
      nom: "Mélanie",
      role: "Étudiante en Master Finance",
      texte: "Andy est très professionnel et réactif. Il a su m’accompagner tout au long de mon parcours scolaire post bac+4. Je le recommande également pour son implication dans les projets de secteur financier.",
      image: "assets/melanie.jpg"
    },
    {
      nom: "Léontin",
      role: "Étudiant BTS MCO",
      texte: "Je tiens à exprimer ma profonde gratitude envers mon formateur pour son soutien inestimable dans la matière « gestion opérationnelle ». Grâce à ses enseignements attentifs et à sa disponibilité exemplaire, j'ai pu valider mon BTS avec une note exceptionnelle de 18 en gestion opérationnelle.",
      image: "assets/leontin.jpg"
    },
    {
      nom: "Nicolas",
      role: "Étudiant BTS Comptabilité et Gestion",
      texte: "J’ai pu approfondir mes connaissances sur le bilan et le compte de résultat pour mon diplôme en comptabilité, pour ça je recommande vivement Andy.",
      image: "assets/nicolas.jpg"
    }
  ];

  // Only run testimonials logic if on the apropos page (temoignage container exists)
  const display = document.getElementById("temoignage-display");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let curIndex = 0;
  function renderTestimony(i) {
    if (!display) return;
    const t = testimonies[i];
    display.innerHTML = `
      <img src="${t.image}" alt="${t.nom}" class="temoignage-img">
      <h3>${t.nom}</h3>
      <h4>${t.role}</h4>
      <p>${t.texte}</p>
    `;
  }

  if (display) {
    // render first
    renderTestimony(curIndex);
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        curIndex = (curIndex - 1 + testimonies.length) % testimonies.length;
        renderTestimony(curIndex);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        curIndex = (curIndex + 1) % testimonies.length;
        renderTestimony(curIndex);
      });
    }
  }

  // helper to add new testimonial dynamically
  window.addTestimonial = function (nom, role, texte, imagePath) {
    testimonies.push({ nom, role, texte, image: imagePath });
  };

  /* ---------- FADE-IN (optionnel) ---------- */
  const faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && faders.length) {
    const obs = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          ob.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    faders.forEach(el => obs.observe(el));
  }
});
