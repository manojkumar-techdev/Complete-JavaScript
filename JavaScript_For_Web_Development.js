// First program
console.log("Manoj")



// declare variable
let name = "Rohit";
console.log(name);



// update variable
let name = "Rohit";
name = "Kumar";
console.log(name);



// var use - old-fashiione (Avoid it)
var name = "Rohit";
name = "Kumar";
console.log(name);



// let use - assigned value can be updated
let name = "Rohit";
name = "Kumar";
console.log(name);



// let use - assigned value can be updated
const name = "Rohit";
name = "Kumar";
console.log(name);



// var no error - var can be declared again
var name = "Manoj";
var name = "Kumar";
console.log(name);



// let and const - can't be declared again
var name = "Manoj";
var name = "Kumar";
console.log(name);



// scope



// primitive data types
// data types - primitive types are 7



// number
let num1 = 10;
let num2 = 20.12;
console.log(num1 + num2);



//  string
let name1 = "Manoj";
let name2 = 'Kumar';
let name3 = `Gupta`;



// boolean
let isLoggedIn = true;
let isAdmin = false;



// undefined - variable declared but not assigned
// default value is -- "undefined"
let user;
console.log(user)



// const - cannot be undefined
let const;
console.log(user)




// bigInt
// 3 bit example
// 1 bit 1 space
// 2 raise to power 3
// 2 x 2 x 2 = 8
let num1 = 3838383383883n;
console.log(num1)




// null - intentional absence for no value
let waather = null;
console.log(weather);



// undefined vs null
let temp1 = 25;
let temp2 = null; // (exixts but error)
let temp3 = undefined; // (doesn't exist)



// symbol 
const id1 = Symbol("id");
console.log(id1);



// symbol comparison
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);



// non-primitive data types
// array
let arr = [10, 20, 30, 40, "Manoj", true, 10.35];



// object
const user = {
    name: "Manoj",
    city: "Berlin",
    age: 23
}

console.log(user);



// function - also can be stored in vriable
function add(){
    console.log("Hello");
}
add();



// typeof()
let num = 90;
console.log(typeof num);

// typeof()
let num2 = 30.25;
console.log(typeof num2);

// typeof()
let name = "Manoj"
console.log(typeof name);

// typeof()
let myBool = true;
console.log(typeof myBool);

// typeof()
let myNull = null;
console.log(typeof myNull);

// typeof()
let myUndefined = undefined;
console.log(typeof myUndefined);

// typeof()
let id2 = Symbol("id1");
console.log(typeof id2);

// typeof()
let arr = [10, 30];
console.log(typeof arr);

// typeof()
let obj = {
    name: "Manoj",
    city: "Berlin"
}
console.log(typeof obj)

// typeof()
function add(){
    console.log("Manoj");
}
console.log(typeof add);



// immutable data types - primitive data types
// primitive data once created cannot be changed
// new memory location allocated to updated value
// new momeory allocated
// variable points to updated one
let num1 = 10;
num1 = 20;
console.log(a);



// proof of immutability
let name1 = "Manoj";
name1 = "Kumar"
console.log(name1[0]);
name1 = "Gupta"
name1[0] = "S";
console.log(name1[0]);



// mutable data types - non-primitive(array)
let arr1 = [1, 3, 5, 7, 9];
arr1.push(90);
console.log(arr1);



// mutable data types - non-primitive(array)
let arr1 = [1, 3, 5, 7, 9];
arr1.push(90);
arr1[0] = 100;
console.log(arr1);



// mutable data types - non-primitive(object)
let obj = {
    name: "Manoj",
    city: "Berlin",
    age: 30
}

obj.name = "Rihan";
console.log(obj);



// immutable example - 2 (for primitive data)
// copy by value OR pass by value
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(a, b);



// mutable example - 2 (for primitive data)
// copy by value OR pass by value
let obj1 = {
    name: "Manoj",
    city: "Berlin",
    age: 30
}

let obj2 = obj1;
obj1.name = "Rihan";

console.log(obj1);
console.log(obj2);



// arithmetic operator
let num1 = 10;
let num2 = 7;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);



// assignment operator
let num1 = 10;

num1 += 5;
num1 -= 5;
num1 *= 5;
num1 /= 5;
num1 %= 5;
num1 **= 5;

console.log(num1);



// Comparison operator
let x = 20;
let y = 30;

consolelog(x > y)
consolelog(x < y)
consolelog(x >= y)
consolelog(x <= y)
consolelog(x == y)
consolelog(x === y)
consolelog(x != y)



