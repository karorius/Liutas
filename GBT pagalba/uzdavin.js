function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Atspausdinti penkias eilutes "Labas":
// javascript
// Copy code
for (let i = 0; i < 5; i++) {
    console.log('Labas');
}
// Atspausdinti skaičius nuo 0 iki 4 (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Atspausdinti skaičius nuo 0 iki 40, pridedant po 10 kiekviename žingsnyje (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}
// Atspausdinti skaičius nuo 49 iki 53 (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 49; i < 54; i++) {
    console.log(i);
}
// Atspausdinti skaičius nuo 4 iki 0 (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
// Atspausdinti skaičius nuo 0 iki 8, pridedant po 2 kiekviename žingsnyje (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 0; i < 5; i++) {
    console.log(i * 2);
}
// Atspausdinti penkis skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje):
// javascript
// Copy code
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 11));
}
// Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, paskutinis skaičius turi būti 5:
// javascript
// Copy code
let number;
do {
    number = Math.floor(Math.random() * 11);
    console.log(number);
} while (number !== 5);
// Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kol jų suma viršija 100:
// javascript
// Copy code
let sum = 0;
let cikloSkaicius = 0;

while (sum <= 100) {
    let skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    sum += skaicius;
    cikloSkaicius++;
}

console.log('Ciklų skaičius:', cikloSkaicius);
// Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, paskutinis skaičius turi būti 5 arba 7, suskaičiuoti kiek ciklų prasisuko:
// javascript
// Copy code
let skaicius;
let ciklusk = 0;

do {
    skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    ciklusk++;
} while (skaicius !== 5 && skaicius !== 7);

console.log('Ciklų skaičius:', ciklusk);
// Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų:
// javascript
// Copy code
let sum1 = 0;
let ciklusks= 0;

while (sum1 <= 20 || ciklusks <= 11) {
    let skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    sum1 += skaicius;
    ciklusks++;
}

console.log('Ciklų skaičius:', ciklusks);
// Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, kol bus sugeneruoti trys nelyginiai skaičiai:
// javascript
// Copy code
let nelyginiuSkaiciuSkaicius = 0;

while (nelyginiuSkaiciuSkaicius < 3) {
    let skaicius = Math.floor(Math.random() * 11);
    if (skaicius % 2 !== 0) {
        console.log(skaicius);
        nelyginiuSkaiciuSkaicius++;
    }
}
// Atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje), kol neiškris abu vienodi skaičiai:
// javascript
// Copy code
let pirmas;
let antras;

do {
    pirmas = Math.floor(Math.random() * 11);
    antras = Math.floor(Math.random() * 11);
    console.log(pirmas, antras);
} while (pirmas !== antras);
////////
let suma1 = 0;
let suma2 = 0;

while (suma1 <= 100 || suma2 <= 100) {
    let skaicius1 = rand(0, 10);
    let skaicius2 = rand(0, 10);

    console.log(skaicius1, skaicius2);

    suma1 += skaicius1;
    suma2 += skaicius2;
}

console.log("Pirmos sumos:", suma1);
console.log("Antros sumos:", suma2);
//     Atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10, paskutinis skaičius turi būti 5 arba 7, suskaičiuoti kiek ciklų prasisuko:
// javascript
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function generateRandomUntil5or7() {
    let count = 0;
    let randomNumber;

    while (true) {
        randomNumber = rand(0, 10);
        console.log(randomNumber);
        count++;
        if (randomNumber === 5 || randomNumber === 7) {
            break;
        }
    }

    console.log("Ciklų skaičius:", count);
}

generateRandomUntil5or7();
// Ši funkcija, generateRandomUntil5or7(), generuoja atsitiktinius skaičius nuo 0 iki 10 ir juos spausdina, kol randamas skaičius 5 arba 7. Taip pat ji suskaičiuoja, kiek ciklų reikėjo, norint pasiekti šį tikslą, ir tai atspausdina.


// Sukuria kintamąjį count, priskiria jam reikšmę 0, skirtą saugoti ciklų skaičiui.
// Sukuria kintamąjį randomNumber, kuriame bus saugomas atsitiktinis sugeneruotas skaičius.
// Pradeda begalinį ciklą naudodama while (true).
// Kiekvieno ciklo metu sukuria naują atsitiktinį skaičių nuo 0 iki 10 naudodama funkciją rand(min, max).
// Atspausdina šį sugeneruotą skaičių.
// Didina count kintamąjį vienetu, nes buvo atliktas naujas ciklas.
// Patikrina, ar sugeneruotas skaičius yra 5 arba 7. Jei taip, nutraukia ciklą su break.
// Baigęs ciklą, atspausdina kiek buvo ciklų sukonstruota.
// Tai pagrindinė funkcija, kurią galite iškviesti, kad atliktų nurodytus veiksmus.

//4. Surasti ir išspausdinti mažiausią skaičių

// let min = newMD2[0][0];

// for (let i = 0; i < newMD2.length; i++) {
//     for (let j = 0; j < newMD2[i].length; j++) {
//         if (newMD2[i][j] < min) {
//             min = newMD2[i][j];
//         }
//     }
// }

console.clear();

// console.log(newMD2);
// console.log(min);


// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.clear();

// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, rand() funkcija generuokite atsitiktinį automobilio greitį o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.

let totalSpeed = 0;

for (let i = 0; i < 10; i++) {
    const speed = rand(120, 220);
    console.log(speed);
    totalSpeed += speed;
}

const averageSpeed = totalSpeed / 10;

console.log('Average speed:', averageSpeed);



// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Jo kuro bake liko 44 litrai kuro. Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų. Kurui pasibaigus ciklą nutraukite anksčiau laiko. 

let fuel = 44;

for (let i = 0; i < 10; i++) {
    const usage = rand(3, 6);
    fuel -= usage;
    if (fuel <= 0) {
        break;
    }
    console.log( i + 1, usage);
}

if (fuel > 0) {
    console.log('Fuel left:', fuel);
} else {
    console.log('Out of fuel', fuel);
}

console.clear();

// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). Kiekviename žiede yra 5 posūkiai, kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) ir ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.

let minSpeed = 121;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const speed = rand(20, 120);
        console.log(speed);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
    }
}

console.log('Min speed:', minSpeed);

console.clear();

// (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai: netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite. Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

let km = 0;
let kangaroo;
let steering;
let brakes;

do {
    kangaroo = !!rand(0, 1);
    steering = !!rand(0, 1);
    brakes = !!rand(0, 1);
    console.log(km, kangaroo, steering, brakes);
    km++;
} while (!kangaroo || steering || brakes);







