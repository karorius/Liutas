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
const C = [
    94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false',
    'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year',
    'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76,
    [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house',
    'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73,
    '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27,
    'friend', 'moon', '26', 'science', 74
  ];
  
  // Surasti didžiausią skaičių
  const maxNumber = Math.max(...C.filter(item => typeof item === 'number'));
  console.log("Didžiausias skaičius:", maxNumber);
  
  // Surasti trumpiausią stringą
  const shortestString = C.filter(item => typeof item === 'string').reduce((shortest, str) => {
    return str.length < shortest.length ? str : shortest;
  }, Infinity);
  console.log("Trumpiausias stringas:", shortestString);
  
  // Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!)
  const countZeroNumbers = C.filter(item => typeof item === 'number' && item === 0).length;
  console.log("Skaičių, kurie lygūs 0, kiekis:", countZeroNumbers);
  
  // Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!)
  const sumPositiveNumbers = C.filter(item => typeof item === 'number' && item > 0).reduce((sum, num) => {
    return sum + num;
  }, 0);
  console.log("Teigiamų skaičių suma:", sumPositiveNumbers);
  
  // Suskaičiuoti bendrą visų stringų ilgį
  const totalStringLength = C.filter(item => typeof item === 'string').reduce((sum, str) => {
    return sum + str.length;
  }, 0);
  console.log("Bendras stringų ilgis:", totalStringLength);
  
  // Suskaičiuoti vidutinį stringo ilgį
  const averageStringLength = totalStringLength / C.filter(item => typeof item === 'string').length;
  console.log("Vidutinis stringo ilgis:", averageStringLength);
  
  // Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius
  const countNonStringOrNumber = C.filter(item => typeof item !== 'string' && typeof item !== 'number').length;
  console.log("Elementų, kurie nėra nei stringai, nei skaičiai, kiekis:", countNonStringOrNumber);
  
  // Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN)
  const sumNumbersFromStrings = C.filter(item => typeof item === 'string' && !isNaN(Number(item))).reduce((sum, str) => {
    return sum + Number(str);
  }, 0);
  console.log("Skaičių, kuriuos galima padaryti iš stringų, suma:", sumNumbersFromStrings);
  
  // Rasti ko yra daugiau- stringų ar skaičių
  const countStrings = C.filter(item => typeof item === 'string').length;
  const countNumbers = C.filter(item => typeof item === 'number').length;

  