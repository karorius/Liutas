class Fox {
    constructor(color) {
        this.color = color;
        this.age =0;
    }
    foxAge(age) {
        this.age =age;
    }
}

const fox3 = new Fox('auuu');
const fox1 = new Fox('red');
const fox2 = new Fox('braun');
fox1.age = 5;
fox2.age = 6;
fox3.age = 6;

console.log(fox1,fox2);

console.log('Average',(fox1.age + fox2.age)/2);
