import { MY_API_KEY } from "./config.js";

function onLoad() {
    getJoke();
}

document.getElementById('get-jokes').addEventListener('click', getJoke);

async function getJoke() {
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': MY_API_KEY,
            'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('jokes').innerHTML = result.value;
        console.log(result);
        console.log(result.value);
    } catch (error) {
        console.error(error);
    }
}

getJoke();