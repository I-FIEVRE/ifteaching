
//Declare a global empty array variable to store a list of quotes
let listOfQuotes = [];
//listOfQuotes = JSON.parse(quotess);
// Step 2: Declare a function named output that accepts a list of quotes as an array argument and does the following for each quote:
// - Creates an HTML <article> element
// - Creates an HTML <h4> element and add the quote's quoteContent property to it
// - Creates an HTML <p> element and add the quote's author property, the quote's talkTitle property, and the quote's year property to it
// - Appends the <h4> element, and the <p> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of quotes
function output(listOfQuotes) {
    let element = document.getElementById("filterQuotes");
    //element.innerHTML = "";
    listOfQuotes.forEach(quote => {element.innerHTML += `<article><h4>${quote.quoteContent}</h4>
    <p>${quote.author} - ${quote.talkTitle} (${quote.year})</p></article>`    
    });
}

//Create another function called getQuotes. Make it an async function.
//In the function, using the built-in fetch method, call this absolute URL: 'https://raw.githubusercontent.com/I-FIEVRE/ifteaching/main/scripts/quotes.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
//Convert the fetch response into a Javascript object ( hint: .json() ). Store this in the quoteList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
//Finally, call the output function and pass it the list of quotes. Execute the getquotes function to make sure it works correctly.
async function getQuotes(){
    const response = await fetch('https://raw.githubusercontent.com/I-FIEVRE/ifteaching/main/scripts/quotes.json');
    if (response.ok) {
        listOfQuotes = await response.json();
        //output(listOfQuotes);
    }
}
getQuotes();

//Declare a function named DisplayQuoteFilter that does the following:
// - filters the global quote list by the currently selected value of the HTML element with an ID of filterBy
// - Calls the output function passing in the filtered list of quotes named arrayForDisplay
function DisplayTempleFilter() {
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
document.getElementById("btnLoad").addEventListener('click', DisplayTempleFilter);

