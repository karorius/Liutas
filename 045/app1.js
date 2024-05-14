const arr = [];
arr.push('jo,jo');
arr.push('jo,jo');
arr.push('jo,jo');

const map = new Map();
map.set('j','jojo');
map.set('su','sujojo');
map.set( '10','nujojo');
map.set(_=>_)
const arrFromMap = [...map];
console.log(arr)
console.log(map,map.get(10), map.has('j'), map.size)
map.forEach((v,i) => console.log(i,v));

const map2 =new Map(arrFromMap);

console.log(map2)

const set= new Set();

set.add('puikis');
set.add('barbes')
set.add('bla bla')
set.has('puikis')
console.log(set,set.has('puikis'))





