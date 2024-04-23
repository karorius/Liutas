console.log('namu darbai');

const figures = [
    {id: 1, name: 'one', color: 'red', figure: 'circle'},
    {id: 2, name: 'two', color: 'green', figure: 'triangle'},
    {id: 3, name: 'three', color: 'blue', figure: 'square'},
    {id: 4, name: 'four', color: 'yellow', figure: 'circle'},
    {id: 5, name: 'five', color: 'orange', figure: 'triangle'},
    {id: 6, name: 'six', color: 'gray', figure: 'square'},
    {id: 7, name: 'seven', color: 'black', figure: 'circle'},
    {id: 8, name: 'eight', color: 'brown', figure: 'triangle'},
    {id: 9, name: 'nine', color: 'skyblue', figure: 'square'},
];


const sod = document.querySelector('h1');
let textInside = sod.innerText;
sod.innerText = 'Zoo parkas';
console.log(textInside );

// const zv = document.querySelector('i');
// zv.innerText = '***'

sod.style.color = 'red';
const id = document.querySelector('#contacts');
console.log(id);

const element = document.querySelector('#contacts'); 
console.log(element.innerHTML); 

const itag = document.querySelector('i + i');
let textInside1 = itag.innerText;
console.log(textInside1 );

console.log('---------4-------')

const nauji= document.querySelectorAll('li.new')
nauji.forEach(a => {
    console.log(a.textContent); 
   });
console.log('-----------5-------------');

    const h2Elements = document.querySelectorAll('.main');

h2Elements.forEach(a => {
    if (a.innerHTML.includes('<span>Atsinaujinom</span>')) {
        const updatedHTML = a.innerHTML.replace('<span>Atsinaujinom</span>', '');
        a.innerHTML = updatedHTML;
    }
    a.style.color = 'blue';
    console.log(a.innerText); 
});

console.log('----------6-------------');


// Surasti ir atspausdinti paskutinius du naujus žirafų elementus
const naujZ= document.querySelectorAll('#zirafos li.new'); // Surinkti visus naujus žirafus su klase "new"
// Tikrinti, ar yra bent du nauji žirafai
if (naujZ.length >= 2) {
    // Paimti paskutinius du naujus žirafus iš sąrašo
    const paskutiniaiDu = naujZ[naujZ.length - 2]; //  priešpaskutinis naujas žirafas
    const paskutinis = naujZ[naujZ.length - 1]; // Paskutinis naujas žirafas

    // Išspausdinti paskutinius du naujus žirafus
    console.log(paskutiniaiDu.textContent);
    console.log(paskutinis.textContent);
} 

console.log('-------7--------')

const gyvunuSarasai = {
    'Žirafos': document.querySelectorAll('#zirafos li').length,
    'Plėšrūnai': document.querySelectorAll('#plesrunai li').length,
    'Gyvatės': document.querySelectorAll('#gyvates li').length,
    'Žoliaėdžiai': document.querySelectorAll('#zoliaedziai li').length
};

// Rasti maksimalų gyvūnų skaičių
let maksimalusGyvunuSkaicius = 0;
let daugiausiaiGyvunuRusis = '';

for (const rūšis in gyvunuSarasai) {
    if (gyvunuSarasai[rūšis] > maksimalusGyvunuSkaicius) {
        maksimalusGyvunuSkaicius = gyvunuSarasai[rūšis];
        daugiausiaiGyvunuRusis = rūšis;
    }
}

// Išspausdinti rezultatą į konsolę
console.log(`Daugiausiai gyvūnų yra "${daugiausiaiGyvunuRusis}" su ${maksimalusGyvunuSkaicius} gyvūnais.`);

const i = document.querySelector
console.log('------------------------');



// const h2Elements = document.querySelectorAll('.main');

// h2Elements.forEach(el => {
//     const text = el.innerHTML;
//     if (!text.includes('Atsinaujinom')) {
//         el.style.color = 'blue'; 
//         console.log(text);
//     }
// });
console.log('---------------B7----------------')

const zol = document.querySelectorAll('ul#zoliaedziai li')
console.log(zol)
zol.forEach(z => {
    if (z.innerText == 'Laukinė kiaulė') {
        z.remove();
    }
})


const colorSelect = document.getElementById('colorSelect');

    // Sukurkite Set objektą, kad surinktumėte unikalias spalvas
    const uniqueColors = new Set(figures.map(item => item.color));

    // Pridėkite kiekvieną unikalų spalvos variantą į select elementą
    uniqueColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
const cb = document.querySelector('section');
    figures.forEach(f => {
const input = document.createElement('input');
input.setAttribute('type','checkbox')
const div = document.createElement('div');
const fig = document.createElement('div');
fig.classList.add(f.figure);
fig.classList.add(f.small);
if (f.figure == 'triangle') {
    fig.style.borderBottomColor = f.color;
} else {
    fig.style.backgroundColor=f.color
}if (defaultc)
div.appendChild(input);
div.appendChild(fig);
cb.appendChild(div);
    })