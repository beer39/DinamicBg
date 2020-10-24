const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const hero = document.getElementById("hero");

const backgroundImg = new Array(
    "./img/bg1.png",
    "./img/bg2.png",
    "./img/bg3.png",
    "./img/bg4.png",
    "./img/bg5.png",
);

let i = 0;
next.onclick = function() {
    if(i < 4) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function() {
    if(i > 0) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}