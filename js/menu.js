(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open__menu--btn"),
    closeMenuBtn: document.querySelector(".close__menu--btn"),
    menu: document.querySelector(".mob__menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
