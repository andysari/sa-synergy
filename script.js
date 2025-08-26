document.addEventListener("DOMContentLoaded", () => {
  // Burger menu
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // Fade-in au scroll
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Hover Hero lueur
  const heroContent = document.querySelector(".hero-content");
  heroContent.addEventListener("mouseenter", () => {
    heroContent.querySelector(".slogan").style.textShadow =
      "0 0 50px rgba(0,255,149,1)";
  });
  heroContent.addEventListener("mouseleave", () => {
    heroContent.querySelector(".slogan").style.textShadow =
      "0 0 20px rgba(0,255,149,0.7)";
  });
});
