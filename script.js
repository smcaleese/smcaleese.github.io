window.onload = function() {
    const hamburgerMenu = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');

    hamburgerMenu.onclick = function() {
        navbarMenu.classList.toggle('is-active');
    };
};
