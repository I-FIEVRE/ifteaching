
//global empty array variable to store a list of quotes
let listOfQuotes = [];
let listeDeCitations = [];

//output accepts a list of quotes as an array argument, and filters as an id argument, and does the following for each quote:
// - Creates an HTML <h4> element and add the quote's quoteContent property to it
// - Creates an HTML <p> element and add the quote's author property, the quote's talkTitle property, and the quote's year property to it
// - Appends the element to the HTML element with an ID of filters
function output(listQuotes, filters) {
    let element = document.getElementById(filters);
    element.innerHTML = "";
    listQuotes.forEach(quote => {element.innerHTML += `<h4>"${quote.quoteContent}"</h4><p>By <strong>${quote.author}</strong> - "${quote.talkTitle}" (${quote.year})</p>`;});
}

//getQuotes, async function:
//- uses the built-in fetch method, call this absolute URL: 'https://raw.githubusercontent.com/I-FIEVRE/ifteaching/main/scripts/quotes.json'. 
//- Creates a variable to hold the response from your fetch. 
/// Convert the fetch response into a Javascript object. 
// /Store this in the quoteList variable declared earlier:
async function getQuotes(){
    const response = await fetch('https://raw.githubusercontent.com/I-FIEVRE/ifteaching/main/scripts/quotes.json');
    if (response.ok) {
        listOfQuotes = await response.json();
    }
}
getQuotes();

//getCitations is french version fo getQuotes
async function getCitations(){
    const response = await fetch('https://raw.githubusercontent.com/I-FIEVRE/ifteaching/main/scripts/citations.json');
    if (response.ok) {
        listeDeCitations = await response.json();
    }
}
getCitations();

//displayQuoteFilter accepts a list of quotes as an array argument, and filters as an id argument, does the following:
// - filters the global quote list by the currently selected value of the HTML element with an ID of filterBy
// - sorts the filtered list of quotes by year from most recent to least recent.
// - Calls the output function passing in the filtered list of quotes named arrayForDisplay
function displayQuoteFilter(listQuotes, filters) {
    let element = document.getElementById(filters);
    let choice = document.getElementById("filterBy").value;
    element.innerHTML = "";
    let arrayForDisplay;
    if (choice == "Unity") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Unity";
        });     
    } else if  (choice == "Peace") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Peace";
        });     
    } else if (choice == "Love") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Love";
        });     
    } else if (choice == "Jesus") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Jesus";
        });     
    } else if (choice == "Positivity") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Positivity";
        });     
    } else if (choice == "Work") {
        arrayForDisplay = listQuotes.filter((quote) => {
            return quote.topic == "Work";
        });     
    } else {
        output(arrayForDisplay, filters);
        
    }
    arrayForDisplay.sort((quote1, quote2)=> {  
        if (quote1.year > quote2.year)
            return -1;
        else if (quote1.year < quote2.year)
            return 1;
        else
            return 0;
    });
    output(arrayForDisplay, filters);
}  

function displayQ() {
    displayQuoteFilter(listOfQuotes, "filterQuotes");
}
function displayC() {
    displayQuoteFilter(listeDeCitations, "filterCitations");
}

document.getElementById("btnLoad").addEventListener('click', displayQ);
document.getElementById("btnLoad").addEventListener('click', displayC);

