const upLink=document.querySelector(".page__up"),nav=document.querySelector(".main-nav"),navHeight=nav.offsetHeight;let navCoords=nav.getBoundingClientRect();const hideUpLink=()=>{window.scrollY>navCoords.bottom?upLink.style.display="block":upLink.style.display="none"};window.addEventListener("scroll",hideUpLink);export{upLink};