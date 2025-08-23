// Simple test pour vérifier le fonctionnement du JS
console.log("JavaScript fonctionne !");

// Exemple : scroll vers section formations quand on clique sur le bouton
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const formations = document.querySelector("#formations");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        formations.scrollIntoView({ behavior: "smooth" });
    });
});

