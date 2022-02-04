const person = {
    name: 'Almir',
    age: 19,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

person.greet();