// TS cheatsheet
//boolean
var myFirstBoolean = false;
var mySecondBoolean = true;
console.log("type boolean: " + myFirstBoolean + ", " + mySecondBoolean);
//number 
var myInt = 10;
var myDecimal = 10.00;
console.log("type number: " + myInt + ", " + myDecimal);
//string 
var myString = 'hello';
var myMessage = 'world';
console.log("type string: " + myString + ", " + myMessage + "!");
//null and undefined
var myUndefined = undefined;
var myNull = null;
console.log("types undefined and null: " + myUndefined + ", " + myNull);
// simple array
var myFirstArr = ['hello', 'world'];
var mySecondArr = ['foo', 'bar'];
console.log("type array: " + myFirstArr[0] + " " + mySecondArr[1]);
//simple object
var myObject = { message: 'foo' };
console.log("type object: " + myObject.message);
//tuple 
var myTuple = ['Foo', 10];
console.log("tuple: " + myTuple);
//enum 
var Status;
(function (Status) {
    Status[Status["on"] = 1] = "on";
    Status[Status["off"] = 0] = "off";
    Status[Status["sleep"] = 3] = "sleep";
})(Status || (Status = {}));
console.log(Status.on);
//functions with return 
function sayHello() { return 'hello'; }
function getAge() { return 10; }
console.log(sayHello() + ", my age is " + getAge());
//void functions 
function bar() { console.log('Bar'); }
function foo(message) { console.log(message); }
foo('fizz');
bar();
//never 
function error() {
    throw Error('unauthorized');
}
var dog = {
    name: 'fizz',
    woof: function () { console.log('woof!'); }
};
function dogShower(dog) {
    dog.woof();
}
dogShower(dog);
var cat = {};
cat.color = 'black';
cat.eat = function () {
    console.log('num num num');
};
cat.eat();
// classes
var CoinGenerator = /** @class */ (function () {
    function CoinGenerator(id) {
        this.id = '';
        this.key = '001';
        this.id = id;
    }
    ;
    CoinGenerator.prototype.generateTransaction = function (recipient) {
        return this.id + "-" + recipient + "-" + this.key;
    };
    return CoinGenerator;
}());
var myCoin = new CoinGenerator('505050');
console.log(myCoin.generateTransaction('15354668'));
// union
var myUnion = true;
console.log(myUnion);
