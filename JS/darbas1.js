console.log('Mentoriaus uzduotis');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// / Sukurkite tris kintamuosius su skirtingais sveikais skaičiais nuo 5 iki 25
const num1 = rand(5,25);
const num2 = rand(5,25);
const num3 =rand(5,25);
console.log(num1,num2,num3);

// Paskaičiuokite jų sumą ir atspausdinkite
const sum = num1 + num2 + num3;
console.log("Suma:", sum);

// Sudėkite skaičius į string'ą ir atspausdinkite
const skaiciusStringe = num1.toString() +' '+ num2.toString()+' ' + num3.toString();
console.log("Skaičiai kaip string'as:", skaiciusStringe);

// Sudėkite skaičius į string'ą su tarpais ir atspausdinkite
const skaiciusSuTarpais = num1.toString() + " " + num2.toString() + " " + num3.toString();
console.log("Skaičiai kaip string'as su tarpais:",skaiciusSuTarpais);

// Sukurkite kintamąjį, kuriam priskirkite tarpus ir sumą gale
const skaiciusSuTarpaisSum = `${num1} ${num2} ${num3} ${sum}`;
console.log("Skaičiai su tarpais ir suma:", skaiciusSuTarpaisSum);

// Sukurkite kintamąjį su atsitiktiniu skaičiumi nuo 5 iki 10 ir atspausdinkite
const randomNum = rand(5,10);
console.log("Atsitiktinis skaičius:", randomNum);

// Sukurkite kintamąjį su tekstu "Labas" ir jį atspausdinkite 5 kartus naudodami ciklą
const tekstas1 = "Labas";
for (let i = 0; i < 5; i++) {
    console.log(tekstas1);
}

// Atspausdinkite skaičius iš 1 uždavinio 7 kartus naudodami ciklą
for (let i = 0; i < 7; i++) {
    console.log(skaiciusSuTarpais);
}

// Atspausdinkite skaičius iš 1 uždavinio tiek kartų, koks yra sugeneruotas skaičius
for (let i = 0; i < randomNum; i++) {
    console.log(skaiciusSuTarpais);
}

// Atspausdinkite skaičius iš 1 uždavinio tiek kartų, koks yra sugeneruotas skaičius, jei jis didesnis nei 7
for (let i = 0; i < randomNum; i++) {
    if (num1 > 7 && num2 > 7 && num3 > 7) {
        console.log(skaiciusSuTarpais);
    }
}

// Deklaruokite kintamąjį už ciklo ribų
let totalSum = 0;

// Ciklas generuoja atsitiktinius skaičius ir priskiria kintamajam už ciklo ribų
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    totalSum += randomNum;
    console.log("Sugeneruotas skaičius:", randomNum);
}

// Atspausdinkite ciklo viduje sugeneruotų skaičių sumą
console.log("Suma už ciklo ribų:", totalSum);

// Ciklas generuoja atsitiktinius skaičius ir juos prideda prie string'ų su tarpais
let finalString = "";
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    finalString += randomNum.toString() + " ";
}
console.log("String'as su tarpais:", finalString.trim());

// Ciklas generuoja atsitiktinius skaičius ir juos prideda prie string'ų su tarpais bei prideda sumą
let finalStringWithSum = "";
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    finalStringWithSum += randomNum.toString() + " ";
}
finalStringWithSum += totalSum.toString();
console.log("String'as su tarpais ir suma:", finalStringWithSum);

// Ciklas generuoja atsitiktinius skaičius, kol sugeneruotas skaičius mažesnis nei 12
let count = 0;
while (true) {
    const randomNum = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    if (randomNum < 12) {
        totalSum += randomNum;
        count++;
    } else {
        break;
    }
}

// Atspausdinkite sugeneruotą skaičių ir iteracijų kiekį
console.log("Sugeneruotas skaičius už ciklo ribų:", randomNum);
console.log("Iteracijų kiekis:", count);