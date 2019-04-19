export default 'hello';
export default function hello(name) {
    console.log('hello' + name);
};

export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }

    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}