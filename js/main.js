// navbar
const navbarList = document.querySelectorAll('.navbar__container')[0];
console.log(navbarList);

const burger = document.getElementById('navbarBurger');

const navbarCross = document.getElementById('navbarCross');

burger.addEventListener('click', function(){
    burger.classList.toggle('navbar__burger--active');
    navbarList.classList.toggle('navbar__container--active');
});

navbarCross.addEventListener('click', function(){
    burger.classList.remove('navbar__burger--active');
    navbarList.classList.remove('navbar__container--active');
});