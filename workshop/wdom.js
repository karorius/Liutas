console.log('bandome is naujo');
window.addEventListener('load', _ => {
const count = document.querySelector('.count');
const substract = document.querySelector('.substract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const buttons = document.querySelector('.buttons');

// buttons.addEventListener('click', function (e) {
//     if (e.target.classList.contains('add')) {
//         parseInt(count.innerText)++;
//         setColor();
//     }
//     else if (e.target.classList.contains('substract')) {
//         parseInt(count.innerText)--;
//         setColor();
//     }
//     else if (e.target.classList.contains('reset')) {
//         parseInt(count.innerText)=0;
//         setColor();
//     }
// });






add.addEventListener('click',function () {
   let c = parseInt(count.innerText);
c++;
count.innerText = c;
setColor();
//     // count.textContent++;
//     // count.style.color = 'red';
});

const substractFunc = () => {
   let a = parseInt(count.innerText);
a--;
count.innerText = a;
setColor ();
};

substract.addEventListener('click',substractFunc);

// substract.addEventListener('click',function(){
//     parseInt(count.innerText)-- ;
// });

reset.addEventListener('click',function () {
    count.innerText = 0 ;
    setColor ();
});

const setColor = () => {
    if (parseInt(count.innerText) > 0) {
        count.style.color = 'yellow';
    } else if (parseInt(count.innerText) < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'white';
    }
};
});