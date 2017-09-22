class Person {
    public name: string;
    public surname: string;
    public email: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    greet() {
        console.log('Hello World !!!');
    }
}

class Teacher extends Person {
    teach() {
        console.log('Welcome to class');
    }
}