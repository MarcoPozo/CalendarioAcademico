document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar al hacer clic en un enlace dentro del menú
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("open") && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    function openMenu() {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.add("open");
      }, 10);
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("closing");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("closing");
      }, 300);
    }
  }
});
