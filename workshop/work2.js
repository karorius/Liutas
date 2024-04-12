console.log('sveiki');

const pavadinimas = () => {
    console.log('labas pasauli');}
pavadinimas();
function pavadinimas2() {
    console.log('Labas pasauli 2');};
pavadinimas2();
// sumos funkcija
function add(a,b,c) {
    return a + b +c ;}
console.log(add(5,9,8));
// naudojame ta pacia funkcija
const suma = add(5,8,6);
// priskiriame constantai argumentus
console.log(suma);
// su rodykline funkcija uzrasome taip
const add2 = (a,b) => a + b ;
console.log(add2(12,3));
// Lyginis ar nelyginis
function isEven(number) {
    return number % 2 === 0;}
console.log(isEven(16));
// mes gauname atsakyma boulenu
function greeting(name) {
    return console.log(`labas ${name}`);}
greeting('mantai');
// su bactitais ir literat galime nurodyti varda ar kita reiksme
// Funkcija kuri pati save paleidzia
function factorial(number) {
    if(number===1 || number===0) {
        return 1
    }else { return number * factorial(number - 1)}
} console.log(factorial(5));

// Kaip laipsnius suformule paversti farengeitais

function celsToFahr(celsius) {return (celsius *9/5) + 32}
console.log(celsToFahr(25));

// Galima paduoti masyva ir surasti didziausia reiksme

function GetMaxNumber(numberFromArray) {
    return Math.max(...numberFromArray);
}
console.log(GetMaxNumber([12,5,99,8,28]));

// Surasti skaicius is intervalo
// i min max irasome norimas reiksmes
let random = getRandom(8,100);
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1)+ min)}
    console.log(random)
    // console.log(getRandom(min,max))

// Paimti unikalias reiksmes(kurios nepasikartoja) is masyvo
// Turime isspredinti nauja masyva su unikaliomis reiksmemis 

function getUnique(array) {
    return [...new Set(array)];
}
console.log(getUnique([2, 5, 6, 2, 5, 9, 10]));
const unique = getUnique([2, 5, 6, 2, 5, 9, 10]);
console.log(unique)

// Pakeisti masyvo reiksmes (pakelti kvadratu)

const arr = [2, 5, 6, 2, 5, 9, 10];
function squereValues(arr) {
    // return arr.map((item) => {
    //      return item*item;
    //     }); galima uzrasyti trumpiau
    return arr.map((item) => item*item)} 
console.log(squereValues(arr));

// funkcija kuri  grazina suma visu elementu (argumentu)

function sumAllElements(/*arguments*/) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
       sum += arguments[i]
       
    }
 
    return sum
}
 
let result = sumAllElements(1,15,4,)
console.log(result);

const string = 'Labukas';
for(let i=0; i<string.length ; i++) {
    console.log(string,string[i]);
  
}


