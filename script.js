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
    { nom:"Tom", role:"Entrepreneur", texte:"Andy est exceptionnel. Sa passion et son dévouement sont inspirants. Il comprend nos défis et offre des conseils pertinents. Il écoute attentivement, pose des questions perspicaces et crée un environnement sûr. Grâce à lui, j'ai acquis une meilleure connaissance de mon potentiel et atteint mes objectifs. Sa connexion authentique et son énergie positive sont motivantes. Je le recommande vivement à tous ceux qui cherchent à toujours s’améliorer et qui souhaitent avoir des conseils dans beaucoup de domaines.", image:"assets/tom.jpg" },
    { nom:"Marina", role:"Entrepreneur", texte:"Andy and I collaborated in the development of my business in Athens. He really helped me and I always consider his advices. 8 years later I still ask him for his opinion :) Much recommended professional and a very positive human being.", image:"assets/marina.jpg" },
    { nom:"Laura", role:"Responsable de magasin", texte:"Un professeur passionné, avec un bagage de connaissances incroyables dans plusieurs domaines. Nous avons pu voir notamment les principales formes d'organisation qui existent ainsi que les stratégies, les styles de management... Il sait comment nous captiver et rendre les cours très intéressants et interactifs avec beaucoup d'exemples concrets pour mieux comprendre.", image:"assets/laura.jpg" },
    { nom:"Alexandre", role:"Assistant comptable", texte:"Très pédagogue et sérieux. C'est un professeur très polyvalent qui s'intéresse à énormément de domaines tout en en étant passionné. Très curieux et se posant beaucoup de questions, il a un sens critique affûté. Pour finir, il possède beaucoup de compétences et de connaissances à transmettre, cela est symbolisé par son nombre de certifications et de formations passées.", image:"assets/alexandre.jpg" },
    { nom:"Mélanie", role:"Étudiante en Master Finance", texte:"Andy est très professionnel et réactif. Il a su m’accompagner tout au long de mon parcours scolaire post bac+4. Je le recommande également pour son implication dans les projets de secteur financier.", image:"assets/melanie.jpg" },
    { nom:"Léontin", role:"Étudiant BTS MCO", texte:"Je tiens à exprimer ma profonde gratitude envers mon formateur pour son soutien inestimable dans la matière « gestion opérationnelle ». Grâce à ses enseignements attentifs et à sa disponibilité exemplaire, j'ai pu valider mon BTS avec une note exceptionnelle de 18 en gestion opérationnelle. Son approche sympathique et sa capacité à expliquer clairement les concepts ont grandement contribué à ma réussite. Je le recommande vivement à quiconque cherche à progresser dans ce domaine, ainsi que les nombreux domaines qu’il couvre…", image:"assets/leontin.jpg" },
    { nom:"Nicolas", role:"Étudiant BTS Comptabilité et Gestion", texte:"J’ai pu approfondir mes connaissances sur le bilan et le compte de résultat pour mon diplôme en comptabilité, pour ça je recommande vivement Andy.", image:"assets/nicolas.jpg" }
  ];

  const display = document.getElementById("temoignage-display");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let curIndex = 0;

  function renderTestimony(i) {
    if (!display) return;
    const t = testimonies[i];
    display.innerHTML = `
      <div class="temoignage-card">
        <img src="${t.image}" alt="${t.nom}" class="temoignage-img">
        <p class="temoignage-text">${t.texte}</p>
        <div class="temoignage-footer"><strong>${t.nom}</strong>, ${t.role}</div>
      </div>
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

  /* ------------ FADE-IN ------------ */
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
