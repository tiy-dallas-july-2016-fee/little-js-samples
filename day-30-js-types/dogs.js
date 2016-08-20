//Base type
function Dog() {
}

Dog.prototype.bark = function() {
  console.log('ruff ruff!');
};

function Labrador() { }
Labrador.prototype = new Dog();

function Chiahuahua() {}
Chiahuahua.prototype = new Dog();
//Overriding the bark function, ONLY on Chiahuahua
Chiahuahua.prototype.bark = function() {
  console.log('yip!');
}

function Terrier() {}
Terrier.prototype = new Dog();

//An instance of Labrador
var fido = new Labrador();

fido.bark();

var spot = new Chiahuahua();
spot.bark();

var rover = new Terrier();
rover.bark();

console.log('rover terrier?', rover instanceof Terrier);
console.log('rover array?', rover instanceof Array);
console.log('rover dog?', rover instanceof Dog);


var dude = { name: 'Fella' };
var objectDog = { name: 'Rover' };
