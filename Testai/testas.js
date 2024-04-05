console.log('Mano zinios lygios vienetui');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const bitGirls =['Edita','Lina','Brigita','Deimante','Juste'];
const cats = [ 'Murka','Rainius','Meilute','Bosas','Dickis'];

bitGirls.unshift('Nauseda');
console.log(bitGirls);

const bitCats = cats.map(cat => [cat, rand(0, 1) ? 'storas' : 'normalus']);
console.log(bitCats);

let storKiekis = 0;
let normalKiekis = 0;

bitCats.forEach(cat => {
    if (cat[1] === 'storas') {
        storKiekis++;
    } else {
        normalKiekis++;
    }
});

console.log('Stori katukai:', storKiekis);
console.log('Normalus katukai:', normalKiekis);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element, index) {
  console.log(`Elementas ${element} yra masyvo ${index} pozicijoje.`);
});