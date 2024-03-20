function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25
let num1 = rand(5, 25);
let num2 = rand(5, 25);
let num3 = rand(5, 25);

// 2. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Atspauzdinkite sumą
let sum = num1 + num2 + num3;
console.log("Suma:", sum);

// 3. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite
let numbersAsString = num1.toString() + num2.toString() + num3.toString();
console.log("Skaičiai kaip stringas:", numbersAsString);

// 4. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite
let numbersWithSpaces = num1.toString() + " " + num2.toString() + " " + num3.toString();
console.log("Skaičiai su tarpais:", numbersWithSpaces);

// 5. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą. Atspausdinkite gautą stringo tipo kintąmąjį
let numbersWithSpacesAndSum = numbersWithSpaces + " " + sum.toString();
console.log("Skaičiai su tarpais ir suma:", numbersWithSpacesAndSum);

// 6. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite
let randomNumber = rand(5, 10);
console.log("Atsitiktinis skaičius:", randomNumber);

// 7. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus
let message = "Labas";
for (let i = 0; i < 5; i++) {
    console.log(message);
}

// Tęskite analogiškai su kitais uždaviniais...