console.log('Linksminames');
window.addEventListener('load', _ => {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    const animals = document.querySelectorAll('.test ul li');

animals.forEach(a => console.log(a.innerText));
console.log('------------------------');
// surandame paskutini el ul tage
const Lastli = document.querySelector('.test ul li:last-child');

Lastli.insertAdjacentHTML('afterend','<li> Bebras</li>')
console.log(Lastli)

const animal = document.querySelectorAll('.test ul li');

animal.innerHTML = '<li> Bebras2</li>'

animals.forEach((a,i) => {
    if(i % 2 == 0) {
        a.style.color = 'red';
    }else {
        a.style.color = 'blue';
    }
})

// const animals3 = document.querySelector('.test ul li');
// let textInside = 'uodega----'

// animals3.innerText = textInside
// animals3.forEach(a => {
//     if(i % 2 == 0) {
//         animals3.innerText
//     }
//     return animals3
// })

const button =document.querySelector('button')
button.addEventListener('click',e => {
    console.log('kur ku ku');
})
button.addEventListener('mouseenter',e => {
    console.log('opa',e.target);
})

// red.addEventListener('click', _ => {
//     if (red.dataset.squareColor == 'blue') {
//         red.dataset.squareColor = 'red';
//         red.style.backgroundColor = '#dc143c66';
//         red.style.borderColor = '#dc143c';
//     } else {
//         red.dataset.squareColor = 'blue';
//         red.style.backgroundColor = '#87ceeb66';
//         red.style.borderColor = '#87ceeb';
//     }
// });


}); 




