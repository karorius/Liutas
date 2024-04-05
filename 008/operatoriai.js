console.log("Hello from far away!");
// var A = 5 ;
// var B = 10 ;
// var C = A +B + 22;
// console.log(A,B,C);
// console.log(A)
// let x = 10;
// let a = x + 5
// console.log('a:', a);
// kintamojo tipai
let a = 10;
let b = '10';
let g;
// let c = 'hello' negali sudeti skirtingu tipu
// console.log(a+b)
// console.log(a+a)
let x ='an';
let y ='tis';
let c = 'hell';
let rez = a+a;
console.log(x+y);
// skaicius rodomas juoda spalva o tekstas kita spalva
console.log(rez);
console.log(a + + b)
// Jeigu pries teksta pridesime dar viena pliusa jis pavercia teksta skaiciumi ir sudeda
let l1 ='B'
let l2 = 'a'
console.log(l1 + l2 + + l2 +l2)
console.log(a + '' + a);
// Jeigu pries skaiciu pridesime tuscias '' kabutes tai skaiciu paversime stringu
console.log(typeof a)
console.log(typeof b)
console.log(typeof +c)
console.log(a-b);
// console.log(0.3 + 0.6)dvejataine sistema nera suderinama su desimtaine ir galime taip panaudoti
console.log((0.3 + 0.6).toFixed(1));
a=50
// g = a;
console.log(a,g)
console.log(g, typeof g)
// neapsisprendes
console.log(g+a);
console.log(b+g);
// Boolean
let t = true
let f = false ;

console.log( t+f)
console.log( t/f)
console.log( t*f)
// bet koks skaicius yra true
console.log( !!b)
console.log( !!a)
// LOGINIAI OPERATORIAI

// OR ||
console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);


// AND &&
console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);


// NOT !
console.log('!true:', !true);
console.log('!false:', !false);
console.log('!!true:', !!true);
console.log('!!false:', !!false);


// NOT with numbers and strings

console.log('!0:', !0);
console.log('!1:', !1);
console.log('!187:', !187);
console.log('!!-187:', !!-187);
console.log("!'':", !'');
console.log("!'hello':", !'hello');
console.log(! '')
console.log("!!' ':", !!' ');
// undefined type
console.log('!undefined:', !undefined);


// OR AND with numbers
console.log('25 || 36:', 25 || 36);
console.log('25 && 36:', 25 && 36);
console.log('0 || 36:', 0 || 0);
console.log('0 && 36:', 0 && 36);


// OR AND with strings
console.log("'hello' || 'world':", 'hello' || 'world');
console.log("'hello' && 'world':", 'hello' && 'world');
console.log("'' || 'world':", '' || 'world');
console.log("'' && 'world':", '' && 'world');

let p = 0;
p|| console.log('a is 0');
p && console.log('a is not 0');

let l = 1 + 2;
let r = 1 + 2 * 3;
let w = (1 + 2) * 3;

console.log('l:', l);
console.log('r:', r);
console.log('w:', w);

let e = 9 % 7;
console.log('e:', e);

// let f = 2 ** 3;
// console.log('f:', f);



let k = 7;
let h = 3;

k++;
h--;

console.log('k:', k);
console.log('h:', h);


let i = 27;
console.log('i:', ++i);
console.log('i:', i);

let j = 2;

let result = ++j * ++j; // 3 * 4
result = j++ * ++j; // 4 * 6

console.log('result:', result);

let z = 1;




z || console.log('LOGGED');

// console.clear();

console.log('1 < 2:', 1 < 2);
console.log('1 > 2:', 1 > 2);
console.log('1 <= 2:', 1 <= 2);
console.log('1 >= 2:', 1 >= 2);

console.log('1 < 1:', 1 < 1);
console.log('1 > 1:', 1 > 1);
console.log('1 <= 1:', 1 <= 1);
console.log('1 >= 1:', 1 >= 1);

console.log('1 == 1:', 1 == 1);
console.log('1 == 2:', 1 == 2);
console.log('1 != 2:', 1 != 2);
console.log('1 != 1:', 1 != 1);


console.log("'1' == 1:", '1' == 1);
console.log("'1' === 1:", '1' === 1);
console.log('true == 1', true == 1); // true is 1
console.log('true === 1', true === 1);
console.log('NaN == NaN:', NaN == NaN);
let m = 1;
m++;
console.log('m:', m);
console.log('is NaN', isNaN(m));
console.log('true !== 1', true !== 1);
console.log('true != 1', true != 1);

// console.clear();

// -------------------------------
// let n = 3;

// n = n * 3;

// if (n > 15) {
//     console.log('n is greater than 15');
//     console.log('n:', n);
// } else {
//     console.log('n is less than 15');
//     console.log('n:', n);
// }

// let o = rand(1, 20);

// console.log('o:', o);

// if ( o > 5 && o < 10) {
//     o = o * 2;
// } else {
//     o = o * 3;
// }

// console.log('o:', o);
