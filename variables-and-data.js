/*
 * Variables, Data Types, and Typing
 */
//This is a string variable
let wordData = "Word list";
//This is a boolean
let test = false;
//This is a number
let numberOfKids = 1;

//This will output to the console
console.log(wordData);

//This is an object.  It has key value pairs.
//It also has an internal object.
let obj = {
	key1: "value",
	key2: 6,
	boolean: true,
	obj2: {
		obj2key: "Internal Object Value",
	}
};

//This will display the value of one of the keys
console.log(obj.key2);
//This will display the value of one of the internal object's keys
console.log(obj.obj2.obj2key);

let number1 = 5;
let number2 =9;

// Here are some operations
let prod = number1 * number2;
let sum = number1 + number2;
let diff = number1 - number2;
let mod5 = number2 % number1;
let quotient = number2 / number1;
//JavaScript is weakly typed so this will not throw an error
//JavaScript uses dynamic typing so you do not have to specify a variable's type
let age = "I am " + number2 + number1;
//Here's our results
console.log(prod, sum, diff, mod5, quotient, age);

