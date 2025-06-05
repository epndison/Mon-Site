document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
    // Force l'affichage si caché par défaut
    if (navLinks.classList.contains("mobile-menu")) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  });
});
