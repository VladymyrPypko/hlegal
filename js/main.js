// navbar
const navbarList = document.querySelectorAll('.navbar__container')[0];
console.log(navbarList);

const burger = document.getElementById('navbarBurger');

const navbarCross = document.getElementById('navbarCross');

burger.addEventListener('click', function(){
    burger.classList.add('navbar__burger--active');
    navbarList.style.transform = "translateY(0)";
});

navbarCross.addEventListener('click', function(){
    burger.classList.remove('navbar__burger--active');
    navbarList.style.transform = "translateY(100vh)";
});