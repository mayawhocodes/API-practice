/*
 * GET - retrieves information
 * POST - sends information/updates 
 * 
 * fetch function - happens asynchronously 
 * 1) Call fetch(<path>)
 * 
 * 2) Returns a response apart of promise from fetch function
 *    Response is a stream of data, so it'll need to be parsed into req'd format
 * 
 * 3) Complete data stream (i.e - grab the data in the body of the response)
 * 4) Create an image element with data from parsed data stream
 * 5) Add section for error handling
 * 6) Re-write data fetching function with async/await 
 */


async function catchBackground() {
    const response = await fetch('background.png'); 
    const blob = await response.blob(); 
    document.getElementById("background").src = URL.createObjectURL(blob);
}

/* Fetch url with async / await */
console.log("About to fetch a background image ");
catchBackground()
    .then(response => {
        console.log('yay');
    })
    .catch( error => {
        console.log('error');
        console.error(error); 
    });

/* Call the url to fetch */
// fetch('background.png')

//     /* Convert response into an image blob */
//     .then( response => {
//         console.log("Response");
//         return response.blob();
//     })
//     /* Add image blob to the HTML page */
//     .then( blob => {
//     console.log("Response as a blob");
//     document.getElementById("background").src = URL.createObjectURL(blob);
//     })
//     /* Error handling after chain of promises */
//     .catch( error => {
//         console.log(error); 
//     });

