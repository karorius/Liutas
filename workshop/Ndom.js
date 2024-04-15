console.log('namu darbai');
const sod = document.querySelector('h1');
let textInside = sod.innerText;
sod.innerText = 'Zoo parkas';
console.log(textInside );

sod.style.color = 'red';
const id = document.querySelector('#contacts');
console.log(id);

const element = document.querySelector('#contacts'); 
console.log(element.innerHTML); 

const itag = document.querySelector('i + i');
let textInside1 = itag.innerText;
console.log(textInside1 )


const naujas = document.querySelector('div ul .new ')
console.log(naujas)

const nauji= document.querySelectorAll('li.new')
nauji.forEach(a => {
    console.log(a.textContent); 
   });
console.log('------------------------');

   
 


    


    console.log('------------------------');

    const H2 = document.querySelectorAll('i + div h2');

    H2.forEach((a) =>
      a.innerHTML.includes('<span>Atsinaujinom</span>')
        ? console.log(a.innerHTML.replace('<span>Atsinaujinom</span>', ''))
        : console.log(a.innerText)
    )
    a.style.color = 'blue';
    // const h2 = document.querySelectorAll('.main')
    // h2.forEach(tag => {
    //     const text = tag.textContent;
    //     if (!text.includes('Atsinaujinom')) { 
    //         console.log(text); 
            
    //     }
    // });
   

console.log('------------------------');
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




// Atspausdinti visus <h2> tagus, kurie yra viduje <main> elemento
const h2Elements = document.querySelectorAll('main h2'); // Surinkti visus <h2> elementus, kurie yra viduje <main>

h2Elements.forEach(h2 => {
    console.log(h2.textContent); // Išspausdinti <h2> teksto turinį į konsolę
});















