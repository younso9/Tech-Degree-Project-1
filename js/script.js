/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/* 
  An array of five quotes objects was created and assigned the name `quotes`.
  A `source`,`citation`and `year`property was added to the object in 
  this array. Futher into the project a `tag` property was added as directed.  
*/

var quotes = [{
  quote: 'Be Your Own Squad ~ You are a Crew All By Yourself',
  source: 'Sage Youngblood',
  citation: 'https://www.pjpillowtalk.com/',
  year: '2019,',
  tags: 'The DollBoss',
},
{
  quote: 'Your worth is defined by whatever YOU can fathom about yourself - You are IT!',
  source: 'Sage Youngblood',
  citation: 'https://www.pjpillowtalk.com/',
  year: '2019,',
  tags: 'The DollBoss',
},
{
  quote: 'There will Never be Traffic in the Lane that YOU create for yourself!',
  source: 'Sage Youngblood',
  citation: 'https://www.pjpillowtalk.com/',
  year: '2019,',
  tags: 'The DollBoss',
},
{
  quote: 'You are as Flawesome as you choose to be, vibe on High!',
  source: 'Sage Youngblood',
  citation: 'https://www.pjpillowtalk.com/',
  tags: 'The DollBoss',
},
{
  quote: 'Indulge Yourself in the Totality of YOU!',
  source: 'Sage Youngblood',
  citation: 'https://www.pjpillowtalk.com/',
  year: 'The DollBoss',

}];

// This FUNCTION was declared and named `randomNum` to generate a number between 0 - 255.
  function randomNum() {
  return Math.floor(Math.random() * 256)
}

/*
 This FUNCTION was declared and named `getRandomQuote`to store and return the info from 
 the array in a random order.
*/

  function getRandomQuote(quotes) {
  var randomQuotesNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomQuotesNumber]
  return randomQuote;
}

/*
This section:
 - This function set to call the printQuote function to auto refresh every (2) seconds.
 - A `printQuote` function was declared to call the `getRandomQuote` function and assign it to the declared variable.
 - A variable for the HTML string was declared 
 - An HTML string was built and adding the quote and source section to the HTML string.
 - An conditional if statement was added to check for the existence of the `citation` & `year`property.
 - The `innerHTML` of the `quote-box` div was added to the HTML string. 
*/

  function refresh() {
  var timer = setInterval(printQuote, 2000);
}

  function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var message = " ";
  message += "<p class='quote'>" + randomQuote.quote + '</p>';
  message += "<p class='source'>" + randomQuote.source;

  if (randomQuote.citation) {
    message += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    message += "<span class='year'>" + randomQuote.year + "</span>";
  }

  if (randomQuote.tags) {
    message += "<span class='tags'>" + randomQuote.tags + "</span>";
  }

  // Close the </p> tag
  message += "</p>";

 /***
  - The innerHTML property was set to return the HTML content (inner HTML).
  - The background property was set to return background color properties.
***/

  document.getElementById('quote-box').innerHTML = message;

  var x = randomNum();
  var y = randomNum();
  var z = randomNum();
  var bgColor = "rgb(" + x + "," + y + ", " + z + ")";

  document.body.style.background = bgColor;

}

//This function finds the element by "id".
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Calls the `printQuote` function.
  printQuote ()

//Calls the `refresh` function.
  refresh();


// The End