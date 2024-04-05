function blueDash(){
    console.log('%c ----------','color: blue')};

    for(let i = 0; i < 10 ; i++) {
        blueDash();
    };
   
function sum(a,b) {
    const rez = a+b;
    console.log(rez);
} ;
sum(4,5);

// function spausdintiTeksta(tekstas) {
//     console.log(tekstas);
// }

// spausdintiTeksta("Blogiausia žvejyba - geriau nei namuose!");

function sum(a) {
    const rez = a*6;
    console.log(rez);
} ;


function daugyba(x) {
    console.log(x*6);
} ;
sum(5);
console.clear();
function daugyba(x, y = 6) {
    const rez = x * y;
    console.log(rez);
} ;
daugyba(8,7); 
// Jeigu bus ištrinta reiksme 7 tai bus panaudota y=6
console.clear();
function megaSum(...all) {
    rez = 0;
    for(let i = 0; i < all.length; i++) {
        rez += all[i];
    }
    console.log(rez);
}
megaSum(10,10,10,10,10);
console.clear();

function lastLetter(word) {
    const size = word.length;
    const last = word[size-1];
    console.log(last);

}
lastLetter('magnum');



twoWordsWithDash('labas');
function twoWordsWithDash(w1, w2 ) {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('labas', 'rytas');
twoWordsWithDash('labas')






console.clear();

function twoWordsWithDash(w1, w2 = 'nenurodyta') {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('labas', 'rytas');

twoWordsWithDash('labas');

// FUNKCIJOS KURIOS GRAZINA KA NORS

function returnSum(a, b) {
    const rez = a + b;
    return rez;
}

const s1 = returnSum(8, 5);

console.log(s1);


// 3. Parašyti funkciją, kuri gauna skaičių ir grąžina to skaičiaus kvadratą.

function kvadratu(x) {
    const rez = x * x;
    return rez;
}

const k1 = kvadratu(4);

console.log(k1);


function wt(){
    return 'labas';
    console.log('niekada nebus atspausdinta');
}

const w = wt();

console.log(w);


function wordIsLongerThan5Letters(word) {
    if (word.length > 5) {
        return true;
    }
    return false;
}

console.clear();

console.log('Aš', wordIsLongerThan5Letters('Aš'));

console.log('einu', wordIsLongerThan5Letters('einu'));

console.log('grybauti', wordIsLongerThan5Letters('grybauti'));



function multiAndSum(a, b) {
    const rezMulti = a * b;
    const rezSum = a + b;
    const rez = [rezMulti, rezSum];
    return rez; 
}


const [a, b] = multiAndSum(4, 5);

console.log(a, b);

console.clear();


function mult10(a) { // funkcija
    return a * 10;
}

function mult10(a) { // funkcija
    return a * 30;
}


const mult10f = function(a) { // anoniminė funkcija
    return a * 10;
}

// const mult10a = (a) => {
//     return a * 10;
// }

// const mult10a = (a) => a * 10;


// const mult10a = a => a * 10;




const mult10a = a => a * 11; // arrow funkcija



console.log(mult10f);

console.log(mult10(4));

console.log(mult10f(4), typeof mult10f);

console.log(mult10a(4), typeof mult10a);
console.clear();

function spausdintiTeksta(tekstas) {
    console.log(tekstas);
}

// spausdintiTeksta("Blogiausia žvejyba - geriau nei namuose!");

// nuo cia uzmutinta

// function tekstasPlus(tekstas, kartai) {
//     for (let i = 0; i < kartai; i++) {
//         spausdintiTeksta(tekstas);
//     }
// }
// tekstasPlus("Blogiausia žvejyba - geriau nei namuose!",5)




// function dalyba(skaicius) {
//     let dalyba = 0;
  
//     for (let i = 2; i <= skaicius / 2; i++) {
//         if (skaicius % i === 0) {
//             dalyba++;
//         }
//     }

//     return dalyba;
    
// }

// console.log(dalyba(7));


// function tekstas(zodis,kartai) {
//     for(let i = 0; i <= kartai; i++) {
//     console.log(zodis)
//     }

//     return tekstas;
// }

// tekstas('labas',5);



function twoWordsWithDash(w1, w2 = 'nenustatytas' ) {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('labas', 'rytas');
twoWordsWithDash('labas')

const masyvas = ['cat', 'dog', 'elephant', 'horse', 'rabbit'];




// function graza =arr => arr[arr.length - 1]
function gautiViduriniElementa(masyvas) {
    const vidurinisIndeksas = Math.floor(masyvas.length / 2);
    return masyvas[vidurinisIndeksas];
}

// Pavyzdiniai kvietimai funkcijai

const vidurinis = gautiViduriniElementa(masyvas);
console.log('Vidurinis elementas :', vidurinis); // Spausdins: Vidurinis elementas 1: c

const masyvas2 = [1, 2, 3, 4, 5, 6, 7];
const vidurinis2 = gautiViduriniElementa(masyvas2);
console.log('Vidurinis elementas 2:', vidurinis2); // Spausdins: Vidurinis elementas 2: 4

console.clear();



const sum7 = (a, b) => a + b ;
    // const rez7 = sum7(4,5);
    

    // console.log(rez7);
    const niceCalk = (r) => {
        console.log( '%c'+ r, 'color:blue');
    }
    niceCalk(sum(2,3));

    const animals = ['cat', 'dog', 'elephant', 'horse', 'rabbit'];

    animals.forEach(gyvunas => {
        if(gyvunas.length>4) {
            console.log(gyvunas)
        }
    })
        
    animals.forEach(animal=> console.log(animal[0]));

    function H1text(text) {
        document.body.innerHTML = text;
      }
       
      H1text("Hello");
       
      function H1text(text) {
        var H = document.getElementsByTagName("h1");
        H.innerHTML = text;
      }
       
      H1text("Hello");