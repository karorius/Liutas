console.log( 'dar karta');

const color = document.querySelector('.color');
if (localStorage.getItem('color') !==null) {
    color.value = localStorage.getItem('color')
};
 
    color.addEventListener('change', _ => {localStorage.setItems('color', color.value)});


const i1 = document.querySelector('.i1');
const btn = document.querySelector('button');

btn.addEventListener('click',_ => {
    const v = i1.value;
    console.log('click', v);
})
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const multi = document.querySelector('.multi');

multi.addEventListener('click', _ => {
    const v1 = parseFloat(a1.value);
    const v2 = parseFloat (a2.value);
    const rez = v1*v2;
    console.log('REZ', rez)
});
document.querySelector('button.ta').addEventListener('click', _=> {
    const value = document.querySelector('textarea').value;
    console.log(value);
    // jeigu norime kad spausdintu is karto
    document.querySelector('.box').value = value
    console.log(value);
})

const colors = ['skyblue', 'orange', 'crimson', 'gray'];

selecthtml = '<select>';

colors.forEach(c => {
    selecthtml += '<option '
})

// function doSomethingAsync(callback) {
//     setTimeout(() => {
//         callback('Operation completed');
//     }, 2000);
// }

// console.log('Start');
// doSomethingAsync((result) => {
//     console.log(result);
// });
// console.log('End');  

function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Operation completed');
        }, 2000);
    });
}

console.log('Start');
doSomethingAsync()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
console.log('End');
// Surandame mygtuko elementą pagal ID
const myButton = document.getElementById('myButton');

// Pridedame įvykių klausytoją paspaudimui
myButton.addEventListener('click', function(event) {
    console.log('My button was clicked!'); // Veiksmai, kurie įvyksta paspaudus mygtuką
});