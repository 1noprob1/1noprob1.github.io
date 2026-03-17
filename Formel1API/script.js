const form = document.querySelector("#form");
const random = document.querySelector("#random");

random.addEventListener("click", randomQoutes);

async function randomQoutes() {
    console.log("tilfeldig qoute");
    let response = await fetch("https://api.kanye.rest/");
    let data = await response.json();
    document.querySelector("#randomQoutes").appendChild(data);
    console.log(data);
}

randomQoutes();

// form.addEventListener("submit", yearQoutes);

// function yearQoutes(event) {
//     event.preventDefault();
//     const year = document.getElementById('year').value;
//     console.log(year);
// }