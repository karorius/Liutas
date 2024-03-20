function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let a = rand(5,25)
let b = rand(5,25)
let c = rand(5,25)
let sum = a + b + c;
console.log("Suma:", sum);
let numbersAsString = a.toString() + b.toString() + c.toString();
console.log("Skaičiai kaip stringas:", numbersAsString);
let numbersWithSpaces = a.toString() + " " + b.toString() + " " + c.toString();
console.log("Skaičiai su tarpais:", numbersWithSpaces);
let numbersWithSpacesAndSum = numbersWithSpaces + " " + sum.toString();
console.log("Skaičiai su tarpais ir suma:", numbersWithSpacesAndSum);
let randomNumber = rand(5, 10);
console.log("Atsitiktinis skaičius:", randomNumber);
let message = "Labas";
for (let i = 0; i < 5; i++) {
    console.log(message);
}
