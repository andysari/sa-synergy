const burger = document.querySelector(".burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.setAttribute(
    "aria-expanded",
    burger.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
