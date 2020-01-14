// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);


//letters, numbers, _, $
//Can not start with number

//Multi word vars

var firstName = 'John'; // Camel case
var fist_name = 'Sara';//Underscore
var FirstName = 'Tom'; //Pascal case
var firstname;

//let

let name1 = 'John Doe1';
console.log(name1);
name1 = 'Steve Smith1';
console.log(name1);


//const

const name2 = 'John Doe2';
console.log(name2);
//name2 = 'Steve Smith2'; //variable.js:37 Uncaught TypeError: Assignment to constant variable.
//console.log(name2);

//const name3; //Uncaught SyntaxError: Missing initializer in const declaration


const person = {
    name: 'john',
    age: 30
}
console.log(person);

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers)