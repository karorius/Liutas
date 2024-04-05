console.log( 'sveiki nevykeliai')
function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

const Didžiausias = Math.max(...A);
console.log(Didžiausias);

// Surasti didžiausią skaičių;

const Mažiausias = Math.min(...A);
console.log(Mažiausias);

// Surasti didžiausią neigiamą skaičių;

const neigiamiSkaiciai = [];
for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
        neigiamiSkaiciai.push(A[i]);
    }
}
console.log(neigiamiSkaiciai)
const didžiausiasNeigimas = Math.max(...neigiamiSkaiciai);
 
console.log(didžiausiasNeigimas);

const did50 = [];
for (let i = 0; i < A.length; i++) {
    if (A[i] < 50) {
        did50.push(A[i]);
    }
  }
  console.log(did50);
   
  const didesnis50 = Math.max(...did50);
   
  console.log(didesnis50);

//   Suskaičiuoti teigiamų skaičių sumą;
 
const teigSum = [];
let suma = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i]> 0) {
        teigSum.push(A[i]);
        suma += A[i]
    }
}
console.log(suma)
// Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;

let neigiamaSuma = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
        neigiamaSuma -=A[i] * A[i];
    }
}
console.log(neigiamaSuma);

// Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75

// let intervalas25 = 0;
// for(let i =0; A.length; i++) {
//     let skaicius = A[i];
//     if (skaicius >= 25 && skaicius <= 75) {
//         intervalas25++;
// }}
// console.log(intervalas25)

let intervalas25 = 0;
A.forEach(function(skaicius2) {
    if (skaicius2 >= 25 && skaicius2 <= 75) {
        intervalas25++;
    }
});
console.log(intervalas25);

// Suskaičiuoti kiek skaičių yra 0-iai;

let nuliuSkaicius = 0;
 
A.forEach(function(skaicius3) {
    if (skaicius3 === 0) {
        nuliuSkaicius++;
    }
});
console.log(nuliuSkaicius);

// Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;

let sum = 0;
 
for (let i = 0; i < A.length; i++) {
  if (A[i] % 3 == 0) {
    sum++;
  }
}
 
console.log(sum);
// Suskaičiuoti neigiamų skaičių vidurkį
 





// B

// Surasti ilgiausią stringą;

const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

B.sort((a, b) => a.length - b.length); //isrusiuojam didejancia tvarka
 
let ilgiausias = B[B.length - 1].length;
 
console.log(B);

// Surasti trumpiausią stringą;

B.sort((a, b) => a.length - b.length); //isrusiuojam didejancia tvarka
 
let trumpiausias = B[0].length;
 
console.log(B);

console.log(trumpiausias);


// Surasti stringą, kuris prasideda “a” raide;

let stringas = 0;
 for(let i= 0; i < B.length ; i++) {
    let dabar = B[i];
    if(dabar[0] == 'a') {
        console.log(dabar)
    }
 }

//  Surasti stringą su daugiausia žodžių;

// let maxzodis = 0;
// let stringasmax = ' ';
// for(let i = 0; i < B.length; i++) {
//     const VisString = B[i];
//     const zodziai = VisString.trim().split(/\s+/).length;
//     if( zodziai > maxWords) {
//         maxWords = zodziai;
//         stringasmax = VisString;
//     }

// }

// let stringas1 = B[0].split(' ') ;
// console.log(stringas1.length)
// console.log(B[0].split(' '))

let maxWords = 0;
let stringWithMostWords = '';

function countWordsInString(str) {
    let wordCount = 0;

    if (str.length === 0) {
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && (str[i + 1] === ' ' || i === str.length - 1)) {
            wordCount++;
        }
    }
    if (wordCount > maxWords) {
        maxWords = wordCount;
        stringWithMostWords = str;
    }
}
function findStringWithMostWords(strings) {
    for (let i = 0; i < B.length; i++) {
        const currentString = B[i];
        countWordsInString(currentString);
    }

    return stringWithMostWords;
}

const result = findStringWithMostWords(B);
console.log(`Stringas su daugiausia žodžių: "${result}"`);

// Surasti stringą su mažiausiai žodžių;

