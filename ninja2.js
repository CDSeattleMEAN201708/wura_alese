class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name
    this.health = 100
    this.speed = 3
    this.strength = 3
  }
  sayName(){
    console.log(`My name is ${this.name}`);
  }
  showStats(){
    console.log(`My stats are: \nHealth: ${this.health} \nSpeed x strength: ${this.speed} and ${this.strength}`);
  }
  drinkSake(val){
    this.health += val
  }
}

var ninja1 = new Ninja('Lukas')
ninja1.sayName()
ninja1.drinkSake(10)
ninja1.showStats()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
class Sensei extends Ninja {
  constructor(name, health, speed, strength, wisdom) {
    super(name, health, speed, strength)
    this.wisdom = 10
    this.health = 200
    this.speed = 10
    this.strength = 10
  }
  speakWisdom(val){
    this.drinkSake(val)
    console.log('I secretly love Jim');
  }

}

var dwayt = new Sensei('Dwayt')

dwayt.speakWisdom(20)
dwayt.showStats()
