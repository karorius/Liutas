console.log('Dom workshop');
const count = document.querySelector('.count')
const Subtract = document.querySelector('.Subtract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');

// yra du budai irasyti funkcija viduje i kitas isoreje

add.addEventListener('click', function(){
    count.innerHTML++
})
Subtract.addEventListener('click', function(){
    count.innerHTML--
})


// const substractFunc = ()=> {
//     count.innerHTML--
// }

// Subtract.addEventListener('click', substractFunc )
reset.addEventListener('click',function() {
    count.innerHTML=0
})


