// advantages
const advantages = document.querySelector('.advantages');
console.log(advantages);

const title = advantages.querySelector('.advantages__title');
console.log(title);

const paragraph = advantages.querySelector('.advantages__info');
console.log(paragraph);

document.querySelector('.advantages__buttons').addEventListener('click', (e) => {

    if (e.target.className === '.advantages__button--active') return;

    const buttonActive = document.querySelector('.advantages__button--active');
    console.log(e.target.id);

    switch(e.target.id){
        case 'card-1':
            title.innerText = "We turn the idea of legal services";
            paragraph.innerText = "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.";
            buttonActive.classList.remove('advantages__button--active');
            e.target.classList.add('advantages__button--active');
        break;
        case 'card-2':
            title.innerText = "We provide only the services you need";
            paragraph.innerText = "Think of the best customer experience you ever had as a client. If you really can recall one, you’re in the lucky few. More often, customer service comes across as something routine and not at all memorable. You have a question, you get an answer and that’s it.";
            buttonActive.classList.remove('advantages__button--active');
            e.target.classList.add('advantages__button--active');
        break;
        case 'card-3':
            title.innerText = "We're always one step ahead";
            paragraph.innerText = "We organise in-company events with leading future of work experts, helping companies stay ahead of the curve. Select from a range of options, including expert lectures and immersive virtual events, all centred around cutting-edge topics such as AI, platforms, and reskilling.";
            buttonActive.classList.remove('advantages__button--active');
            e.target.classList.add('advantages__button--active');
        break;
        case 'card-4':
            title.innerText = "Over 7 years in this type of business";
            paragraph.innerText = "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.";
            buttonActive.classList.remove('advantages__button--active');
            e.target.classList.add('advantages__button--active');
        break;
        default:
        break;
    }
});

// advantages show-hide button
const advantagesShowHide = document.getElementById('btnServices');

advantagesShowHide.addEventListener('click', function(){
    advantages.classList.toggle('advantages--hidden');
    advantagesShowHide.classList.toggle('hero__button--active');
})
console.log(advantages);