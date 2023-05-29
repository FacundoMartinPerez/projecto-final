document.addEventListener('DOMContentLoaded', function () {
  const hamburguerButton = document.querySelector('.nav__hamburguer');
  const closeButton = document.querySelector('.nav__close');
  const navLinks = document.querySelector('.nav__links');

  hamburguerButton.addEventListener('click', function () {
      navLinks.style.display = 'flex';
  });

  closeButton.addEventListener('click', function () {
      navLinks.style.display = 'none';
  });
});
