const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is jink'
const tags = 'web design,web development, web deploy'
let val;

val = firstName + lastName; //WilliamJohnson

//Concatenation
val = firstName + ' ' + lastName; // William Johnson

//Append
val = 'Brad ';
val += 'Traversy' //Brad Traversy

val = 'Hello, my name is ' + firstName + ' and I am ' + age;//Hello, my name is William and I am 36

//Escaping (특수문자)
val = "That's awesome, I can't wait"; // 쌍따옴표 쓰거나

val = 'That\'s awesome, I can\'t wait'; // \쓸 것


//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName); //William Johnson

//Change case
val = firstName.toUpperCase(); //WILLIAM

val = firstName.toLowerCase();//william


val = firstName[0]; //W

// indexOf()
val = firstName.indexOf('2'); //-1

val = firstName.indexOf('l'); //2

val = firstName.lastIndexOf('l') //3

//charAt()
val = firstName.charAt('2');//l

//Get last char
val = firstName.charAt(firstName.length - 1); //m

//substring()
val = firstName.substring(0, 4)//Will

//slice()
val = firstName.slice(0, 4);//Will

val = firstName.slice(-3);//iam 뒤에서 세개!


//split()
val = str.split(' ')//["Hello", "there", "my", "name", "is", "jink"]

val = tags.split(',') //["web design", "web development", " web deploy"]

//replace()
val = str.replace('jink', 'Jink Bae'); //Hello there my name is Jink Bae

// includes()
val = str.includes('jink') //true


console.log(val);