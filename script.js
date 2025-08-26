/* -----------------------------
   Menu burger mobile
----------------------------- */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* -----------------------------
   Slider témoignages (apropos.html)
----------------------------- */
let currentIndex = 0;

// Récupère tous les témoignages
const testimonials = document.querySelectorAll('.testimonial-card');

// Fonction pour afficher un seul témoignage
function showTestimonial(index) {
  testimonials.forEach((test, i) => {
    test.style.display = (i === index) ? 'flex' : 'none';
  });
}

// Initialisation
if(testimonials.length > 0){
  showTestimonial(currentIndex);

  // Flèche droite
  const nextBtn = document.querySelector('.testimonial-next');
  const prevBtn = document.querySelector('.testimonial-prev');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });
}

/* -----------------------------
   Fonction pour ajouter facilement de nouveaux témoignages
----------------------------- */
function addTestimonial(nom, role, texte, imagePath) {
  const container = document.querySelector('.testimonial-container');
  const card = document.createElement('div');
  card.classList.add('testimonial-card');
  card.style.display = 'none'; // par défaut caché

  card.innerHTML = `
    <img src="${imagePath}" alt="Photo ${nom}" class="testimonial-img">
    <div class="testimonial-text">
      <p>"${texte}"</p>
      <span>- ${nom}, ${role}</span>
    </div>
  `;

  container.appendChild(card);
}
