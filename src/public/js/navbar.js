document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) {
        // Ocultar con transición
        mobileMenu.classList.remove("open");
        mobileMenu.classList.add("closing");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("closing");
        }, 300); // Duración igual al CSS
      } else {
        // Mostrar con transición
        mobileMenu.classList.remove("hidden");
        setTimeout(() => mobileMenu.classList.add("open"), 10); // Delay para activar transición
      }
    });
  }
});
