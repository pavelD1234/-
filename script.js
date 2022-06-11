console.log("hii");

const spider = document.querySelector('.spider');

function scarysound(){
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src ='img/monstr.mp3';
    audio.play();
}

spider.onclick = scarysound;


const header = document.querySelector(".siteHeader");


document.querySelector(".on").onchange = function(){
    if (this.checked){
        header.classList.add('siteHeader-bg');
        spider.classList.add('spiderAnimation');
    }
    else {
        header.classList.remove('siteHeader-bg');
        spider.classList.remove('spiderAnimation');
    }
}

