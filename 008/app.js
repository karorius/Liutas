// Funkcija rand(), kuri grazina atsitiktini skaiciu nuo 0 iki max
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Sukuriam tris kintamuosius ir jiems priskiriam atsitiktines reiksmes nuo 0 iki 25
var skaicius1 = rand(25);
var skaicius2 = rand(25);
var skaicius3 = rand(25);

// Randame vidurini skaiciu
var vidurinisSkaicius = Math.min(Math.max(skaicius1, skaicius2), Math.max(Math.min(skaicius1, skaicius2), skaicius3));

// Spausdiname vidurini skaiciu su console.log()
console.log("Vidurinis skaicius:", vidurinisSkaicius);