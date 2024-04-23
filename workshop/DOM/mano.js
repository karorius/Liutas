console.log('varom');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sk = document.querySelector('.sk');
const rai = document.querySelector('.raid');
const btn = document.querySelector('button');

btn.addEventListener('click',_ => {
    let sk1 = rand(1,6);
    let raid1 = rand (1,6);
    if (sk1 == 3 ) {
        console.log(sk);
    } if (raid1 >3 ) { console.log(raid1)}
    sk.innerHTML = sk1;
    rai.innerHTML = raid1 ;
})
