/* Smooth scroll */
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Machine à écrire Matrix */
const messages = [
  "Bienvenue sur SA Synergy.\n",
  "Formations professionnelles de qualité.\n",
  "Management, économie, finance et plus.\n",
  "Contactons-nous rapidement."
];
const matrixDiv = document.querySelector(".matrix-text");
let msgIndex = 0;
let charIndex = 0;

function typeMessage() {
  if (msgIndex < messages.length) {
    if (charIndex < messages[msgIndex].length) {
      matrixDiv.textContent += messages[msgIndex][charIndex];
      charIndex++;
      setTimeout(typeMessage, 60);
    } else {
      msgIndex++;
      charIndex = 0;
      setTimeout(typeMessage, 800);
    }
  } else {
    setTimeout(resetMessages, 10000);
  }
}

function resetMessages() {
  matrixDiv.textContent = "";
  msgIndex = 0;
  charIndex = 0;
  typeMessage();
}

typeMessage();

/* Fond Matrix pluie */
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
