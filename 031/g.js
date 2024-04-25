console.log('ar gausis kas nors');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
// const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado'];
// window.addEventListener('load', _ => {
// const h2 = document.querySelector('body');
// h2.innerHTML = `<h2></h2>
//                 <h2></h2>
//                 <input class="afr" type="text">
//                 <button class="btn" type="button">` ;
//      console.log(h2)  ;   
//  const mygt = document.querySelector('button');
//  mygt.addEventListener('click', _ => {
//     const sk = rand(1,6);
//     h2.innerText = sk;
//     console.log(h2);
//  })          



// const input =document.querySelector('body');
// input.innerHTML = '<input type="text">';


//   const mygt =document.querySelector('body');
//   mygt.innerHTML = '<button type="button">';
  

// let html = '<ul>';
// africa.forEach(a => html += '<li>' + a.africa + '/<li>');
// html = '</ul>';
// const body = document.querySelector('body');
// body.innerHTML = html;


// const v = document.querySelector('.count');
// const input = document.querySelector('input');

// input.addEventListener('keyup', () => {
//     v.innerHTML = input.value.length
// })


// const h21 = document.querySelector('h2')
// const h22 = document.querySelector('h2 +h2')
// const b1 = document.querySelector('.u1')
// b1.addEventListener('click', _ => {
//     const r1 = rand(1,6);
//     const r2 = rand(1,6);
//     if (r1 == r2)
//     {}
// })



// console.log('________________')
// const c1 = 'Antis';
// const c2 = 200;
// const c3 = {
//     a:'Antis',
//     w: 200
// };

// const zoo = document.querySelector('.zoo');
// zoo.dataset.a1 = c1;
// zoo.dataset.a2 = c2;
// zoo.dataset.a3 = JSON.stringify(c3);

// const readC1 = zoo.dataset.a1;
// const readC2 = zoo.dataset.a2;
// const readC3 = JSON.stringify(c3);



// console.log(readC1, typeof readC1);
// console.log(readC2, typeof readC2);
// console.log(readC3, typeof readC3);

// console.log('_____________________')

// const animal1 = 'Antis';
//     const animal2 = 200;
//     const animal3 = {
//         a: 'Antis',
//         w: 200
//     };

//     const zoo = document.querySelector('.zoo');


//     zoo.dataset.a1 = animal1;
//     zoo.dataset.a2 = animal2;
//     zoo.dataset.a3 = JSON.stringify(animal3);

//     const readAnimal1 = zoo.dataset.a1;
//     const readAnimal2 = parseFloat(zoo.dataset.a2);
//     const readAnimal3 =  JSON.parse(zoo.dataset.a3);

//     console.log(readAnimal1, typeof readAnimal1);
//     console.log(readAnimal2, typeof readAnimal2);
//     console.log(readAnimal3, typeof readAnimal3);

// });

const h1 = document.querySelector('h1');
    const addInput = document.querySelector('input.add');
    const addButton = document.querySelector('button.add');
    const delButton = document.querySelector('button.del');

    if (localStorage.getItem('myH1') !== null) {
        h1.innerText = localStorage.getItem('myH1'); // jeigu nera grazina null
    }
    

    console.log(JSON.parse(localStorage.getItem('arrayGood')));

    console.log(JSON.parse(localStorage.getItem('d2')));
    


    addButton.addEventListener('click', _ => {

        const addValue = addInput.value;

        localStorage.setItem('myH1', addValue);

        localStorage.setItem('array', [1,2,3]);

        localStorage.setItem('arrayGood', JSON.stringify([1,2,3]));

        const d = '400';

        localStorage.setItem('d', d);

        localStorage.setItem('d2', JSON.stringify(d));

        h1.innerText = addValue;

    });

    delButton.addEventListener('click', _ => {

        localStorage.removeItem('myH1');

        h1.innerText = '---';

    });

    // pasirinkus spalvą ir perkrovus puslapį spalva turi pasilikti pasirinkta.


    const color = document.querySelector('.color');

    if (localStorage.getItem('color') !== null) {
        color.value = localStorage.getItem('color');
    }

    color.addEventListener('change', _ => {
        localStorage.setItem('color', color.value);
    });


    let from = 10;
    let timerId;
    const h5 = document.querySelector('h5');
    const go = document.querySelector('.timer');

    h5.innerText = from;

    go.addEventListener('click', _ => {

        if (from <= 0) return;

        clearInterval(timerId);

        timerId = setInterval(_ => {
            from--;
            if (from <= 0) {
                clearInterval(timerId);
            }
            h5.innerText = from;
        }, 100);

    });