// type conversion implicit conversion - Automatic
let result1 = "5" + 2;
let result2 = "5" + 20.25;
let result3 = "5" + true;

console.log(result1);
console.log(result2);
console.log(result3);

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);



// type conversion implicit conversion - Automatic
let result1 = 2 + "5";
let result2 = 20.25 + "5";
let result3 = true + "5";

console.log(result1);
console.log(result2);
console.log(result3);

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);



// type conversion
let str1 = "33";
let str2 = "66";
console.log(str1+str2)



// type conversion
let str1 = 33.33;
let str2 = 66.66;
console.log(str1+str2)



// type conversion
let str1 = 33;
let str2 = 66;
console.log(str1+str2)



// type conversion
let str1 = true;
let str2 = true;
console.log(str1+str2)



// type conversion
let str1 = true;
let str2 = false;
console.log(str1+str2)



// type conversion
let str1 = false;
let str2 = true;
console.log(str1+str2)


// explicit for - string to number
// explicit type conversion - manual type conversion
// using - Number()
let str = "123";
let numStr = Number(str);
console.log(numStr)
console.log(typeof numStr)




// explicit for - string to number
// explicit type conversion - manual type conversion
// using - parseInt()
let str = "123";
let numStr = parseInt(str);
console.log(numStr)
console.log(typeof numStr)




// explicit for - float to number
// explicit type conversion - manual type conversion
// using - parseFloat()
let str = "123.55";
let numStr = parseFloat(str);
console.log(numStr)
console.log(typeof numStr)




// explicit for - number to string
// explicit type conversion - manual type conversion
// using - String()
let str = 12345;
let numStr = String(str);
console.log(numStr)
console.log(typeof numStr)




// explicit for - number to string
// explicit type conversion - manual type conversion
// using - String()
let str = 12345;
let numStr = str.toString();
console.log(numStr)
console.log(typeof numStr)




// explicit boolean conversion
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false



// type conversion
let str1 = "5";
let int2 = 5;
console.log(str1 == int2);   // true



// type conversion
let str1 = "5";
let int2 = 5;
console.log(str1 === int2);   // true




// NaN
console.log(0 / 0);        // NaN
console.log(Number("abc")); // NaN
console.log(Math.sqrt(-1)); // NaN



// type of NaN
console.log(typeof NaN);



// NaN comparison
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false



// Number.isNaN()
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("abc"));   // false



// global isNaN()
console.log(isNaN("abc")); // true



// isNaN performs type conversion
// Number.isNaN() doesnt 
let value = Number("hello");

if (Number.isNaN(value)) {
    console.log("Invalid number");
}



// computer science error
let a = 0.1;
let b = 0.2;

let c = a + b;
console.log(c)
console.log(c == 0.3)



// computer science error - input as string
let a = Number("0.1");
let b = Number("0.2");

let c = a + b;
console.log(c)
console.log(c == 0.3)



// null is loosly equal to undefined
console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(null === 0);

console.log(null == "");
console.log(null === "");

console.log(null == false);
console.log(null === false);



// >, <, >=, <= 
// allows type conversion
// conversion with null and null is converted 
// null converted to number
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(null != 0);




// >, <, >=, <= 
// undefined converted to number as a NaN
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined != 0);



// null = 0
// NaN
console.log(null >= undefined);
console.log(undefined >= 0);



// String comparison - based on  ASCII Value
console.log("Rohit" > "Manoj");



// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}



// while loop
let i = 0;

while (i < 10){
    console.log(i);
    i++;
}



// do while
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


// if condition 
let age = 20;

if (age > 18){
    console.log("Can vote");
}


// if else condition 
let age = 20;

if (age > 18){
    console.log("Can vote");
}
else {
    console.log("Cannot Vote");
}


// multiple conditions
let age = 18;

if (age > 18){
    console.log("Can vote");
} else if (age == 18) {
    console.log("Can vote after 3 days")
}
else {
    console.log("Cannot Vote");
}



// logical operator
// &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// logical operator
// ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// working of Logical Operators
let a = "Rohit";
let b = "Mohit";
let c = a && b;
console.log(c);


// working of Logical Operators
let a = "";
let b = "Mohit";
let c = a && b;
console.log(c);


// working of Logical Operators
let a = "";
let b = "Mohit";
let c = a || b;
console.log(c);


// working of Logical Operators
let a = "Rohit";
let b = "Mohit";
let c = a || b;
console.log(c);


// working of Logical Operators
let a = 0;
let b = 20;
let c = a && b;
console.log(c);



