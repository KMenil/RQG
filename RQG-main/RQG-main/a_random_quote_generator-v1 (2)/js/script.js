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
// Empty array
//[]

// Empty object
//{}

// Objects are made up of comma separated pairs of 
// properties and values
//{
  //propertyOne: valueOne,
  //propertyTwo: valueTwo,
  //propertyThree: valueThree
//}
//ANSWER:
var quotes = [
  {
      quote: 'Don’t raise your voice, improve your argument.',
      source: 'Harvey Specter',
      citation: 'Suits (American TV series)',
      year: '2011'
  },
  
  {
      quote: 'Never destroy anyone in public when you can accomplish the same result in private.',
      source: 'Harvey Specter',
      citation: 'Suits (American TV series)',
      year: '2012'
  },
  
  {
      quote: 'Let them hate. Just make sure they spell your name right.',
      source: 'Harvey Specter',
      citation: 'Suits (American TV series)',
      year: '2013'
  },
  
  {
      quote: 'People respond to how we’re dressed, so like it or not this is what you have to do.',
       source: 'Harvey Specter',
      citation: 'Suits (American TV series)',
      year: '2014'
  },
  
  {
      quote: "Sometimes good guys gotta do bad things to make the bad guys pay.",
     source: 'Harvey Specter',
      citation: 'Suits (American TV series)',
      year: '2011'
  }
  ];
/***
 * `getRandomQuote` function
***/

//function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
//}
//ANSWER:
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  // for (var i = 0; i < array.length; i++) {
       var randomQuote = quotes[quoteIndex];
  // }
  return randomQuote;
}
/***
 * `printQuote` function
***/
//function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

// Basic if statement
//if (/* your condition */) {
  // Code to run if your condition evaluates to true
//}

//<p class="quote">quote text</p>
//<p class="source">quote source
  //<span class="citation">quote citation</span>
  //<span class="year">quote year</span>
//</p>

//<p class="quote">quote text</p>
//<p class="source">quote source</p>
//ANSWER:
function printQuote() {
  var message = "";    
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 //ANSWER:
***/
//document.getElementById('quote-box').innerHTML = yourStringHere; 
document.getElementById('load-quote').addEventListener("click", printQuote, false);




