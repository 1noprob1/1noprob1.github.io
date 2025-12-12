let fart = 0.000001;
let girnr = 0;
let turbo = 0;
let akselerasjon = 0.9;
let radius = 0.5;

let grønnKule = "Bilder/grønnKule.png"
let rødKule = "Bilder/rødKule.png"
let gullKule = "Bilder/gullKule.png"

let level = 0
let levler = [grønnKule, rødKule, gullKule];
let levelFart = 120;

function nytthjul() {
    if (fart >= levelFart) {
        level++  
        levelFart = levelFart * 1.5
        document.querySelector("#hjulbilde").src = levler[level];
    } 
}

setInterval(nytthjul, 1000);

// Bildet av hjulet
document.querySelector("#hjulbilde").src = levler[level];

// Øking av fart ved click
document.querySelector("#hjulet").addEventListener('click', fartøking);

function fartøking() {
        fart = fart + 1 + girnr
        console.log(fart);
        document.getElementById("farten").innerText = Math.round(fart) + " km/h";
    }

function akselerering() {
    fart = fart * akselerasjon
    document.getElementById("farten").innerText = Math.round(fart) + " km/h";
};

setInterval(akselerering, 1000);

document.addEventListener("keypress", tastatur);

function tastatur(evt) {
    console.log(evt.key)
    if (evt.key === '1') {
        crankstart()
    }
    if (evt.key === '2'){
        gir()
    }
    if (evt.key === '3'){
        motorstart()
    }
    if (evt.key === '4'){
        turbocharger()
    }
    if (evt.key === ' '){
        fartøking()
    }
}

// Butikk crank
let prisCrank = 15;
let levelCrank = 0
document.querySelector("#crank").addEventListener('click',crankstart);

function crankstart() {
    if (fart >= prisCrank) {
        setInterval(crank, 800)
        fart = fart - prisCrank
        prisCrank = prisCrank * 1.5
        levelCrank = levelCrank + 1
        document.getElementById("prisCrank").innerText = Math.round(prisCrank) + " km/h"
        document.getElementById("levelCrank").innerText = "lvl " + levelCrank
    } else {
        alert("Du har ikke råd!")
    }
    
}

function crank() {
    fart = fart + 2
}

// Butikk gir
let prisGir = 20
let levelGir = 0
document.querySelector("#gir").addEventListener('click',gir)

function gir() {
    if (fart >= prisGir) {
        girnr ++
        fart = fart - prisGir
        prisGir = prisGir * 2
        levelGir = levelGir + 1
        document.getElementById("prisGir").innerText = Math.round(prisGir) + " km/h"
        document.getElementById("levelGir").innerText = "lvl " + levelGir
    } else {
        alert("Du har ikke råd!")

    }
    
}

//butikk motor
let prisMotor = 5
let motorLevel = 500
let levelMotor = 0
document.querySelector('#motor').addEventListener('click',motorstart)

function motorstart() {
    if (fart >= prisMotor) {
        setInterval(motor, motorLevel)
        motorLevel = motorLevel * 0.8
        fart = fart - prisMotor
        prisMotor = prisMotor * 1.5
        levelMotor = levelMotor + 1
        document.getElementById("prisMotor").innerText = Math.round(prisMotor) + " km/h"
        document.getElementById("levelMotor").innerText = "lvl " + levelMotor
    } else {
        alert("Du har ikke råd!")
    }
}

function motor() {
    fart = fart + (turbo + 1)
}

// Butikk Turbocharger
let prisTurbocharger = 2000
let levelTurbocharger = 0
document.querySelector('#turbocharger').addEventListener('click',turbocharger)

function turbocharger() {
    if (fart >= prisTurbocharger) {
        turbo = turbo + 0.1
        fart = fart - prisTurbocharger
        prisTurbocharger = prisTurbocharger * 1.5
        levelTurbocharger = levelTurbocharger + 1
        document.getElementById("prisTurbocharger").innerText = Math.round(prisTurbocharger) + " km/h"
        document.getElementById("levelTurbocharger").innerText = "lvl " + levelTurbocharger
    } else {
        alert("Du har ikke råd!")
    }
    
}


// Smooth fartsvisning
// let vistFart = 0;
// const smoothing = 0.12;

// function lerp(a, b, t) {
//     return a + (b - a) * t;
// }

// function updateSpinSpeed(speed) {
//     const minDur = 0.06; // raskeste (s)
//     const maxDur = 5;    // tregeste (s)
//     const maxFart = 60;
//     const norm = Math.min(speed, maxFart) / maxFart;
//     const duration = maxDur - norm * (maxDur - minDur);
//     document.getElementById('hjulbilde').style.animationDuration = (2 * Math.PI * radius) / (fart / 3.6) + "s";
// }

// function smoothLoop() {
//     // interpoler vistFart mot faktiske fart
//     vistFart = lerp(vistFart, fart, smoothing);
//     const el = document.getElementById("farten");
//     if (el) el.innerText = Math.round(vistFart) + " km/h";
//     updateSpinSpeed(vistFart);
//     requestAnimationFrame(smoothLoop);
// }

// // start smoothing loop
// requestAnimationFrame(smoothLoop);

// STATESTIKK

let antKlikk = 0
document.querySelector("#hjulet").addEventListener('click', antklikk);

function antklikk() {
    console.log("klikk + 1")
    antKlikk = antKlikk + 1
    document.getElementById("antKlikk").innerText = "Antall klikk: " + antKlikk;
}

let maxFart = 0
setInterval(maxfart, 100);

function maxfart() {
    if (fart > maxFart) {
        maxFart = fart
        document.getElementById("maxFart").innerText = "Høyeste fart: " + Math.round(maxFart) + " km/h";
    }
}

