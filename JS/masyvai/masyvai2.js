console.log("viskas is naujo");
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const person1 = {
    name: 'Briedis',
    surname: 'Miškinius',
    age: 15
};
 
const person2 = {
    name: 'Vilkas',
    surname: 'Miškinius',
    age: 53
};
 
const person3 = {
    name: 'Lapė',
    surname: 'Miškinius',
    age: 34
};
 
const people = [person1, person2, person3];

for (let person of people) {
    person.age += 5;
}

const person4 = {
    name: 'Barsukas',
    surname: 'Miškinius',
    age: 32};

people.unshift(person4);
console.table(people);

const colors = ['crimson', 'gold', 'pink', 'purple', 'skyblue', 'orange'];
const eggs = [];

for (let i = 0; i < 10; i++) {
    
    const sk = rand(0,10);
    
    const sp = colors[sk];
    
    eggs.push(sp);
}

console.log(eggs);