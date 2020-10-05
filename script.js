"use strict";
let bava = 5;
console.log(bava);
// alert(bava);
// alert("Hello this is a sample alert box");
while (bava != undefined) {
  console.log("something is going on bro");
  bava = undefined;
}
let animals = ["bunny", "tiger", "chicken", "horse", "lion"];
console.log(animals[0], animals[2], animals[4]);
console.log(animals.length);

let student = {
  name: "bunny",
  branch: "cse",
  StudId: 1,
};

console.log(student);

let firstName = 'bunny';
let lastName = 'gorthi';
let fullName = firstName + ' ' + lastName;
console.log(fullName, fullName.length);
console.log(fullName.toUpperCase());

let Email = 'chakradhar.gorthi@gmail.com';
console.log(Email);

const speak = function(name){
	console.log(`${name}`);
};

speak('bunny');

const calc = () => console.log(5);

calc();

const greet = () => console.log('hello, world');
greet();

const bill = (products, tax) => {
	let total = 0;
	for(let i = 0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
};

console.log(bill([10,15,20,30], 0.2));