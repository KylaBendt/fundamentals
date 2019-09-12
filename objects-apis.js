/*
*Objects, Interfaces and APIs
 */
// Dog is a sample object
let dog = {
	name: "Fido",
	color: "golden",
	breed: "Golden Retriever",
	size: "medium",
	bark: function(){
		console.log("Bark!");
	}
};

dog.bark();

//REST APIs use htmls rather than functions like APIs

//passing data to a function- 2 options by value or reference
//depends on programming language

//This demonstrates that variables are passed by value
function x(y) {
	y = y + 5;
	console.log(y);
}

let m = 5;
x(m);
console.log(m);

//But objects are passed by reference
function objx(y) {
	y.num = y.num +5;
	console.log(y)
}

let mObj = {
	name: "Gertrude",
	num: 458
};
objx(mObj);
console.log(mObj);

