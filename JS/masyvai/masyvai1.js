console.log('labas parametrai');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sand(a,) {
const rez = a*6;
console.log(rez);
};

 sand(10)  
console.clear()

function megaSum( a,b,...all) {
    rez = 0;
    for (let i = 0; i < all.length; i++) {
        rez += all[i]
    }
    console.log(rez);
}
megaSum(10,20,30,50);
console.clear();


function returnSum(a,b) {
    const rez = a+b ;
    return rez;
}
const s1 = returnSum(8,5);
console.log(s1);


function kvadratas(a) {
    const rez = a*a ;
    return rez;
}
const k1 = kvadratas(8,);
console.log(k1);

console.clear();

// function multiAndSum(a,b) {
//     const rezMulti = a*b;
//     const rezSum =a+b;
//     const rez = [rezMulti,rezSum];
// }
//     const [a,b] = multiAndSum(4.5);
//     console.log(a,b);
