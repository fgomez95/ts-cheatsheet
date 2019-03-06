// TS cheatsheet

//boolean
const myFirstBoolean: boolean = false;
const mySecondBoolean: boolean = true;

console.log(`type boolean: ${myFirstBoolean}, ${mySecondBoolean}`);

//number 
const myInt: number = 10;
const myDecimal: number = 10.00;

console.log(`type number: ${myInt}, ${myDecimal}`);

//string 
const myString: string = 'hello';
const myMessage: string = 'world';

console.log(`type string: ${myString}, ${myMessage}!`);

//null and undefined
const myUndefined: undefined = undefined;
const myNull: null = null;

console.log(`types undefined and null: ${myUndefined}, ${myNull}`);

// simple array
const myFirstArr: string[] = ['hello', 'world'];
const mySecondArr: Array<string> = ['foo', 'bar'];

console.log(`type array: ${myFirstArr[0]} ${mySecondArr[1]}`);

//simple object
const myObject: { message?: string } = { message: 'foo' };
console.log(`type object: ${myObject.message}`);

//tuple 
const myTuple: [string, number] = ['Foo', 10];
console.log(`tuple: ${myTuple}`);

//enum 
enum Status { on = 1, off = 0, sleep = 3 }
console.log(Status.on);

//functions with return 
function sayHello(): string { return 'hello'; }
function getAge(): number { return 10; }

console.log(`${sayHello()}, my age is ${getAge()}`);

//void functions 
function bar(): void { console.log('Bar'); }
function foo(message: string): void { console.log(message); }

foo('fizz');
bar();

//never 

function error(): never {
    throw Error('unauthorized');
}

//interface

interface Dog {
    name: string,
    woof(): void,
}

const dog: Dog = {
    name: 'fizz',
    woof: function(){ console.log('woof!'); }
}

function dogShower(dog: Dog): void{
    dog.woof();
}
dogShower(dog);

// type assertion and optional attributes

interface Cat {
    color: string,
    eat(): void,
    jump?(): void,
}

let cat = {} as Cat;
cat.color = 'black';
cat.eat = function(){
    console.log('num num num');
}
cat.eat();

// classes

class CoinGenerator {
    private id: string = '';
    private key: string = '001';
    constructor(id: string){ this.id = id; };  
    public generateTransaction(recipient: string): string {
        return `${this.id}-${recipient}-${this.key}`;
    }
}

const myCoin = new CoinGenerator('505050');
console.log(myCoin.generateTransaction('15354668'));

// union

let myUnion: string | boolean = true;
console.log(myUnion);