
function Zoo() {
  this.animals = []; //store the animals as a list
  this.animalsByName = {}; //store the animals by name for quick lookup, like a dictionary
}

Zoo.prototype.addAnimal = function(animal) {
  this.animals.push(animal); //adds animals to the list for general processing
  this.animalsByName[animal.name] = animal; //adds animals to the name lookup
}

Zoo.prototype.getCarnivores = function() {
  var result = []; //This will only have carnivores in it.

  //check each animal to see if it is a carnivore. If it is, add it to the resulting list.
  this.animals.forEach(function(animal) {
    if (animal.foodType === 'carnivore') { //carnivore? add to output
      result.push(animal);
    }
  });

  return result; //So many carnivores
 }

//Gets an animal by name. Not a great way to do this because it has to iterate potentially over the entire array.
//  Fine with a small number of animals. Would use too much CPU and be slow if there was a large number of items.
Zoo.prototype.getByName = function(name) {
  var obj = null;

  for (var i = 0; i < this.animals.length; i++) {
    if (this.animals[i].name === name) {
      return this.animals[i];
    }
  }

  return obj;
}

//Gets name using the lookup object we created. Way faster because objects are GREAT at finding things by name.
//  How? Look up documentation on the exact data structure used by the browser(s) for implementing objects.
Zoo.prototype.getByNameBetter = function(name) {
  var animal = this.animalsByName[name];
  if (animal) {
    return animal;
  }
  else {
    return null;
  }
}




var zoo = new Zoo();

zoo.addAnimal({ type: 'Lion', name: 'Simba', foodType: 'carnivore' });
zoo.addAnimal({ type: 'Lion', name: 'Mufasa', foodType: 'carnivore' });
zoo.addAnimal({ type: 'Baboon', name: 'Rafiki', foodType: 'omnivore' });
zoo.addAnimal({ type: 'Tiger', name: 'Sher khan', foodType: 'carnivore' });

console.log('the zoo', zoo);

console.log('only the carnivores', zoo.getCarnivores());

console.log('Mufasa', zoo.getByName('Mufasa'));
console.log('Optimus Prime', zoo.getByNameBetter('Optimus Prime'));
