const popup = document.getElementById('popup');
const contactDesktopButton = document.getElementById('popupBtn');

const contactMobileButton = document.getElementById('popup-btn').addEventListener('click', function(){
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.opacity = "1";
});

contactDesktopButton.addEventListener('click', function(){
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.opacity = "1";
    contactDesktopButton.classList.add('navbar__subbutton--active');
});

const popupCross = document.getElementById('popup-cross').addEventListener('click', function(){
    popup.style.transform = "translate(-50%, -400%)";
    popup.style.opacity = "0";
    contactDesktopButton.classList.remove('navbar__subbutton--active');
});