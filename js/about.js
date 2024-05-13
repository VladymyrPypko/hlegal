// slider--mobile
let i = 1;
setInterval(function(){
    document.getElementById('card' + i).checked = true;
    i++;
    if(i > 6){
        i = 1;
    }
}, 5000);

// slider--desktop
let j = 1;
setInterval(function(){
    document.getElementById('cardBlock' + j).checked = true;
    j++;
    if(j > 3){
        j = 1;
    }
}, 5000);
