const menuNavLinks=document.querySelectorAll(".main-nav__link");let pathName=window.location.pathname;menuNavLinks.forEach((a=>{pathName.includes(a.getAttribute("href"))&&a.classList.add("main-nav__link--active")}));