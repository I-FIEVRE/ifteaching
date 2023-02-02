
//global empty array variable to store a list of quotes
let listOfQuotes = [];
//listOfQuotes = JSON.parse(quotess);
//output accepts a list of quotes as an array argument and does the following for each quote:
// - Creates an HTML <article> element
// - Creates an HTML <h4> element and add the quote's quoteContent property to it
// - Creates an HTML <p> element and add the quote's author property, the quote's talkTitle property, and the quote's year property to it
// - Appends the <h4> element, and the <p> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of fitlerQuotes
function output(listOfQuotes) {
    let element = document.getElementById("filterQuotes");
    //element.innerHTML = "";
    listOfQuotes.forEach(quote => {element.innerHTML += `<article><h4>${quote.quoteContent}</h4>
    <p>${quote.author} - ${quote.talkTitle} (${quote.year})</p></article>`    
    });
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

//displayQuoteFilter does the following:
// - filters the global quote list by the currently selected value of the HTML element with an ID of filterBy
// - Calls the output function passing in the filtered list of quotes named arrayForDisplay
function displayTempleFilter() {
    let element = document.getElementById("filterQuotes");
    let choice = document.getElementById("filterBy").value;
    element.innerHTML = "";
    let arrayForDisplay;
    if (choice == "Unity") {
        arrayForDisplay = listOfQuotes.filter((quote) => {
            return quote.topic == "Unity";
        });     
    } else if  (choice == "Peace") {
        arrayForDisplay = listOfQuotes.filter((quote) => {
            return quote.topic == "Peace";
        });     
    } else if (choice == "Love") {
        arrayForDisplay = listOfQuotes.filter((quote) => {
            return quote.topic == "Love";
        });     
    } else if (choice == "Positivity") {
        arrayForDisplay = listOfQuotes.filter((quote) => {
            return quote.topic == "Positivity";
        });     
    } else if (choice == "Work") {
        arrayForDisplay = listOfQuotes.filter((quote) => {
            return quote.topic == "Work";
        });     
    } else {
        output(arrayForDisplay);
    }
    output(arrayForDisplay);
}   
document.getElementById("btnLoad").addEventListener('click', displayTempleFilter);

