const jokeSetupParagraph = document.getElementById('joke-setup'); 
const jokePunchlineParagraph = document.getElementById('joke-punchline');
let url = "https://official-joke-api.appspot.com/random_joke";

async function renderJoke() {  
    let response = await fetch(url);
    let data = await response.json(); 

    jokeSetupParagraph.innerHTML = data.setup; 
    jokePunchlineParagraph.innerHTML = data.punchline;
}
// Data retrieval via destructuring 
// const { setup, punchline } = data; 
// jokeSetupParagraph.innerHTML = setup; 
// jokePunchlineParagraph.innerHTML = punchline;

function resetJoke() {
    jokeSetupParagraph.innerHTML = ""; 
    jokePunchlineParagraph.innerHTML = "";
}