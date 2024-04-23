console.log('sveiki visi kas moka skaiciuoti')

const count = document.querySelector('.count');
const input =document.querySelector('input');

input.addEventListener('keyup', _ => {
    count.innerHTML = input.value.length;
});