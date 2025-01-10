import { MY_API_KEY } from "./config.js";

function onLoad() {
    getChuckJoke();
}

document.getElementById('get-chuck-jokes').addEventListener('click', getChuckJoke);
document.getElementById('get-quote').addEventListener('click', getQuote);

async function getChuckJoke() {
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

let name;
let desc;

async function getQuote() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2751fda6c9msh7b5342f8df30de4p18f4abjsn89107bfbc39d',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        name = result.originator.name;
        const content = result.content;
        desc = result.originator.description;
        document.getElementById('quote').innerHTML = `<p>Name: ${name}<br>Quote: ${content}`;
        console.log(desc);
        console.log()
    } catch (error) {
        console.error(error);
    }
}

const myModal = document.getElementById("quoteModal")

myModal.addEventListener('shown.bs.modal', () => {
    if (desc == '') {
        desc = "Sorry, no further information found to display"
    }
    document.getElementById('quote-modal-title').innerHTML = name
    document.getElementById('quote-modal-body').innerHTML = desc
  })
  

getChuckJoke();
getQuote();