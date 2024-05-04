const popup = document.getElementById('popup');

const contactButton = document.getElementById('popup-btn').addEventListener('click', function(){
    popup.style.transform = "translate(-50%, -50%)";
});

const popupCross = document.getElementById('popup-cross').addEventListener('click', function(){
    popup.style.transform = "translate(-50%, -200%)";
});