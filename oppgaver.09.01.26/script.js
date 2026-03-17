let navnListe = ["jarle", "siggurd", "lise", "håkon", "fredrik", "gunnar", "sivert", "sander", "mia", "alfred"]
let liste1 = Math.floor(Math.random() * 10);
let liste2 = Math.floor(Math.random() * 10);
navnnr()

function navnnr(){
    if (liste2 == liste1) {
        liste2 = Math.floor(Math.random() * navnListe.length)
        navnnr()
    } 
}

let navn1 = navnListe[liste1]
let navn2 = navnListe[liste2]
console.log(liste1)
console.log(navn1)

console.log(liste2)
console.log(navn2)

// Cuck Norries vitser

async function hentData(){
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    console.log("Alle data:");
    console.log(data);
    // console.log("\nBare vitsen:");
    // console.log(data.value)
}

hentData();