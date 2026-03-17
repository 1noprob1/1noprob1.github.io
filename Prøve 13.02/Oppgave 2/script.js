async function hentData() {
    let response = await fetch('https://www.anapioficeandfire.com/api/books');
    let data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let bok = document.createElement("div");
        document.querySelector("#bøker").appendChild(bok);
        bok.id = "bok" + i;
        bok.className ="bok";

        let boknavn = document.createElement("h1");
        boknavn.innerText = data[i].name;
        document.querySelector("#bok" + i).appendChild(boknavn);

        let utgivelsesdato = document.createElement("p");
        utgivelsesdato.innerText = data[i].released;
        document.querySelector("#bok"+ i).appendChild(utgivelsesdato);

        let sideantall = document.createElement("p");
        sideantall.innerText = data[i].numberOfPages;
        document.querySelector("#bok" + i).appendChild(sideantall);

    }
}

hentData();