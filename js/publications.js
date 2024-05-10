const switchToggle = document.getElementById('switch').addEventListener('change', function(){

    const spanToggle = document.querySelector('.news-articles__toggle');
    const articles = document.querySelector('.articles');
    const news = document.querySelector('.news');

    if(this.checked){
        spanToggle.innerText = "articles";
        articles.style.display = "grid";
        news.style.display = "none";
    } else {
        spanToggle.innerText = "news";
        articles.style.display = "none";
        news.style.display = "grid";
    }
});