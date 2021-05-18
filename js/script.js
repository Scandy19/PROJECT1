/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = []; //this is an empty array in which all the objects will be pushed 

// These are the five objects created which have quotes, source, citation and year as its propetries 
 let quote1 = {quote: 'All endings are also beginnings, We just know it at that time.' , source:'Mitch Albom' , citation: 'The Five People You Meet In Heaven (Book)', year:2003  };
 let quote2 = {quote: "There's no place like home", source: "John Payne", citation: 'Home Sweet Home (Song)' , year: 1823 }
 let quote3 = {quote:'Everybody is a genius. But if you will judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid. ' , source:'Albert Einstein', year: 1932  };
 let quote4 = {quote: 'Every human life is worth the same, and worth saving.' , source: 'J.K. Rowling', citation:'Harry Potter and the Deathly Hallows (Book)' , year: 2007 };
 let quote5 =  {quote: "Someone leaves because it's someone else about to arrive", source: "Paulo Coelho", year: 1949 };
 
 // the five objects created above are pushed into the empty array one by one using .push()
 quotes.push(quote1);
 quotes.push(quote2);
 quotes.push(quote3);
 quotes.push(quote4);
 quotes.push(quote5);
 console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
  //This randomQuote variable gets the random object from the array 
  const randomQuote = Math.floor(Math.random() * quotes.length) + 1;
  
  let ranquote = quotes[randomQuote]; //The properties of objects in the array are stored in ranquote variable
  return ranquote;
}

/***
 * `printQuote` function
***/
function printQuote(){
  let RandomQuote = getRandomQuote();
  
  //variable PtoHTML1 initiates HTML string with first two <p></p> elements.
  let PtoHTML1 = "<p class='quote'>" +RandomQuote.quote + "<p class='source'>" + RandomQuote.source;
  
  //this if statement checks if the citation property of any object in the array exists
  if(quotes.citation = true){
    //if citation property exists <span></span> element is concatenated
   PtoHTML1 += "<span class ='citation' >" + RandomQuote.citation+"</span>";
  }
  
  //this if statement checks if the year property of any object in the array exists
  if(quotes.year = true){
    //if year property exists <span></span> element is concatenated
    PtoHTML1 += "<span class ='year' >" + RandomQuote.year +"</span>";
  }

  document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);