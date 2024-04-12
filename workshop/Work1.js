console.log('Pradedam viska is naujo');

function introduction(name,age) {
    return `Sveiki mano vardas ${name} ir man yra ${age} metai`;
}
const x = introduction('Gitana',54);
console.log(x);

const x1 = introduction('Meteoritas',28);
console.log(x1);

const x2 = introduction('Vytas',33);
console.log(x2);

function dvigubai(number) {
    return number*2
}
// const x = introduction('Darius');
// console.log(x);

/*
0 -> 0 Eur
10 -> 10 Eur
50 -> 50 Eur
90 -> 90 Eur
99 -> 99 Eur
100 -> 100 Eur
102 -> 102 Eur
200 -> 200 Eur
*/
function price (kiekis) {
    if(kiekis < 100) {
    return kiekis + '  Eur';
    } else {
        return (kiekis / 2) + '  Eur';
    }
  
}
console.log(price(0), '->', '0 Eur');
console.log(price(10),'->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90),'->', '90 Eur');
console.log(price(99),'->', '99 Eur');
console.log(price(100),'->', '50 Eur');
console.log(price(102),'->', '51 Eur');
console.log(price(200), '->', '100 Eur');

console.log(price(-200), '->', 'Error');
console.log(price(Infinity), '->', 'Error');
console.log(price(-Infinity), '->', 'Error');
console.log(price(NaN), '->', 'Error');

console.log(betterPrice(0), '->', '0 Eur');
console.log(betterPrice(10),'->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90),'->', '90 Eur');
console.log(betterPrice(99),'->', '99 Eur');
console.log(betterPrice(100),'->', '50 Eur');
console.log(betterPrice(102),'->', '51 Eur');
console.log(betterPrice(200), '->', '100 Eur');

console.log(betterPrice(-200), '->', 'Error');
console.log(betterPrice(Infinity), '->', 'Error');
console.log(betterPrice(-Infinity), '->', 'Error');
console.log(betterPrice(NaN), '->', 'Error');


// console.clear();

function betterPrice (amount) {
    // validacijos
if(typeof amount !== 'number') {
    return 'ERROR : duok skaiciaus tipo reiksme';
}
if( amount < 0) {
    return 'ERROR : duok teigiama skaiciu';
}
if(amount === Infinity) {
    return 'ERROR : skaicius negali buti Infinity';
}
if(isNaN(amount)) {
    return 'ERROR : duok normalu skaiciu';
}
    // logika 

    let rezult = '';
    if(amount < 100) {
    rezult = amount + '  Eur';
    } else {
       rezult = (amount * 0.5) + '  Eur';
    }
//   rezultato validacija

if(rezult === '') {
    return 'ERROR: Kazkas negerai su logika -----';
}
// rezultato grazinimas
return rezult
}




console.log(betterPrice(0), '->', '0 Eur');
console.log(betterPrice(10),'->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90),'->', '90 Eur');
console.log(betterPrice(99),'->', '99 Eur');
console.log(betterPrice(100),'->', '50 Eur');
console.log(betterPrice(102),'->', '51 Eur');
console.log(betterPrice(200), '->', '100 Eur');

console.log(betterPrice(true), '->', 'Error');
console.log(betterPrice('dgpf'), '->', 'Error');
console.log(betterPrice(undefined), '->', 'Error');
console.log(betterPrice(), '->', 'Error');
console.log(betterPrice(betterPrice), '->', 'Error');

console.log(betterPrice(-200), '->', 'Error');
console.log(betterPrice(Infinity), '->', 'Error');
console.log(betterPrice(-Infinity), '->', 'Error');
console.log(betterPrice(NaN), '->', 'Error');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gaunam studento 5 pazymiu masyva
// reikia suskaiciuoti vidurki

function marksAverage(marks) {
    // validacija

    // logika

// const total =  marks[0]+marks[1]+marks[2]+marks[3]+marks[4];

// let total = 0;
// total = total + marks[0];   // = 0 + 10
// total = total + marks[1];   // = 10 + 2
// total = total + marks[2];   // = 12 + 8
// total = total + marks[3];   // = 20 + 4
// total = total + marks[4];   // = 24 + 6



const count = marks.length ;
const rezult = total / count;

    // rezultato validacija

    // rezultato grazinimas

    return rezult
}

console.log(marksAverage([10,2,8,4,6]), '->', 6);
console.log(marksAverage([10,10,10,10,10]), '->',10);
console.log(marksAverage([1,1,1,1,1]), '->', 1);
console.log(marksAverage([1,2,3,4,5]), '->', 3);