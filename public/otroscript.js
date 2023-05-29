// Toggle del menú en dispositivos móviles y de escritorio

var toggleButtonDesktop = document.getElementById('toggle-button-desktop');
var desktopMenu = document.getElementById('desktop-menu');



toggleButtonDesktop.addEventListener('click', function() {
  desktopMenu.classList.toggle('active');
});