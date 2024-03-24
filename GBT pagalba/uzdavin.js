Atspausdinti penkias eilutes "Labas":
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log('Labas');
}
Atspausdinti skaičius nuo 0 iki 4 (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
Atspausdinti skaičius nuo 0 iki 40, pridedant po 10 kiekviename žingsnyje (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}
Atspausdinti skaičius nuo 49 iki 53 (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 49; i < 54; i++) {
    console.log(i);
}
Atspausdinti skaičius nuo 4 iki 0 (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
Atspausdinti skaičius nuo 0 iki 8, pridedant po 2 kiekviename žingsnyje (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i * 2);
}
Atspausdinti penkis skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje):
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 11));
}
Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, paskutinis skaičius turi būti 5:
javascript
Copy code
let skaicius;
do {
    skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
} while (skaicius !== 5);
Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kol jų suma viršija 100:
javascript
Copy code
let suma = 0;
let cikloSkaicius = 0;

while (suma <= 100) {
    let skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    suma += skaicius;
    cikloSkaicius++;
}

console.log('Ciklų skaičius:', cikloSkaicius);
Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, paskutinis skaičius turi būti 5 arba 7, suskaičiuoti kiek ciklų prasisuko:
javascript
Copy code
let skaicius;
let cikluSkaicius = 0;

do {
    skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    cikluSkaicius++;
} while (skaicius !== 5 && skaicius !== 7);

console.log('Ciklų skaičius:', cikluSkaicius);
Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų:
javascript
Copy code
let suma = 0;
let cikluSkaicius = 0;

while (suma <= 20 || cikluSkaicius <= 11) {
    let skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    suma += skaicius;
    cikluSkaicius++;
}

console.log('Ciklų skaičius:', cikluSkaicius);
Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kol bus sugeneruoti trys nelyginiai skaičiai:
javascript
Copy code
let nelyginiuSkaiciuSkaicius = 0;

while (nelyginiuSkaiciuSkaicius < 3) {
    let skaicius = Math.floor(Math.random() * 11);
    if (skaicius % 2 !== 0) {
        console.log(skaicius);
        nelyginiuSkaiciuSkaicius++;
    }
}
Atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje), kol neiškris abu vienodi skaičiai:
javascript
Copy code
let pirmas;
let antras;

do {
    pirmas = Math.floor(Math.random() * 11);
    antras = Math.floor(Math.random() * 11);
    console.log(pirmas, antras);
} while (pirmas !== antras);
Atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose, kol kiekviena iš sumų bus daugiau nei 100:
javascript
Copy code
let pirmoSkaiciausSuma = 0;
let antroSkaiciausSuma = 0;

while (pirmoSkaiciausSuma <= 100 || antroSkaiciausSuma <= 100) {
    let pirmas = Math.floor(Math.random() * 11);
    let antras = Math.floor(Math.random() * 11);
    console.log(p