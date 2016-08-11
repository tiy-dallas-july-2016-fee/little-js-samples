var test = require('./util/test.js');

// =============================================================
// Instructions
// =============================================================

// 1. run `npm install chalk`
// 2. replace the test below with the ones supplied by the instructor, or you own


// -------------------------------------------------------------
//Implement a function that takes a string and a letter to see if the first string contains the letter.
function stringContainsLetter(string, letter) {
  var index = string.indexOf(letter);
  var contains = index > -1;
  return contains;
}

test.equal({ shouldBe: true, actual: stringContainsLetter('steak', 'a'), msg: 'stringContainsLetter #1' });
test.equal({ shouldBe: false, actual: stringContainsLetter('steak', 'z'), msg: 'stringContainsLetter #2' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that takes two strings to see if the first string contains the second.
function stringContainsString(string, string2) {
}

test.equal({ shouldBe: false, actual: stringContainsString('capital', 'frog'), msg: 'stringContainsString #1' });
test.equal({ shouldBe: true, actual: stringContainsString('He-Man', 'Man'), msg: 'stringContainsString #2' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that replaces the commas of a string with pipe characters
function replaceCommasWithPipes(str) {
}

test.equal({ shouldBe: '1|2', actual: replaceCommasWithPipes('1,2'), msg: 'replaceCommasWithPipes #1' });
test.equal({ shouldBe: '1|2|3', actual: replaceCommasWithPipes('1,2,3'), msg: 'replaceCommasWithPipes #2' });
test.equal({ shouldBe: '1|2|3|4|5', actual: replaceCommasWithPipes('1,2,3,4,5'), msg: 'replaceCommasWithPipes #3' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that changes the delimiter from one character to another
function changeDelimiter(str, oldDelimeter, newDelimiter) {
}

test.equal({ shouldBe: '1%2%3', actual: changeDelimiter('1,2,3', ',', '%'), msg: 'changeDelimiter #1' });
test.equal({ shouldBe: '1:2:3:4', actual: changeDelimiter('1,2,3,4', ',', ':'), msg: 'changeDelimiter #2' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that splits a string by spaces
function splitStringBySpaces(str) {
}

test.equal({ shouldBe: ['Hello,', 'my', 'name', 'is', 'Indigo', 'Montoya.'], actual: splitStringBySpaces('Hello, my name is Indigo Montoya.'), msg: 'splitString' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that splits a string by a supplied delimiter
function splitStringByDelimiter(str, delimiter) {
}

test.equal({ shouldBe: ["I'll", 'be', 'back.'], actual: splitStringByDelimiter("I'll be back.", ' '), msg: 'splitStringByDelimiter #1' });
test.equal({ shouldBe: ['Bob', 'Smith', '47'], actual: splitStringByDelimiter('Bob,Smith,47', ','), msg: 'splitStringByDelimiter #2' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that will count the words in a sentence
function countTheWords(sentence) {
}

test.equal({ shouldBe: 4, actual: countTheWords('I have the power!'), msg: 'countTheWords #1' });
test.equal({ shouldBe: 5, actual: countTheWords('Fezzik, are there rocks ahead?'), msg: 'countTheWords #2' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that gets the first five characters of a string.
function getFirstFiveCharacters(str) {
}

test.equal({ shouldBe: 'Name:', actual: getFirstFiveCharacters('Name: Man-at-Arms'), msg: 'getFirstFiveCharacters' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that gets the first N characters of a string.
function getFirstNCharacters(str, n) {
}

test.equal({ shouldBe: 'Name:', actual: getFirstNCharacters('Name: Man-at-Arms', 5), msg: 'getFirstNCharacters' });
test.equal({ shouldBe: 'Symmetrical', actual: getFirstNCharacters('Symmetrical book stacking', 11), msg: 'getFirstNCharacters' });
// -------------------------------------------------------------



// -------------------------------------------------------------
//Implement a function that will pull the bold text out of the sentence.
//Hint: substring and indexOf are your friend here
function pullBoldText(str) {
}

test.equal({ shouldBe: 'Name:', actual: pullBoldText('<b>Name:</b> Bruce Banner.'), msg: 'pullBoldText #1' });
test.equal({ shouldBe: 'human being', actual: pullBoldText("You're right, no <b>human being</b> would stack books like this."), msg: 'pullBoldText #2' });
// -------------------------------------------------------------










test.summary();
