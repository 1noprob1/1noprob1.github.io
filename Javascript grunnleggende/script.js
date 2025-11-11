// //variabler

// let antalliv = 100;

// const PI = Math.PI;

// let navn = "Nicolas";
// let minalder = 18;

// let arrayBilder = ["bilde1.jpg", "bilde2.jpg"];

// //Skrive ut

// console.log("Mitt navn er " + navn + "!");
// console.log(`Mitt navn er ${navn}! Jeg er ${minalder} år gammel`);

// console.table(arrayBilder);

// console.warn(PI);

// let konstantEn = 5
// let konstantTo = 10
// let produkt = 50

// console.log(`${konstantEn} ganger ${konstantTo} er lik ${produkt}`);

// // let fornavn = prompt("Hva er fornavnet dtt?");
// // let etternavn = prompt("Hva er etternavnet ditt?")
// // let domene = prompt("Hvilke domene bruker du? (eksempel: gmail.com)")
// // let email = (`${fornavn}.${etternavn}@${domene}`)

// // console.log(email)

// let gate = 'Kongens gate'
// let husnr = 432
// let oppgang = "b"
// let adresse = gate + " " + husnr + " " + oppgang
// console.log(adresse);

// console.log(`Gaten er ${gate}, husnummeret er ${husnr}, oppgang ${oppgang}`);
// console.log(`Adressen er ${adresse}`);

// // let tallEnstr = prompt("Gi et tall");
// // let tallTostr = prompt("Gi et tall til");
// // let tallEn = Number(tallEnstr)
// // let tallTo = Number(tallTostr)

// // let sum = tallEn + tallTo
// // console.log(sum)

// let binstr = prompt("skriv inn et binert tall").trim().replace(" ","");
// let bin = Number(binstr);
// let tall = parseInt(bin,2);
// if (isNaN(tall)) {
//     console.log("Ikke gyldig binert tall");
// } else {
//     console.log(tall);
// }

// let hexstr = prompt("Skriv et hexadesciamlt tall").trim().replace(" ","");
// let svar = parseInt(hexstr, 16);

// if (isNaN(svar)) {
//     console.log("Ikke gyldig hexadesimalt tall");
// } else {
//     console.log(svar);
// }

// let sted_1 = prompt("Skriv et stedsnavn");
// let sted_2 = prompt("Skriv et til stedsnavn");

// let sted_1_ant =  sted_1.length;
// let sted_2_ant = sted_2.length;
// let sted_differanse = 0;

// if (sted_1_ant > sted_2_ant) {
//     sted_differanse = sted_1_ant - sted_2_ant;
// } else {
//     sted_differanse = sted_2_ant - sted_1_ant;
// }

// document.getElementById("utskrift").innerText = `Det første stedet er ${sted_1} og det andre stedet er ${sted_2}. ${sted_1} har ${sted_1_ant} tegn, og ${sted_2} har ${sted_2_ant} tegn. Differansen mellom de er ${sted_differanse}`
// console.log(sted_differanse)
// console.log(sted_1)
// console.log(sted_1_ant)
// console.log(sted_2)
// console.log(sted_2_ant)

// let numbers = Array.from({ length: 200 }, () => Math.floor(Math.random() * 10) + 1);
// console.log(numbers);

// let alder = prompt("HVOR GAMMEL ER DU??")
// if (alder < 18) {
//     document.body.style.filter = "blur(20px)";
// }

let bildenr = 0
let bildegaleri = ["Hund1.webp", "Hund2.gif", "hund3.jpg", "hund4.jpg", "hund5.jpg", "hund6.avif"]
let bildetekst = ["mistenksom hund", "slem hund", "Diva hund", "comfy hund", "baddie", "happy hund"]

document.querySelector("#knapp").addEventListener("click",byttbilde);

function byttbilde() {
    if (bildenr == 5) {
        bildenr = 0;
    } else {
        bildenr += 1;
    }
    
    document.getElementById("hovedbilde").src = "Bilder/" + bildegaleri[bildenr];
    document.getElementById("bildeetter").src = "Bilder/" + bildegaleri[bildenr - 1];
    document.getElementById("bildefør").src = "Bilder/" + bildegaleri[bildenr + 1]; 
    document.getElementById("undertekst").innerText = bildetekst[bildenr];
}