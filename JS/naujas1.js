console.log( " Naujas pasaulis")
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(1,6);
console.log("Reiksme1 :" , a );
let b = rand(1.6);

let suma = a+ b;
console.log("Reiksme2 :" , b );

if( suma > 8) {
    console.log( "laimejau");
} else {
    console.log( "pralosiau");
}

let skaicius1 = rand(1, 7);
let skaicius2 = rand(1, 7);
let skaicius3 = rand(1, 7);

let skaiciai = [skaicius1, skaicius2, skaicius3];
skaiciai.sort(function (a, b) {
  return a - b;
});
console.log('Min, Max:' + skaiciai);
let kauliukas = rand(1, 6);

// Nuspręsti, ką pirkti pagal rideno skaičių
let sprendimas;
if (kauliukas === 1 || kauliukas === 5) {
    sprendimas = 'pirkti televizorių';
} else if (kauliukas === 3 || kauliukas === 4) {
    sprendimas = 'pirkti skalbimo mašiną';
} else {
    sprendimas = 'pirkti šaldytuvą';
}

// Išvesti sprendimą
console.log(`Ridentas kauliukas: ${kauliukas}. Rekomendacija: ${sprendimas}`);
let Pilkis = rand(3, 6);
let Murklys = rand(3, 6);

if (Pilkis < Murklys) {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Lengvesnis katinas yra Pilkis');
} else if (Murklys < Pilkis) {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Lengvesnis katinas yra Murklys');
} else {
    console.log('Pilkis: ', Pilkis);
    console.log('Murklys: ', Murklys);
    console.log('Katinu svoriai vienodi');
}
let min = 7;
let vidurinis = 7;
let max = 0;

for (let i = 0; i < 3; i++) {
  let skaicius = rand(1, 7);
  if (skaicius < min) {
    min = skaicius;
  }
  if (skaicius > max) {
    max = skaicius;
  }
  if (skaicius !== min && skaicius !== max) {
    vidurinis = skaicius;
  }
}

console.log('skaičiai nuo mažiausio iki didžiausio: ' + min + ', ' + vidurinis + ', ' + max);

