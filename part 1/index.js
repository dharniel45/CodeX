class Jungle {
    constructor(specie, energylevel, feature) {
        this.specie = specie;
        this.energylevel = energylevel;
        this.feature = feature;
    }
    sound() {
        return `${this.specie} can make a sound`;
    }
    food() {
        return `${this.specie} can eat food`;
    }
    sleep() {
        return `${this.specie} can sleep`;
    }
}
let tiger = new Jungle("Tiger", "-3", "Tigers can't eat grain because they have sensitive digestive system");
let monkey = new Jungle("Monkey", "+5", "Only Monkeys can play Oooo Oooo Oooo");
let snakes = new Jungle("Snakes", "+10", "Snake has ability to play");

console.log(tiger, monkey, snakes);
console.log("The Jungle contains several types of food; meat, fish, bugs and grains");