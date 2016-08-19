

function Warrior(name, hp) {
  this.name = name;
  this.hp = hp;
}

Warrior.prototype.status = function() {
  if (this.hp <= 5) {
    return this.name + '(' + this.hp + ' hp)' + ' is badly hurt';
  }
  else if (this.hp > 5) {
    return this.name + '(' + this.hp + ' hp)' +  ' is doing quite well';
  }
}

function Monk(name, hp) {
  this.name = name;
  this.hp = hp;
}

Monk.prototype = new Warrior();

Monk.prototype.status = function() {
  return "The monk's stoic approach to life inhibits your ability to discern his status.";
}


var ben = new Monk('Benedict', 10);
var uncleCreamy = new Warrior('Uncle Creamy', 10);

console.log(ben.status());
console.log(uncleCreamy.status());

while(ben.hp > 0 && uncleCreamy.hp > 0) {

  var damage = Math.floor(Math.random() * 3);
  ben.hp -= damage;

  damage = Math.floor(Math.random() * 3);
  uncleCreamy.hp -= damage;

  console.log(ben.status());
  console.log(uncleCreamy.status());

}
