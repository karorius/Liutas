console.log('Pradedam viska is naujo');
function introduction(name,age) {
    return `Sveiki mano vardas ${name} ir man yra ${age} metai`;
}
const x = introduction('Darius',54);
console.log(x);

const x1 = introduction('Meteoritas',28);
console.log(x1);

const x2 = introduction('Vytas',33);
console.log(x2);

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


console.clear();

function betterPrice (kiekis) {
    // validacijos

    // logika 

    let rezult = '';
    if(kiekis < 100) {
    rezult = kiekis + '  Eur';
    } else {
       rezult = (kiekis * 0.5) + '  Eur';
    }
//   rezultato validacija

// rezultato grazinimas
return rezult
}




// console.log(betterPrice(0), '->', '0 Eur');
// console.log(betterPrice(10),'->', '10 Eur');
// console.log(betterPrice(50), '->', '50 Eur');
// console.log(betterPrice(90),'->', '90 Eur');
// console.log(betterPrice(99),'->', '99 Eur');
// console.log(betterPrice(100),'->', '50 Eur');
// console.log(betterPrice(102),'->', '51 Eur');
// console.log(betterPrice(200), '->', '100 Eur');

console.log(betterPrice(-200), '->', 'Error');
console.log(betterPrice(Infinity), '->', 'Error');
console.log(betterPrice(-Infinity), '->', 'Error');


console.log(betterPrice(NaN), '->', 'Error');
console.log(betterPrice(true), '->', 'Error');
console.log(betterPrice('dgpf'), '->', 'Error');
console.log(betterPrice(undefined), '->', 'Error');
console.log(betterPrice(), '->', 'Error');
console.log(betterPrice(betterPrice), '->', 'Error');



