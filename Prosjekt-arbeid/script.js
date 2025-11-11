let fart = 0;
let akselerasjon = 0.97

document.querySelector("#hjulet").addEventListener('click', fartøking);

function fartøking() {
    fart ++
    console.log(fart)
    document.getElementById("farten").innerText = Math.round(fart) + " km/h";
}

function akselerering() {
    fart = fart * akselerasjon
    console.log("deakselerer" + fart)
    document.getElementById("farten").innerText = Math.round(fart) + " km/h";
};

setInterval(akselerering, 1000);
