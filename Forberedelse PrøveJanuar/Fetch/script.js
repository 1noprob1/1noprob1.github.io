async function hentData() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();

    let vits = document.createElement("p");
    vits.innerText = data.value;
    document.querySelector("#vits").appendChild(vits);
}

hentData();