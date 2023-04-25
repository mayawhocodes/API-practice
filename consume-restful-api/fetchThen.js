const jokeSetupParagraph = document.getElementById('joke-setup'); 
const jokePunchlineParagraph = document.getElementById('joke-punchline');

function renderJoke() {  
    let url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
        .then(response => { 
            return response.json(); 
        })
        .then(data => {
            jokeSetupParagraph.innerHTML = data.setup; 
            jokePunchlineParagraph.innerHTML = data.punchline;
        })
        .catch(error => console.log(error))
    ;
}
function resetJoke() {
    jokeSetupParagraph.innerHTML = ""; 
    jokePunchlineParagraph.innerHTML = "";
}