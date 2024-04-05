console.log("viskas is naujo");
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Penkios eilutės su tekstu "Labas":

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}
// Penkiose eilutėse atspausdinti skaičius 0 iki 4:

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Penkiose eilutėse atspausdinti skaičius 0, 10, 20, 30, 40:

for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}
// Penkiose eilutėse atspausdinti skaičius 49, 50, 51, 52, 53:

for (let i = 0; i < 5; i++) {
    console.log(49 + i);
}
// Penkiose eilutėse atspausdinti skaičius 4, 3, 2, 1, 0:

for (let i = 4; i >= 0; i--) {
    console.log(i);
}
// Penkiose eilutėse atspausdinti skaičius 0, 2, 4, 6, 8:

for (let i = 0; i < 5; i++) {
    console.log(i * 2);
}
// Penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10:

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 11); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 10
    console.log(randomNumber);
}

// Atsitiktiniai skaičiai iki 10, paskutinis skaičius turi būti 5:

let sum = 0;
let count = 0;

while (sum <= 100) {
    const randomNumber = Math.floor(Math.random() * 11); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 10
    console.log(randomNumber);
    sum += randomNumber;
    count++;
    if (randomNumber === 5) {
        break;
    }
}
console.log(`Ciklų skaičius: ${count}`);
// Atsitiktiniai skaičiai iki 10, suma viršija 100:

let sum1 = 0;
let count1 = 0;

while (sum1 <= 100) {
    const randomNumber = Math.floor(Math.random() * 11); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 10
    console.log(randomNumber);
    sum1 += randomNumber;
    count1++;
}
console.log(`Ciklų skaičius: ${count1}`);
// Atsitiktiniai skaičiai iki 10, paskutinis skaičius turi būti 5 arba 7:

let sum2 = 0;
let count2 = 0;

while (sum2 <= 20 || count <= 11) {
    const randomNumber = Math.floor(Math.random() * 11); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 10
    console.log(randomNumber);
    sum2 += randomNumber;
    count2++;
    if (randomNumber === 5 || randomNumber === 7) {
        break;
    }
}
console.log(`Ciklų skaičius: ${count2}`);
// Trys nelyginiai skaičiai nuo 0 iki 10:
let oddCount = 0;
let count3 = 0;

while (oddCount < 3) {
    const randomNumber = Math.floor(Math.random() * 11); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 10
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber);
        oddCount++;
    }
    count3++;
}
console.log(`Ciklų skaičius: ${count3}`);




// Funkcija, kuri atspausdina pasveikinimą su vardu:

function greet(name) {
    console.log(`Labas, ${name}`);
}

// Pavyzdys naudojant funkciją
greet('Elena');
// Funkcija, kuri grąžina simbolių skaičių tekste:

function countCharacters(text) {
    return text.length;
}

// Pavyzdys naudojant funkciją
const text = 'Labas, Elena';
const charCount = countCharacters(text);
console.log(`Simbolių skaičius: ${charCount}`);

// Funkcija, kuri grąžina vardą ir pavardę su didžiosiomis raidėmis:

function capitalizeName(name, last_name) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${last_name.charAt(0).toUpperCase()}${last_name.slice(1)}`;
}

// Pavyzdys naudojant funkciją
const fullName = capitalizeName('jonas', 'jonaitis');
console.log(fullName);

// Funkcija, kuri sugeneruoja 3 atsitiktinius skaičius nuo 0 iki 5:

function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * 6));
    }
    console.log(numbers.join(', '));
}

// Pavyzdys naudojant funkciją
generateRandomNumbers();
// Funkcija, kuri sugeneruoja masyvą su atsitiktiniais skaičiais pagal nurodytus intervalus ir limitą:

function generateRandomArray(from, to, limit) {
    const result = [];
    for (let i = 0; i < limit; i++) {
        const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
        result.push(randomNumber);
    }
    return result;
}

// Pavyzdys naudojant funkciją
const randomArray = generateRandomArray(1, 10, 5);
console.log(randomArray);
// Funkcija, kuri pakelia skaičių n laipsniu:

function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Pavyzdys naudojant funkciją
const result = power(2, 3); // Rezultatas: 2^3 = 8
console.log(result);
// Funkcija, kuri įterpia tekstą į h1 tagą ir atvaizduoja naršyklėje:


function displayTextInHeading(text) {
    document.body.innerHTML += `<h1>${text}</h1>`;
}

// Pavyzdys naudojant funkciją
displayTextInHeading('Mano tekstas');






















const m1 = [ 
    [1,2,3,],
    [4,5,6,]
]
const m2 = m1;
console.log('m1 === m2',m1 === m2);
m2 [0][0]= 1000
const m3 = [...m1];
console.log('m1 === m3',m1 === m3);
m3[0][1] = 2000;
console.table(m1);

m4 = structuredClone(m1)
console.log('m1 === m4',m1 === m4);
m4[0][2] = 3000;

console.table(m1);