// ------------------------------
// Animation fade-in au scroll
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Burger menu
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
});

// Hover Hero
const heroContent = document.querySelector(".hero-content");
if (heroContent) {
  heroContent.addEventListener("mouseenter", () => {
    heroContent.querySelector(".slogan").style.textShadow =
      "0 0 50px rgba(0,255,149,1)";
  });

  heroContent.addEventListener("mouseleave", () => {
    heroContent.querySelector(".slogan").style.textShadow =
      "0 0 20px rgba(0,255,149,0.7)";
  });
}

// Hover formations
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 35px rgba(0,255,149,0.25)";
    card.style.transform = "translateY(-6px) scale(1.03)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 20px rgba(0,255,149,0.05)";
    card.style.transform = "translateY(0) scale(1)";
  });
});
