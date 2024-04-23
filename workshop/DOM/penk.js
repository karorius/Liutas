console.log('pasitikriname zinias');

// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const sk = document.querySelector('.sk');
// const rai = document.querySelector('.raid');
// const btn = document.querySelector('button');

// btn.addEventListener('click',_ => {
//     let sk1 = rand(1,6);
//     let raid1 = rand (1,6);
//     if (sk1 == 3 ) {
//         console.log(sk);
//     } if (raid1 >3 ) { console.log(raid1)}
//     sk.innerHTML = sk1;
//     rai.innerHTML = raid1 ;
// })
const container = document.querySelector('.container');
const hex =document.querySelector('span');
const btn = document.querySelector('button');
const body = document.querySelector('body');

const generateHexColor =() => {
    const randomColor = Math.random().toString(16).substring(2,8)
    container.style.backgroundColor = '#' + randomColor
    hex.innerHTML = '#' + randomColor

};
btn.addEventListener('click', generateHexColor);
body.addEventListener('mousewhell',generateHexColor);
