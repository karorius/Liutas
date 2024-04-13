console.log('kas bus toliau');
window.addEventListener('load', _ => {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

const body = document.querySelector('body');

// body.innerHTML = '<h1> DOM 2</h1>';

// let karodyti ;
// if(rand(0,2) == 0 ) {
//     karodyti = '<h1> BUM </h1>';
// }else if (rand(0,2) == 2) {
//     karodyti = '<h2> O La La </h2>';
// }else {
//     karodyti ='<h3> Paskutinis </h3>';
// }
// body.innerHTML = karodyti;

// body.innerHTML = rand(0,1) == 0 ? '<h1> BUM </h1>' : '<h2> O La La </h2>';
// cia vienos eilutes kodas  bet jis tinka tik su if vienu

// Kaip ideti jau sukurtame tage h1 <span> valio </span>'

// if(document.querySelector('h1') ) {
//     document.querySelector('h1').innerHTML = '<span> Valio <span>'
// }
// Jeigu musu surastame dokumente yra h1 tai irasome span
// if(document.querySelector('h2') ) {
//     document.querySelector('h2').innerHTML = '<span> Valio <span>'
// }
    
const animals = document.querySelectorAll('.animals span');
//  su querySelectorAll visada gausime masyva

// console.log(animals);
animals.forEach(animal => console.log(animal.innerText))

// Jeig norime atlikti veiksmus kaip su masyvu mes turime sukurti nauja masyva

const animalArray = [...animals];
console.log(animalArray);

// Jeigu norime pakeisti gyvuna atliekame sekancius veiksmus

// animals.forEach(a => a.innerText == 'Rabbit' && (a.innerText = 'Bunny'));

animals.forEach(a => {
    if(a.innerText == 'Rabbit') {
        a.innerText = 'Bunny'
    }
});

const h1 = document.querySelector('h1');
h1.style.color = 'Red'
h1.style.fontSize = '66px'

const blueRed = _ => {
    if (h1.style.color == 'skyblue') {
        h1.style.color = 'crimson';
    } else {
        h1.style.color = 'skyblue';
    }
}
// setInterval(blueRed, 1000);

const bin = document.querySelector('.bin');

    let divs = '';

    for (let i = 0; i < 222; i++) {
        divs += '<div></div>'
    }

    bin.innerHTML = divs;
    const balls = document.querySelectorAll('.bin div');

    const ballGo = _ => {
        balls.forEach(b => {
            if (!rand(0, 4)) {
                if (rand(0, 50)) {
                    b.style.top = Math.max(parseInt(b.style.top || 0), rand(0, 450)) + 'px';
                    b.style.left = Math.max(parseInt(b.style.left || 0), rand(0, 450)) + 'px';
                } else {
                    b.style.top = rand(0, 450) + 'px';
                    b.style.left = rand(0, 450) + 'px';
                    b.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
                }
            }
        });

    }

    // setInterval(ballGo, 200);










});