const upLink = document.querySelector('.page__up');
const nav = document.querySelector('.main-nav');
const navHeight = nav.offsetHeight;
let navCoords = nav.getBoundingClientRect();

const hideUpLink = () => {
  if (window.scrollY > navCoords.bottom) {
    upLink.style.display = ('block');
  } else {
    upLink.style.display = ('none');
  }
}

window.addEventListener('scroll', hideUpLink);


export { upLink };
