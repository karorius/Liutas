import axios from 'axios';

window.addEventListener('load', _ => {
    const h1 = document.querySelector('h1');
    h1.style.letterSpacing = '20px'
})

window.addEventListener('load', _ => {
const name = document.querySelector('[name = name]');
const surname = document.querySelector('[name = surname]');
const button = document.querySelector('button')

button.addEventListener('click', _ => {
    const data ={
        name: name.value,
        surname: surname.value
    }
    console.log(data);

});
});