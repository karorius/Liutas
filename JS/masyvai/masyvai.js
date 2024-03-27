console.log("laba diena")
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const vienas = []
const du = []
const trys =[]

for(let i =0; i < 200;i++) {
    vienas.push(['A','B','C','D'][rand(0,3)] );
    du.push(['A','B','C','D'][rand(0,3)]);
    trys.push(['A','B','C','D'][rand(0,3)]);
}
console.log(vienas,du,trys)
const bendras = [];
for(let i = 0; i < 200; i++) {
    bendras.push(vienas[i] + du[i] + trys[i]);
}
console.log(bendras);

const unikalios = []
for (let i = 0; i < 200; i++) {
    if(-1 == unikalios.indexOf(bendras[i])) {
        unikalios.push(bendras[i]);
    }
}
console.log(unikalios);