const skjema = document.getElementById('skjema');

let rabattkoder = ["hemmeligkode", "kodehemmelig"];

skjema.addEventListener('submit', function(event) {
    event.preventDefault();

    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const epost = document.getElementById('epost').value;
    const passord = document.getElementById('passord').value;
    const rabattkode = document.getElementById('rabattkode').value;

    alert('Takk for din registrering, ' + fornavn + '!');
    console.log(fornavn);

    for (let i = 0; i < rabattkoder.length; i++) {
        if (rabattkode == rabattkoder[i]) {
        alert('Du har oppgitt en rabattkode og får en rabattert pris');
        
    }};

    console.log(brukernavn);
    console.log(passord);
})