// logical operator - !=
// not equal to - !=



// toFixed()
// returns a new numbers as a string
let a = 10;
let b = 868.6262;
console.log(b.toFixed(2));
console.log(typeof b.toFixed(2));



// toPrecision()
let a = 10;
let b = 868.6262;
console.log(b.toPrecision(3));
console.log(typeof b.toPrecision(3));



// toPrecision()
let a = 10;
let b = 868.6262;
console.log(b.toString(3));
console.log(typeof b.toString(3));



// creating a number - but as an object
let a = new Number(20);
console.log(a);
console.log(typeof a);



// creating a number - but as an object
// must have same references
// objects are never equal
let a = new Number(20);
let b = new Number(20);
console.log(a ==b);



// object comparison - case one
// not reference copy
// different objects created
// pointing to different object
let obj1 = {
    name: "Rohit"
}

let obj2 = {
    name: "Rohit"
}

console.log(obj1 == obj2);



// object comparison - case two
// reference copy
// no new object created
// pointing to same objcet
let obj1 = {
    name: "Rohit"
}

let obj2 = obj1;
console.log(obj1 == obj2);



// primitive data type
// data copy



// non-permitive data type
// reference copy



// boolean issue
console.log(Boolean(10));
console.log(Boolean(new Number(0)));
console.log(Boolean(new Number({})));
console.log(Boolean(new Number({name: "R"})));
console.log(Boolean(new Number([])));



// primitive - data comparison
let a = 10;
let b = a;
console.log(a == b);



// Math Object
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.log10(64));
console.log(Math.LN10);
console.log(Math.SQRT2);



// ceil
console.log(Math.ceil(2.4));



// flooor
console.log(Math.floor(2.4));



// Max
console.log(Math.max(1, 4, 6, 9));



// Min
console.log(Math.min(1, 4, 6, 9));



// Math.random()
// 0 - 1
// 0 - included
// 1 - excluded
console.log(Math.random());



// random number 0-9
console.log(Math.random()*10);



// random number 0-9
// using floor
console.log(Math.floor(Math.random()*10));



// random 1-10
// Math.floor(Math.random()*totalNumberOfOutcome)+shift
console.log(Math.floor(Math.random()*10) + 1);



// random 15 - 25
// Math.floor(Math.random()*(max-min+1))+min
console.log(Math.floor(Math.random()*11) + 15);



// used in generating OTP with random number
// 4 digit
// 1000-9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);



// function for random number
function random(){
    console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

}
random();



// string
const str= "Manoj";
const str= 'Kumar';
const str= `Manoj`;



// placeholder with string
let age = 20;
let message = `My age is ${age}`;
console.log(message);



// length()
let myStr = "manojkumargupta";
console.log(myStr.length);



// access index
let myStr = "manojkumargupta";
console.log(myStr[0]);



// uppercase
let myStr = "manojkumargupta";
console.log(myStr.toLowerCase());



// lowercase
let myStr = "manojkumargupta";
console.log(myStr.toLocaleLowerCase());


// indexOf() - 
// if present = 0
// if not present = -1
let myStr = "manojkumargupta";
console.log(myStr.indexOf("man"));



// lastIndexOf() - 
// if present = 0
// if not present = -1
let myStr = "manojkumargupta";
console.log(myStr.lastIndexOf("a"));



// includes() 
// returns true or false
let myStr = "manojkumargupta";
console.log(myStr.includes("a"));



// slice()
// inclide start index
// exclude last index
let myStr = "manojkumargupta";
console.log(myStr.slice(0, 5));



// slice() with just start value
let myStr = "manojkumargupta";
console.log(myStr.slice(5));



// slice() with negative index
// negative index starts from -1
let myStr = "manojkumargupta";
console.log(myStr.slice(-5));



// slice() with negative index
// include and exclude method
let myStr = "manojkumargupta";
console.log(myStr.slice(-5, -2));



// substring() same as slice
// no negative indexing
let myStr = "manojkumargupta";
console.log(myStr.slice(0,5));



// substring() same as slice
// no negative indexing
let myStr = "manojkumargupta";
console.log(myStr.slice(0,5));



// string concatination
let name1 = "manoj";
let name2 = "kumar";
console.log(name1 + name2);



// string concatination
let name1 = "manoj";
let name2 = "kumar";
console.log(name1 + "" + name2);


// string concatination
let name1 = "manoj";
let name2 = "kumar";
console.log(name1 + " " + name2);



