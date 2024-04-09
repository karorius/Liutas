console.log('naujas bandymas Dome');
window.addEventListener('load', _ => {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

const div1 = document.querySelector('div');
const div2 = document.querySelector('div + div');

console.log(div1,div2);

const h2 = document.querySelector('h2 +h2');
console.log(h2);

const iTag = document.querySelector('span i + i');
console.log(iTag);

let textInside = iTag.innerText;
console.log(textInside);
textInside += '  negali buti kad pavyko';
iTag.innerText = textInside;

// let textInside1 = h2.innerText;
// textInside1 += '  negali buti kad pavyko';
// h2.innerText = textInside1;

// xaxa viska buvo galima uzrasyti taip

h2.innerText = 'pakeistas';

const h3 = document.querySelector('h3');
h3.innerText = 'Ka nori ?';
// const h3a = document.querySelector('h3 +h3');
// h3a.innerText = 'Nieko nenoriu ';

// arba galima taip
document.querySelector('h3 + h3').innerText = 'Nieko nenoriu';

const valio = document.querySelector('.valio');
console.log(valio);
console.log(valio.innerText);
console.log(valio.innerHTML);

valio.innerHTML ='<b>888<b>';

const ul = document.querySelector('ul');
ul.innerHTML = '<li>kaip ilgai man kol daeina</li>';

const ol = document.querySelector('ol');
// ol.innerHTML = '<li>kaip  daeina</li><li>kaip zirafai</li>';
// vietoje kabuciu dedame bactitus kurie yra zemiau esc

ol.innerHTML = `<li>kaip daeina ?</li>
                <li>kaip zirafai</li>
                <li>rytoj viska uzmirsiu</li>`
;
// bandome parasyti 10 pukiu


const Pupis = document.querySelector('.Pupis');
let z = '';
for(let i = 0; i<10; i++) {
   z += '<li>Pupis</li>'
}
console.log(z);
Pupis.innerHTML = z;

const random = document.querySelector('.random');
let c = '' ;
for(let i = 0;i < 10; i++) {
c += '<li>' + rand(1,10) + '</li>';
}
random.innerHTML = c;





});
