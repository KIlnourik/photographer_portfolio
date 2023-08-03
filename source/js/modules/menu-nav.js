const menuNavLinks = document.querySelectorAll('.main-nav__link');

let pathName = window.location.pathname;

menuNavLinks.forEach((element) => {
    if (pathName.includes(element.getAttribute('href'))) {
      element.classList.add('main-nav__link--active');
    };
});
