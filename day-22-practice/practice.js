/*
# Characteristics of functions

These two types should never be mixed
1. Create some side-effect <-- harder to debug, understand, and test
2. Pure functions (Computational) <-- easier to debug, understand, test

*/

function doNothing() {
}

doNothing();
var resultOfDoNothing = doNothing(); //undefined


var numberOfMathematicalCalculations = 0;

function add(num1, num2) {
  numberOfMathematicalCalculations += 1; //this is a side effect

  var result = num1 + num2;
  return result;
}

var resultOfAdd = add(6, 5); //11
//console.log(resultOfAdd, numberOfMathematicalCalculations);
add(9, 10)




var lineOfCSV = 'Bob,Smith,76';
var lineOfCSV2 = 'Jane,Doe,47';

function getFirstNameBad(lineOfCSV) {
  var index = 0;
  var output = '';
  while(lineOfCSV[index] !== ',') {
    //code will execute
    //console.log(lineOfCSV[index]);
    output += lineOfCSV[index];
    index += 1;
  }

  return output;
}

var firstName = getFirstNameBad(lineOfCSV); //Bob
//console.log('first name is', firstName);


function getFirstNameGood(lineOfCSV) {
  var arr = lineOfCSV.split(',');
  //console.log('split', arr);
  return arr[0];
}

firstName = getFirstNameGood(lineOfCSV);
//console.log('first name is', firstName);
//console.log('other csv line', getFirstNameGood(lineOfCSV2));







var story = 'It was a dark and stormy night.  Eric needed dinner badly, but his car was broken down.  So he went on a walk to Burger Street and bought a double cheeseburger, then walked home.  Unfortunately, he had to microwave it because it had grown cold in the meantime. The end.'

function stripTimsDoubleSpaces(str) {
  var result = str.replace(/  /g, ' ');
  return result;
}

var stripped = stripTimsDoubleSpaces(story);
console.log('length of string before', story.length, 'after', stripped.length);



function calculateWordCount(str) {
  // var arr = str.split(' ');
  // var arrayLength = arr.length;
  // return arrayLength;

  return str.split(' ').length;
}

var wordCount = calculateWordCount(story);
console.log('word count', wordCount);
 
