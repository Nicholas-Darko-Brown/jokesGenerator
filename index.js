const jokePara = document.getElementById("para");
const title = document.getElementById("title");
title.textContent += '😄';

const jokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })

    const jsonResponse = await response.json();

    jokePara.textContent = jsonResponse.joke;
}

jokes();