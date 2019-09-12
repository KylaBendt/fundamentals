/*
* Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;

//Equals, but ignores types
let equalsWithTypeCoercion = 1 == '1';

//Greater than
let greaterThan = 5 >1;

//Less than
let lessThan = 2 < 10;

//Greater than or equals to
let greaterThanEq = 5 >= 5;

//Less than or equals to
let lessThanEq = 1009 <= 1009;

//Not Equals
let notEquals = 5 !== 2;

let abqTemp = 9;
let tijerasTemp = 9;

//here is a function with an if, else-if, else block
function tijerasVersesAbq (abqTemperature, tijerasTemperature) {
	let tijerasIsCooler = tijerasTemperature < abqTemperature;
	let abqIsCooler = tijerasTemperature > abqTemperature;
	if(tijerasIsCooler) {
		console.log("Tijeras is cooler!");
	} else if(abqIsCooler) {
		console.log("The weather man is lying.")
	} else {
		console.log("We are all equal!  Let's go for a swim.")
	}
}

tijerasVersesAbq(abqTemp,tijerasTemp);

//here is a function that returns something
function divisibleByTwo (number) {
	let modTwo = number % 2;
	let divByTwo = modTwo === 0;
	return divByTwo;
}

let num = 6;
let isDivisibleByTwo = divisibleByTwo(num);
console.log("It is " + isDivisibleByTwo + " that " + num + " is divisible by 2.");

// JS is lexically scoped so scopes cascade down
let x = 10;
function functionOne (n,m) {
	console.log(x)
}
functionOne(3,4);

// But this can be overwritten by a variable with the same name in the function
let y = 11;
function functionTwo (a,b,y) {
	console.log (y)
}
functionTwo(3,4,5);

//JS has three levels of scope- global, function and block (i.e. if blocks)
//if we did not declare b outside of the if block, this would not work
let b;
if (true) {
	b = 9;
}
console.log(b);

//Arrays are a special type of object in JS indicated by []
//Arrays start at 0
//Arrays can be nested
let ourArray = [1, 2, 3, 4, 5, ['a', 'b', 'c']];
console.log(ourArray[3], ourArray[5][1]);

//for(counter; comp; incr)
arrLen = ourArray.length;
for (let i =0; i<arrLen; i++){
	console.log (ourArray[i]);
}

x = 2;
while (x < 10) {
	console.log(x);
	x++;
}