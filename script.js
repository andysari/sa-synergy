/* =====================================================
   script.js
   - menu burger
   - hero canvas (poussière d'étoiles verte / galaxie)
   - slider témoignages 1 à 1 (A propos)
   - addTestimonial helper
   ===================================================== */

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

  /* ------------ HERO CANVAS (particles) ------------ */
  (function heroParticles() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    const particles = [];
    const PARTICLE_COUNT = Math.round((width * height) / 60000); // density

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      // adjust number of particles
      while (particles.length > Math.max(6, Math.round((width * height) / 60000))) particles.pop();
      while (particles.length < Math.max(6, Math.round((width * height) / 60000))) particles.push(new Particle());
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = rand(0, width);
        this.y = rand(0, height);
        this.vx = rand(-0.05, 0.05);
        this.vy = rand(-0.02, 0.02);
        this.size = rand(0.6, 2.6);
        this.alpha = rand(0.05, 0.6);
        this.phase = rand(0, Math.PI * 2);
        this.twinkleSpeed = rand(0.01, 0.05);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.phase += this.twinkleSpeed;
        this.alpha = 0.25 + 0.35 * Math.abs(Math.sin(this.phase));
        // wrap
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;
      }
      draw() {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 8);
        g.addColorStop(0, `rgba(0,255,149,${this.alpha})`);
        g.addColorStop(0.35, `rgba(0,255,149,${this.alpha * 0.35})`);
        g.addColorStop(1, 'rgba(0,255,149,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < Math.max(6, Math.round((width * height) / 60000)); i++) particles.push(new Particle());

    let raf;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      // subtle background vignette to give depth
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, 'rgba(0,0,0,0)');
      bg.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // draw particles
      for (let p of particles) {
        p.update();
        p.draw();
      }
      raf = requestAnimationFrame(animate);
    }

    // responsiveness
    window.addEventListener('resize', () => {
      resize();
    });

    resize();
    animate();
  })();

  /* ------------ TESTIMONIALS SLIDER (apropos) ------------ */
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
      texte: "Un professeur passionné, avec un bagage de connaissances incroyables dans plusieurs domaines. Nous avons pu voir notamment les principales formes d'organisation qui existent ainsi que les stratégies, les styles de management...Il sait comment nous captiver et rendre les cours très intéressants et interactifs avec beaucoup d'exemples concrets pour mieux comprendre.",
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
      texte: "J’ai pu approfondir mes connaissances sur le bilan et le compte de résultat pour mon diplôme. Je recommande vivement Andy.",
      image: "assets/nicolas.jpg"
    }
  ];

  // only run if #temoignage-display exists (on apropos page)
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

  // helper to add testimonials later
  window.addTestimonial = function (nom, role, texte, imagePath) {
    testimonies.push({ nom, role, texte, image: imagePath });
  };

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
