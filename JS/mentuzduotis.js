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
 const vidurkis = ( F + U + K )/3;
 console.log('Vidurine reiksme:', vidurkis.toFixed(2));

8.
// 
let obj ={
    name:'Darius',
    age: 54

}
obj.surname = 'Venckus',
console.log(obj,obj.name,obj.surname);
9.
const skaiciai = [ 1,2,3,4,5]
console.log(skaiciai);
// 10.pridedame skaiciu
skaiciai.push(10);
console.log(skaiciai);
// 11.pasalinti elementa naudojame komanda Splice
skaiciai.splice(1,1);
console.log(skaiciai);
// 12.surasti indexa naudojame indexOf
const index = skaiciai.indexOf(3);
console.log(index);
// 13 masyvo ilgio paskaiciavimas su komanda length
const ilgis = skaiciai.length;
console.log(skaiciai,ilgis);
// 14.sukurti atsitiktiniu sk  masyva 
const ats = [];
for(let i = 0; i < 5;i++) {
    ats.push(rand(0,10));
};
console.log(ats)
// 15 sukurti atvirkstini masyva masyvui skaiciai

