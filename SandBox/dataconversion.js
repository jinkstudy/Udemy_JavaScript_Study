let val;

//Number to string
val = String(5555);
val = String(4 + 4);

//Bool to string;
val = String(true);

//Date to string;
val = String(new Date());

//Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();


//Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log('------------')
//String to number
val = Number('5');
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('hello'); //NaN
val = Number([1, 2, 3])//NaN
val = parseInt('100');
val = parseInt('100.3'); //100
val = parseFloat('100.31');//100.31

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2))
console.log('------------') // 소수몇째자리까지 나타낼것인지 .;

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // 11
console.log(typeof sum); //Number


const val3 = String(5);
const val4 = 6;
const sum1 = val3 + val4;

console.log(sum1); //56
console.log(typeof sum1); //string