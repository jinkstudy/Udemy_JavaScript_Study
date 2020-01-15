// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length; //7

//Check if is array
val = Array.isArray(numbers); //true

//Get single value
val = numbers[3];//23
val = numbers[0];//43

//Inser into array
numbers[2] = 100; //[43, 56, 100, 23, 44, 36, 5]

//Find index of value
val = numbers.indexOf(36); //5

//Mutating arrays
//Add on to end
numbers.push(250); //[43, 56, 100, 23, 44, 36, 5, 250]

//Add on to front
numbers.unshift(120) //[120, 43, 56, 100, 23, 44, 36, 5, 250]

//Take off from end
numbers.pop(); // [120, 43, 56, 100, 23, 44, 36, 5]

//Take off from front
numbers.shift(); //[43, 56, 100, 23, 44, 36, 5]

//Splice values
numbers.splice(1, 3);//[43, 44, 36, 5] 1-3 인덱스 없어짐.

//Reverse
numbers.reverse(); //[5, 36, 44, 43]

//Concatenate array
val = numbers.concat(numbers2);  //[5, 36, 44, 43, 22, 45, 33, 76, 54]

//Sorting arrays
val = fruit.sort(); //["Apple", "Banana", "Orange", "Pear"]
val = numbers.sort();//[36, 43, 44, 5] //첫번째 자리만 고려

// Use the 'compare function'
val = numbers.sort(function (x, y) {
    return x - y;
}) //[5, 36, 43, 44]

//Reverse sort
val = numbers.sort(function (x, y) {
    return y - x;
}) //[44, 43, 36, 5]

//Find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50); //44

console.log(numbers)
console.log(val);