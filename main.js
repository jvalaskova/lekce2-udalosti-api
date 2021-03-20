// tady je místo pro náš program

let nadpis = document.querySelector("p");



function priNajeti(nadpis) {
    nadpis.target.style.fontWeight="bold";
}
function priOdjeti(nadpis) {
    nadpis.target.style.fontWeight="normal";
}



function priKliknuti () {
    nadpis.classList.toggle("cervenyLev");
}

function takyPriKliknuti () {
nadpis.style.fontSize = "17px";
}



function prehraj(elementAudio) {
    let prehrajAudio = document.querySelector(elementAudio);
    prehrajAudio.play();
}

function pauza(elementAudio) {
    let pauzaAudio = document.querySelector(elementAudio);
    pauzaAudio.pause();
}

function hlasitostNula(elementAudio) {
    let hlasitostNulaAudio = document.querySelector(elementAudio);
    hlasitostNulaAudio.volume = 0;
}

function hlasitostNaPul(elementAudio) {
    let hlasitostNaPulAudio = document.querySelector(elementAudio);
    hlasitostNaPulAudio.volume = 0.5;
}

function hlasitostRandal(elementAudio) {
    let hlasitostRandalAudio = document.querySelector(elementAudio);
    hlasitostRandalAudio.volume = 1;
}

function naZacatek(elementAudio) {
    let naZacatekAudio = document.querySelector(elementAudio);
    naZacatekAudio.currentTime = 0;
}