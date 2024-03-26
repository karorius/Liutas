// const o = {vardas:'jonas', amzius: '22', miestas: 'vilnius'};
// const a1 = ['jonas','22','vilnius'];
// console.log('o',o);
// console.log('a1',a1);
// const animals = ['kiskis','briedis','meska','vilkas','lape']
// console.log(animals);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const sknr = [];
for( i = 0 ; i < 30 ; i++) {
    let sknr1 = rand(5,25);
    sknr.push(sknr1);
}
console.log(sknr)