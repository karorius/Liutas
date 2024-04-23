console.log('Dom judam toliau')




// const obj = {
//     smartAnimal32: 'fox',
//     funnyAnimal88:'Racoon',
//     BigAnimal105: 'Wolf'
// }
// const regex = /\d+/g;

// for(const a in obj) { 
//   const found = a.match(regex)
//   console.log(obj[a],found[0]);
// }


const i1 = document.querySelector('.i1');
const btn = document.querySelector('button');
btn.addEventListener('click', _ => {
 // norint surasti i1 ka mes ten uzrasome 
    const /*value*/ v = i1.value;
    // console.log('click');
    console.log('click',v)
    
})
i1.addEventListener('input', _ => {
    const /*value*/ v = i1.value;
    // console.log('click');
    console.log('input',v)
})

// const a1 = document.querySelector('.a1');
// const a2 = document.querySelector('.a2');

// const mult = document.querySelector('.calc button');

// mult.addEventListener('click', _ => {
//     const a = a1.value;
//     const b = a2.value;
//     const rez = a * b;
//     console.log('click', rez);
// });


// Kadangi jeigu irasome raides mes daugyboje gauname Nan tada reikia paversti i sveikus skaicius

const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');

const mult = document.querySelector('.calc button');
// Visada nuskaito stringus ir jas reikia paversti i nesveikus skaicius
// arba i sveikus skaicius parseInt

mult.addEventListener('click', _ => {
    const a = parseFloat(a1.value);
    const b = parseFloat(a2.value);

    a1.style.borderColor = 'black';
    a2.style.borderColor = 'black';
    // VALIDACIJA

    if (isNaN(a) || isNaN(b)) {
        console.log('Įvesti ne skaičiai');
        if (isNaN(a)) {
            a1.style.borderColor = 'crimson';
        }
        if (isNaN(b)) {
            a2.style.borderColor = 'crimson';
        }

    } else {
        // Norint kad pataisius nebedegtu raudonas borderis darome taip
        const rez = a * b;
        
        console.log('REZ:', rez);
    }
});
    
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', _ => {

    parent.style.backgroundColor = 'crimson';

});

child.addEventListener('click', event => {

    event.stopPropagation();

    child.style.backgroundColor = 'brown';

}); 






































// const i1 = document.querySelector('.i1');
// const btn = document.querySelector('button');

// btn.addEventListener('click',_ => {
//     const v = i1.value;
//     console.log('click',v)
// })

// const a1 = document.querySelector('.a1');
// const a2 = document.querySelector('.a2');
// const mult = document.querySelector('.calc button');
// if (isNaN(v1) || isNaN(v2)) {
//     console.log
// }
// mult.addEventListener('click',_ => {

//     const v1 = parseFloat(a1.value);

//     const v2 = parseFloat(a2.value);

//     const rez = v1+v2

//     console.log(rez,v1,v2)
// })










