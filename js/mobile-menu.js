(() => {
  const mobileMenu = document.getElementById("mobile-menu-container");
  const openMenuBtn = document.getElementById("open-menu");
  const closeMenuBtn = document.getElementById("close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;

    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("mobile-menu-container--is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 481px)").addEventListener("change", (e) => {
    if (!e.matches) return;

    mobileMenu.classList.remove("mobile-menu-container--is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
