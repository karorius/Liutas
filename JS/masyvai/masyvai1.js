console.log('labas parametrai');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const a = []
for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));
    }
    a.push(row);
} 
console.table(a);
let mazsk = a[0][0];
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] < mazsk) {
            mazsk = a[i][j];
        }
    }
}

console.log("Mažiausias skaičius: " + mazsk);
let i = 0;
let temp = 0;
temp = Math.min(...newMD[i]);
for (i = 0; i < 5; i++) {
  if (Math.min(...newMD[i]) < temp) {
    temp = Math.min(...newMD[i]);
  }
}