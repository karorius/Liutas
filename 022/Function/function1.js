console.log('sveikas funkciju rusiavime');
const bitGirls =['Edita','Lina','Brigita','Deimante','Juste'];
const cats = [ 'Murka','Rainius','Meilute','Bosas','Dickis'];
bitGirls.unshift('Nauseda');
const Bitcats = [];

const happyCats = [];
 
for (let i = 0; i < bitGirls.length; i++) {
    if (i == 0) {
        happyCats.push([bitGirls[i], 'Barsukas']);
    } else {
        happyCats.push([bitGirls[i], cats[i - 1]]);
    }
}
 
console.log(happyCats);
console.clear();
animals = ['cat','dog','rat','beaf'];
animals.forEach(animal => console.log(animal))
console.clear();
const newAnimals = animals.map(animal => animal + 'as')
const newAnimals1 = animals.map(animal => animal.toUpperCase())
console.log(newAnimals)
console.log(newAnimals1)
console.clear();
const animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];
const smallAnimals = animals.map(animal => {
    if (animal.length > 5) {
        return 'big';
    } else {
        return animal;
    }
});

console.log(smallAnimals);
console.clear();
const bigAnimals = animals.map(animal => animal.length == 3 ? animal+ '*****': animal  );
console.log(bigAnimals);
console.clear();
// ------------------------------------------------------------

// const filteredAnimals = animals.filter( animal => (animal[0] == 's'))
// console.log(filteredAnimals);
// const filteredAnimals1 = animals.filter( animal => (animal != 'tiger'));
// console.log(filteredAnimals1);

// const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);
// animals.sort((a,b) =>{
//     if(a > b) {
//         return 1;
//     }(a < b) {
//         return -1;
// } return 0;});
const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];
digits.sort((a,b) => b-a);
console.log(digits);
const animals1 = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];

animals2.sort((a, b) => b.length - a.length);

console.log(animals2);