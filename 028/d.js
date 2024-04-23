console.log('Nauja savaite');


const animals = [
   { animal: 'Racoon', color:'skyblue'},
   {animal: 'Fox', color: 'orange'},
   {animal: 'Wolf', color: 'gray'},
   {animal: 'Rabbit', color: 'pink'}
];

let html = '<ul>';
animals.forEach(a =>  html += `<li style="color:${a.color};">` + a.animal + '</li>');
// Bet tai sunkus metodas ir interhtml budas yra brangus.Is informacijos
// (masyvo ) išrendirinom
html += '</ul>';
const test = document.querySelector('.test');
test.innerHTML = html;

// klase prisideda be tasko

test.classList.add('back');

test.classList.remove('test');
// galime pasitikrinti kokias klases. Jei yra spausdina true jei nera false

console.log(test.classList.contains('test'));
console.log(test.classList.contains('back'));

// toglinti jeigu buvo klase ja prideda jeigu yra atima

// setInterval(_ => {
//         test.classList.toggle('back'); 
//     }, 1000);
// Replace pakeicia funkcijas vietomis

// Norint ideti innerHTML budu atliekame sekancius veiksmus

const top2 = document.querySelector('.top');
top2.innerHTML = '<span> 0 <span>';
const top3 = document.querySelector('.top2');
// top2.innerHTML = '<h1>labas</h1>';

// yra kitas budas Mums reikia sukurti h1 taga
const h3 = document.createElement('h3');
const texth3 = document.createTextNode(' ka norime atspausdinti');
h3.appendChild(texth3);
test.appendChild(h3)
console.log(h3);

const h1 = document.createElement('h1');
// const h2 = document.createElement('h2');
// norint ideti teksta reikia sukurti teksto elementa tai yra noudo objektas kuriame yra tekstas

const text = document.createTextNode('Labas Dariau');
// const text2 = document.createTextNode('viso Dariau');
// sekantis zingsnis teksta ideti i h1 taga

h1.appendChild(text);
// h2.appendChild(text2);

top2.appendChild(h1);
// top2.appendChild(h2);

// top3.appendChild(h1);
// galima kazka istrinti

// h1.remove();
// top2.appendChild(h1);


// apendas tik prideda o innerHTML istrina ir prideda
// Jeigu paimame elementa jis idedamas i kita topa ir abiejose vietose jo nebus
console.log(h1);
//  Norint ideti daugiau elementu pvz ul

const ul = document.createElement('ul');
animals.forEach(a => {
    const li = document.createElement('li');
    const text = document.createTextNode(a.animal);
    li.appendChild(text);
    ul.appendChild(li);
})
test.appendChild(ul);
