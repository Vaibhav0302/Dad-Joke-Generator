const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "BvuA/BSsAO/CBumFaVrEfQ==r5I6A3QFxXcFUfiI";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {


    try {
        jokeEl.innerText = "Updating...";
        btnEl.Disabled = true;
        btnEl.innerText = "loading";
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
        btnEl.Disabled = false;
        btnEl.innerText = "Tell Me a Joke";

    } catch (error) {
        jokeEl.innerText = "An error occured, Try again later! 😊";
        btnEl.Disabled = false;
        btnEl.innerText = "Tell Me a Joke"
    }

}

btnEl.addEventListener("click", getJoke);
