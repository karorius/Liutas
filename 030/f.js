console.log(' varom toliau');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const obj = {
    smartAnimal32: 'Fox',
    funnyAnimal88: 'Racoon',
    bigAnimal105: 'Wolf'
}

const colors = ['skyblue', 'orange', 'crimson', 'gray'];

window.addEventListener('load', _ => {

    


    const vz = document.querySelector('a');
    vz.addEventListener('click', e => {
        e.preventDefault();
        console.log('Valio!');
    });

    console.log('-----------------------------------');
    console.log('SELECT');
const naujas = document.querySelector('button.select');
    naujas.addEventListener('click', _ => {
        console.log('SELECT');
        const val = document.querySelector('select');
        const c = val.value;
        console.log(c);

    })
// Trumpesnis uzrasymas ;
console.log('-----------------------------------');

    // document.querySelector('button.select').addEventListener('click', _ => {
    //     const value = document.querySelector('select').value;
    //     console.log(value);
    // });
console.log('-----------------------------------');

    document.querySelector('button.cb').addEventListener('click', _ => {

        document.querySelectorAll('[type="checkbox"]').forEach(c => {
            if (c.checked) {
                console.log(c.value);
            }
        });

    });


    document.querySelector('button.ra').addEventListener('click', _ => {

        document.querySelectorAll('[type="radio"]').forEach(c => {
            if (c.checked) {
                console.log(c.value);
            }
        });

    });


    document.querySelector('button.color').addEventListener('click', _ => {
        const value = document.querySelector('[type="color"]').value;
        document.querySelector('.box.color').style.backgroundColor = value;
        console.log(value);
    });

    document.querySelector('button.ta').addEventListener('click', _ => {
        const value = document.querySelector('textarea').value;
        console.log(value);
    });

    // 1. Padaryt select tagą iš color masyvo

    let selectHtml = '<select>';

    colors.forEach(c => {
        selectHtml += `<option value="${c}">${c}</option>`;
        // selectHtml += '<option value="'+ c +'">'+ c +'</option>';
    });

    selectHtml += '</select>';

    document.querySelector('.my-colors').innerHTML = selectHtml;

    // 2. Paspaudus butoną, jis (butonas) nusidažytų parinkta my-colors spalva


    document.querySelector('.go').addEventListener('click', e => {
        const value = document.querySelector('.my-colors select').value; // iš kur imam
        // document.querySelector('.go').style.backgroundColor = value;
        e.target.style.backgroundColor = value;
        console.log(value);
    });

    // 3. Pasirinkus iš sąrašo skaičių jį pridėti prie bendros sumos


    const sumTag = document.querySelector('.sum');

    document.querySelector('button.add').addEventListener('click', _ => {

        document.querySelectorAll('.digits [type="radio"]').forEach(c => {
            if (c.checked) {
                let sum = parseInt(sumTag.innerText);
                const value = parseInt(c.value);
                sum += value;
                sumTag.innerText = sum; 
            }
        });

    });


});



// const ul = document.querySelector('my-colors');

// let selectHtml = '<select>';


//     colors.forEach(c => {
//         selectHtml += `<option value="${c}">${c}</option>`;
//     });

//     document.querySelector('.my-colors').innerHTML = selectHtml;






    // let selectHtml = '<select>';

// // Iteruojame per spalvų masyvą ir pridedame kiekvieną spalvą kaip option į selectHtml
// colors.forEach(c => {
//     selectHtml += `<option value="${c}">${c}</option>`;
// });

// // Užbaigiame selectHtml su uždarymo žyma
// selectHtml += '</select>';

// // Įterpiame sukurtą selectHtml į HTML elementą su class 'my-colors'
// document.querySelector('.my-colors').innerHTML = selectHtml;


const sumTag = document.querySelector('sum')




