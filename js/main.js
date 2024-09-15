document.addEventListener('DOMContentLoaded', () => {
  const $hamburger = document.querySelector('.hamburger__figure');
  const $hamburgerImg = document.querySelector('.hamburger__img');
  const $nav = document.querySelector('.nav');

  if ($hamburger) {
    $hamburger.addEventListener("click", () => {
      $nav.classList.toggle('nav--active');
      if ($nav.classList.contains('nav--active')) {
        $hamburgerImg.src = './images/icon-close.svg';
      } else {
        $hamburgerImg.src = './images/icon-hamburger.svg';
      }
    });
  }
});