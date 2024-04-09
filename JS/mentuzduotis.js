console.log('Namų darbai');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.sukurti du kintamuosius savo mylimo aktoriaus vardu ir Pavarde kaip stringus .Atspausdinti trumpesni

const vardas = 'Harrison';
const pavarde ='Ford';
if(vardas.length > pavarde.length) {
    console.log(vardas);
} else {console.log(pavarde);
};
// 2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const Name = 'Darius';
const surname = 'Venckus';
const yearOfBirth = 1970;
const thisYear = 2024;

const age = thisYear - yearOfBirth;
console.log('Aš esu', Name, surname, 'Man yra', age,'metai');

3.

const vardas1 = 'Harrison';
const pavarde1 = 'Ford';
const naujas = vardas1.slice(-3) + pavarde1.slice(-3);
console.log(naujas);

const tekstas = "Once upon a time in hollywood";
const zvaigzduciuTekstas = tekstas.split('').map(simbolis => (simbolis.toLowerCase() === 'o') ? '*' : simbolis).join('');

console.log(zvaigzduciuTekstas);

// let count = 0;
// let number = 0;

// do {
//     number = rand(0, 7);
//     count++;
//     console.log('metimas:', count, 'rezultatas:', number);

//     // if (number == 7) {
//     //     break;
//     // }

// } while (count != 10 && number != 2 && number != 7);
 
// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//     suma += i;
// }

// console.log('Visų skaičių nuo 1 iki 100 suma:', suma);

5.
// let a = rand(0,2);
// let b = rand(0,2);
// let c = rand(0,2);
// let d = rand(0,2);

// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

6.
const sk1 = rand(0,4);
const sk2 = rand(0,4);
let rez;
if(sk1>sk2) {
    rez = sk1 / sk2;
} else {
    rez = sk2 / sk1}
 console.log('Rezultatas:',rez.toFixed(2)) 
 
 7.
 
 const F = rand(0,25);
 const U = rand(0,25);
 const K = rand(0,25);
 const vid = ( F + U + K )/3;
 console.log('Vidurine reiksme:', vid.toFixed(2));

8.
// 
let obj ={
    name:'Darius',
    age: 54

}
obj.surname = 'Venckus',
console.log(obj,obj.name,obj.surname);
9.
const sk = [ 1,2,3,4,5]
console.log(sk);
// 10.pridedame skaiciu
sk.push(10);
console.log(sk);
// 11.pasalinti elementa naudojame komanda Splice
sk.splice(1,1);
console.log(sk);
// 12.surasti indexa naudojame indexOf
const index = sk.indexOf(3);
console.log(index);
// 13 masyvo ilgio paskaiciavimas su komanda length
const ilg = sk.length;
console.log(sk,ilg);
// 14.sukurti atsitiktiniu sk  masyva 
const ats = [];
for(let i = 0; i < 5;i++) {
    ats.push(rand(0,10));
};
console.log(ats)
// 15 sukurti atvirkstini masyva masyvui skaiciai

console.log( '1'== 1)
console.log( true != 1)

let n = 3 ;
n = n * 3;
if(n> 15) {
    console.log( 'n>15')
}else {
    console.log('n<15')
}
let o =5
if((10 > 7) + o) { 
    console.log('yes O');
    console.log(o)
}else {console.log('no O')};

let One = rand(0,4);
let two = rand(0,4);
console.log( One, two);

if(One > two) {
    rezult = One / two;
} else { rezult = two / One};

console.log(rezult);
const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder'];

    function trumpiausiasStringas(sarasas) {
        let trumpiausias = sarasas[0]; // Nustatome pirmą sąrašo elemento ilgiausią stringą kaip pradinę reikšmę
    
        for (let i = 1; i < sarasas.length; i++) {
            const dabartinis = sarasas[i];
            if (dabartinis.length < trumpiausias.length) {
                trumpiausias = dabartinis; // Atnaujiname trumpiausio stringo reikšmę, jei randame trumpesnį
            }
        }
    
        return trumpiausias; // Grąžiname trumpiausią stringą
    }
    
    const trumpiausias = trumpiausiasStringas(B);
    console.log('Trumpiausias stringas:', trumpiausias);


function ilgiausiasStringas(sarasas) {
    let ilgiausias = ''; // Pradinė ilgiausio stringo reikšmė yra tuščias stringas

    for (let i = 0; i < sarasas.length; i++) {
        const dabartinis = sarasas[i];
        if (dabartinis.length > ilgiausias.length) {
            ilgiausias = dabartinis; // Atnaujiname ilgiausią stringą
        }
    }

    return ilgiausias; // Grąžiname ilgiausią stringą
}

const ilgiausias = ilgiausiasStringas(B);
console.log('Ilgiausias stringas:', ilgiausias);

console.log('----------------------------')

// Atspausdinti pasveikinimą su vardu:


function greet(name) {
    console.log(`Labas, ${name}`);
}

greet('Elena');

// Grąžinti teksto ilgį ir atvaizduoti naršyklėje:


function countCharacters(text) {
    const length = text.length;
    console.log(`Teksto ilgis: ${length}`);
    return length;
}

countCharacters('Labas, pasauli!'); // Atvaizduos ir grąžins teksto ilgį


// Grąžinti vardą ir pavardę didžiosiomis raidėmis:

function capitalizeName(name, last_name) {
    const capitalized = `${name.charAt(0).toUpperCase() + name.slice(1)} ${last_name.charAt(0).toUpperCase() + last_name.slice(1)}`;
    return capitalized;
}

console.log(capitalizeName('john', 'doe'));

// Sugeneruoti ir atspausdinti 3 atsitiktinius skaičius:


function generateRandomNumbers() {
    const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6));
    console.log(randomNumbers.join(', '));
}

generateRandomNumbers();

// Sugeneruoti masyvą su atsitiktiniais skaičiais ir išfiltruoti pirminius didesnius nei 5000:

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function generateArrayWithPrimes() {
    const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * (15991 - 997 + 1) + 997));
    const primesAbove5000 = array.filter(num => num > 5000 && isPrime(num));
    return primesAbove5000;
}

const primeNumbers = generateArrayWithPrimes();
console.log(primeNumbers);

console.log('--------------------------------------------');

const skaiciai = [3, 7, 2, 9, 5];
console.log(skaiciai);
skaiciai.push(8);
console.log(skaiciai);
skaiciai.splice(2,1);
console.log(skaiciai);
skaiciai.indexOf(4);
console.log(index);

const didejimoTvarka = skaiciai.slice().sort((a, b) => a - b);
console.log(didejimoTvarka);

const lyginiai = skaiciai.filter(sk => sk % 2 === 0);
console.log(didejimoTvarka);

const apjungtiMasyvai = skaiciai.concat(lyginiai);
console.log(apjungtiMasyvai);

const pakartoti = skaiciai.flatMap(sk => [sk, sk, sk]);
console.log(pakartoti);

const didziausias = Math.max(...skaiciai);
console.log(didziausias);
