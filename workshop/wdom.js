console.log('bandome is naujo');

const count = document.querySelector('.count');
const substract = document.querySelector('.substract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const buttons = document.querySelector('.buttons');

// buttons.addEventListener('click', function (e) {
//     if (e.target.classList.contains('add')) {
//         count.innerHTML++;
//         setColor();
//     }
//     else if (e.target.classList.contains('substract')) {
//         count.innerHTML--;
//         setColor();
//     }
//     else if (e.target.classList.contains('reset')) {
//         count.innerHTML=0;
//         setColor();
//     }
// })





add.addEventListener('click',function(){
    count.innerHTML++ 
    // count.textContent++
    // count.style.color = 'red'
});

const substractFunc = ()=> {
    count.innerHTML--

    // count.textContent--
    // count.style.color = 'blue'
}

// substract.addEventListener('click',function(){
//     count.innerHTML-- 
// })


substract.addEventListener('click',substractFunc)

reset.addEventListener('click',function () {
    count.innerHTML = 0 
})

const setColor =function () {
    if (count.innerHTML > 0) {
        count.style.color='red';
    }
    else if (count.innerHTML < 0) {
        count.style.color='blue'
    }
    else {count.style.color='white'}
}
  