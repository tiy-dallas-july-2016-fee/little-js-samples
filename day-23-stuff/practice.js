var someNumbers = [1, 5, 78, 43, 6];

function sumSomeNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

//var sum = sumSomeNumbers(someNumbers);

function sumSomeNumbersAgain(arr) {
  var sum = 0;
  arr.forEach(function(item) {
    sum = sum + item;
  });
  return sum;
}

//sum = sumSomeNumbersAgain(someNumbers);


function giveMeOdds(arr) {
  var odds = [];
  arr.forEach(function(item) {
    //console.log('is it odd?', item, item % 2);
    if (item % 2 === 1) {
      odds.push(item)
    }
  });
  return odds;
}

//var odds = giveMeOdds(someNumbers);
//console.log('odds', odds);



var oddSum = sumSomeNumbersAgain(giveMeOdds(someNumbers));
console.log(oddSum);


function giveMeEvens(arr) {
  var odds = [];
  arr.forEach(function(item) {
    //console.log('is it odd?', item, item % 2);
    if (item % 2 === 0) {
      odds.push(item)
    }
  });
  return odds;
}

var evenSum = sumSomeNumbersAgain(giveMeEvens(someNumbers));
console.log('even sum', evenSum);
