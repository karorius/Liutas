function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let r;
r = rand(20,300);
console.log(r);
while (r<200) {
    r =r + rand(20,50);
    console.log(r)
}

