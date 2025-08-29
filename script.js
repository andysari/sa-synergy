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
    { nom: "Tom", role: "Entrepreneur", texte: "Andy est exceptionnel...", image: "assets/tom.jpg" },
    { nom: "Marina", role: "Entrepreneur", texte: "Andy and I collaborated...", image: "assets/marina.jpg" },
    { nom: "Laura", role: "Responsable de magasin", texte: "Un professeur passionné...", image: "assets/laura.jpg" },
    { nom: "Alexandre", role: "Assistant comptable", texte: "Très pédagogue et sérieux...", image: "assets/alexandre.jpg" },
    { nom: "Mélanie", role: "Étudiante en Master Finance", texte: "Andy est très professionnel...", image: "assets/melanie.jpg" },
    { nom: "Leontin", role: "Étudiant BTS MCO", texte: "Je tiens à exprimer ma profonde...", image: "assets/leontin.jpg" },
    { nom: "Nicolas", role: "Étudiant BTS Comptabilité et Gestion", texte: "J’ai pu approfondir mes connaissances...", image: "assets/nicolas.jpg" }
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

  /* ------------ HERO ANIMATION 6 ETAPES ------------ */
  const heroSVG = document.getElementById("hero-svg");
  const heroMsg = document.querySelector(".hero-message");

  const steps = [
    { draw: "idea", text: "" },
    { draw: "question", text: "" },
    { draw: "contact", text: "" },
    { draw: "histogram", text: "" },
    { draw: "delta", text: "" },
    { draw: "", text: "Bienvenue sur SA Synergy" }
  ];

  let stepIndex = 0;

  function clearHero() {
    if(heroSVG) heroSVG.innerHTML = "";
    if(heroMsg) heroMsg.textContent = "";
  }

  function drawStep(index) {
    const step = steps[index];
    if(heroSVG && step.draw) {
      // dessin simplifié pour ex. : lignes ou formes SVG
      const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      el.setAttribute("cx", 50 + index*20);
      el.setAttribute("cy", 50);
      el.setAttribute("r", 15);
      el.setAttribute("stroke", "#00ff95");
      el.setAttribute("fill", "none");
      el.setAttribute("stroke-width", "2");
      heroSVG.appendChild(el);
    }
    if(heroMsg && step.text) {
      heroMsg.textContent = step.text;
    }
  }

  function nextStep() {
    drawStep(stepIndex);
    stepIndex++;
    if(stepIndex < steps.length) {
      setTimeout(nextStep, 1200); // délai entre étapes
    } else {
      // tout reste 5s puis reset
      setTimeout(() => {
        clearHero();
        stepIndex = 0;
        setTimeout(nextStep, 500);
      }, 5000);
    }
  }

  if(heroSVG) nextStep();

  /* optional: fade-in for sections with class .fade-in */
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
