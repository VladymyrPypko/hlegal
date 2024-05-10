const switchToggle = document.getElementById('switch').addEventListener('change', function(){

    const spanToggle = document.querySelector('.news-articles__toggle');

    if(this.checked){
        spanToggle.innerText = "articles";
    } else {
        spanToggle.innerText = "news";
    }
});