// concatination examples
// left to right movement
console.log(24+"Manoj");
console.log(24+"Manoj"+10);
console.log(24+10+"Manoj");



// replace()
// only first instance
let myStr = "manojkumargupta";
console.log(myStr.replace("manoj", "Rahul"));



// replaceAll()
// replace all
let myStr = "I manojkumargupta I";
console.log(myStr.replaceAll("I", "Z"));



// trim()
const user = "    manoj    ";
console.log(user.trim());



// split()
// string having comma between
const name = "Manoj,Kumar,Gupta";
console.log(name.split(","));



// split()
// string having space between
const name = "Manoj Kumar Gupta";
console.log(name.split(" "));



// Date object - UTC
const now = new Date();
console.log(now)



// Date object - GMT
const now = new Date();
console.log(now.toString());



// toISOString()
const now = new Date();
console.log(now.toISOString());



// toLocaleString()
const now = new Date();
console.log(now.toLocaleString());



// getDay()
const now = new Date();
console.log(now.getDay());



// getDate()
const now = new Date();
console.log(now.getDate());



// getMonth()
const now = new Date();
console.log(now.getMonth());



// getFullYear()
const now = new Date();
console.log(now.getFullYear());



// getMonth()
// month starts from zero
const now = new Date();
console.log(now.getMonth());



// getMonth()
// month starts from zero
const now = new Date();
console.log(now.getMonth());


// current time
const now = new Date();
console.log(now);



// local time
const now = new Date();
console.log(now.getDate);



// getHours()
const now = new Date();
console.log(now.getHours());



// getSeconds()
const now = new Date();
console.log(now.getSeconds());



// customized date
const now = new Date(2025, 5, 20, 8, 25, 16, 125);
console.log(now);



// toString() -  change to local time
const now = new Date(2025, 5, 20, 8, 25, 16, 125);
console.log(now.toString());



// shows dates in miliseconds
const now = Date.now();
console.log(now);



// shows dates in miliseconds
const now = Date.now();
const dates = new Date(1782315507963);
console.log(dates);



// start date
const now = Date.now();
const dates = new Date(0);
console.log(dates);



// Date Timestamp - utc
const now = Date.now();
const dates = new Date(now);
console.log(dates);
console.log(now);


// utc time is same everywhere
const now = Date.now();
const dates = new Date(-35454454);
console.log(dates);



// array
let marks = [10, 20, 30, 40, 50];
console.log(marks);



// length
let marks = [10, 20, 30, 40, 50];
console.log(marks.length);



// heterogeneous array
let marks = [10, true, 30.10, null, "manoj"];
console.log(marks.length);



// access element
let marks = [10, 20, 30, 40, 50];
console.log(marks[0]);



// typeof()
let marks = [10, 20, 30, 40, 50];
console.log(typeof marks);



// update array
let marks = [10, 20, 30, 40, 50];
marks[1] = 1000;
console.log(marks);



// push()
let marks = [10, 20, 30, 40, 50];
marks.push(2000);
console.log(marks);



// pop()
let marks = [10, 20, 30, 40, 50];
marks.pop();
console.log(marks);



// shift() - remove first element
let marks = [10, 20, 30, 40, 50];
marks.shift();
console.log(marks);



// unshift() - add first element
let marks = [10, 20, 30, 40, 50];
marks.unshift(1000);
console.log(marks);



// unshift() - add first element
let marks = [10, 20, 30, 40, 50];
marks.unshift(1000);
console.log(marks);




// loop over
let marks = [10, 20, 30, 40, 50];

for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}




// for...of loop
let marks = [10, 20, 30, 40, 50];

for(let num of marks){
    console.log(num);
}




// for...of loop
// copy by reference
let marks1 = [10, 20, 30, 40, 50];
let marks2 = marks1;

marks2.push(1000);
console.log(marks1)
console.log(marks2)



// slice
// include exclude method
let marks1 = [10, 20, 30, 40, 50];
console.log(marks1.slice(2,4));



// slice
// include exclude method
let arr1 = [10, 20, 30, 40, 50];
const arr2 = arr1.slice(2,4);
console.log(arr2);
console.log(arr1);



// splice - trim put from original array
// change in original array
let arr1 = [10, 20, 30, 40, 50];
const arr2 =  arr1.splice(0,3);
console.log(arr2);
console.log(arr1);



// spread
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [100, 200, 300, 400, 500];
const arr3 = arr1.concat(arr2);
console.log(arr3)



// spread
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [100, 200, 300, 400, 500];
arr1.concat(arr2);
console.log(arr1)

