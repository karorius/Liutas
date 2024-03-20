console.log('labas mano drauge');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let what1 = rand(5,10);
for(let i=0; i< what1 ; i++) {
    console.log("labas")
}
// cia atspausdina atsitiktini skaiciu "labas" nuo 5 iki 10

let what2 = rand(5,10);
let all =""
for(let i=0; i< what2 ; i++) {
    let suma = 
    console.log( all = all + "labas")}

    // atspausdina atsitiktini skaiciu 5 kartus
    let A = rand(0,4)
for(let i = 0; i < 5 ; i++){
    console.log(A)
}
console.clear();
let B = rand(0,1) ? 5 : 7 ;
for(let i = 0; i < B; i++) {
    console.log(rand(0,4))
}
let suma = 0;
for(let i = 0; i < 5; i++) {
    let skaicius =rand (0,4)
    console.log(skaicius);
    suma += skaicius;
};
console.log("suma:" + suma);
// ciklo viduje susikuriame atsitiktini sk.
// Tada sekoje atsispaudiname ta skaiciu ir 
// pridedame prie kintamojo kuri pasirinkome pradzioje suma =0



let sviesoforas = rand (0,2)
let spalva = sviesoforas === 0 ? "raudona": sviesoforas === 1 ?"geltona" : "zalia";

console.log("sviesoforas", spalva);
if(spalva === "raudona") {console.log("Stop")}
else if (spalva === "geltona") {
    console.log( "ruosiames")
} else {console.log("einame")};

switch(spalva) {
    case "raudona":
        console.log("stovime")
        break;
        case "geltona":
            console.log("ruosiames")
            break;
default:
        console.log("einam")
}
// switch panaudojimas geriausiai atspindi pastomatas

let box = rand(1,4)
let size ;
if(box === 1) {
    size = "s";
}
if(box === 2) {
    size = "m";
}
if(box === 3) {
    size = "L";
}
if(box === 4) {
    size = "XL";
}
console.log("Box",size);
if(size === "s") {
    console.log("tikriname s");
}
if(size === "m" || size ==="s"){
    console.log("tikriname m");
}
if(size === "L" || size ==="m" || size ==="s"){
    console.log("tikriname L");
}
if(size === "XL" || size ==="L" || size ==="m" || size ==="s") {
    console.log("tikriname XL");
}
// kadangi kodas gan didelis tai buvo sugalvotas switshas

console.clear();

switch(size) {
    case "s":
        console.log("Tikriname s");
        case "m":
        console.log("Tikriname m");
        case "L":
        console.log("Tikriname L");
        case "XL":
        console.log("Tikriname XL");
}