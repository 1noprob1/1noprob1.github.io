const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault(); // SPA = "Single Page Application"

    const navn = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const password = document.getElementById('password').value;
    const checkbox = document.getElementById('checkbox').value;
    const kjonn = document.querySelector('input[name="kjonn"]:checked').value;

    alert('Hei, ' + navn + '! Takk for at du sendte inn skjemaet.');
    
    console.log("navn:" + navn)
    console.log("alder:" + age)
    console.log("epost" + email)
    console.log("dato" + date)
    console.log("tid:" + time)
    console.log("passord" + password)
    console.log("checkbox" + checkbox)
    console.log("kjonn" + kjonn)
});
