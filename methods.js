//THIS IS SAMPLE OF HOW TO USE THE METHODS

//the String methods
let greetings = "  Hello World  ";
//by using the length we dontt add the 2 brackets
//when we got the nested arrays to find the lendth we count the elemt inside the array as one by one then if we got like 3 other arrays so to mean the length is gonna be 3
console.log(greetings.length);
//it is used to remove the spaces at the beginning and at the end not in the middle
console.log(greetings.trim());
//this is used to  count the number of the characters wihtout including the spaces
console.log(greetings.trim().length);

console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());
//to show the character at a given index
console.log(greetings.charAt(8));
//the includes is used to check if the substring exist
console.log(greetings.includes("Hello!"));
console.log(greetings.includes("Hello"));
console.log(greetings.indexOf("l"));
console.log(greetings.lastIndexOf("H"));
console.log(greetings.lastIndexOf("l"));
console.log(greetings.replace("Hello", "hyyyy"));
//to use the slice you write the index you wanna start froma and the end before the number been said.
//to use the slice without 2 numbers that means that you start from that first then the others follow in the normal
console.log(greetings.slice(0, 2));
//the split is used to split the strings inside the array it return an array nt a stirng
//to mean is like telling the computer that evrythime you reach to that character bring the string that you have before it
//count the space and make them an empty string when are 2 when they are 1 it ignores it
console.log(greetings.split(" "));

let name = "Gagaayle";
let result = name.split("a");
console.log(result);
// s
let names = "jose,mike ,annie, clare";
console.log(names.split("e"));

//ANOTHER EXAMPLES
const country = "Rwanda";
//this means take the character from 0 to the character before index 5
console.log(country.slice(0, 5));
//when we writes only one digit that means take aother numbers before that
console.log(country.slice(3));
console.log(country.slice(-3));

//this is how how the question was asking to do this after store our data in value

let str = " Programming is fun! ";
let trimme = str.trim();
console.log(trimme);
console.log(trimme.toUpperCase());
console.log(trimme.toLowerCase());
console.log(trimme.length);
console.log(trimme.slice(0, 12));

//The numbers methods

let nc = 3.5;
console.log(nc.toFixed(2));
console.log(nc.toString());
//this is boolean we have to write Number before
console.log(Number.isInteger(nc));
//on the following below we dont need to add the calling of our variable
console.log(parseInt("3.5"));
console.log(parseFloat(3));

//Numbers methods

const number = 123.45;
console.log(number.toFixed());

let result2 = number.toString();
console.log(result2);
console.log(number.toString());

console.log(Number.isInteger());
// const number2="123.45";
//the below examples all take the strings
//the parseInt and the parseFloat they are not the functions
console.log(parseInt("123.5abc"));

console.log(parseFloat("12.45"));

//THE ARRAYS METHODS
//the push is used to push the array to the last index

let arr = ["banana", "apple", "mango", "pineple"];
let resul = arr.push("umwembe");
console.log(resul, arr);

let another = [1, 2, 3, 4, 5];
let solution = another.pop();
console.log(solution, another);
//this is used to remove the first element of the array
let arr2 = [1, 4, 6, 7, 0];
let sl = arr2.shift();
console.log(sl, arr2);

let arr3 = ["a", "b", "c", "d"];
let answer = arr3.unshift("A");
console.log(answer, arr3);
//is used to find the index of a given array
console.log(arr3.indexOf("a"));
//to check if a given element exist inside the array
console.log(arr.includes(0));
//the slice is used to give the elemrnt between a given range in array
//to mean is used to print out the given pat of the array
console.log(arr3.slice(0, 3)); //the first is included(inclusive) then the last is excluded(exclusive) to mean here will start from the elemnt in the index 0 then end in the element in the index 2

const bigNames = ["uwiamana", "akabuto", "mukesha"];
let response = bigNames.slice(0, 1);
console.log(response);

console.log(bigNames.splice(1, 2));
//it return the rmoved items not the items to be removed
//it delete the element starting from the index mentioned before, to mean it say start from 1 delete 2 elements
//is used to first point the element then the second delete those then what are the replacements like the elemnts that you want to replace there
let click = ["patrick", "mugisha", "diodene", "jean-paul", "manzi"];
let removed = click.splice(2, 2);
console.log(removed);

let anotherClick = ["Rocky", "Irene", "Junior", "The Premier"];
let remove = anotherClick.splice(3, 2); //the output is gonna be the premier
console.log(remove);

let anotherGroup = ["mom", "dad", "kel", "gaga", "lolo", "gali", "g-mere"];
console.log(anotherGroup.splice(2, 2, "lionel", "pamella"));
console.log(anotherGroup); //kel and gaga is gonna be the output
//used to join the arrays substring with the other
let fisrtNames = ["jose", "mike", "annie", "clare"];
console.log(fisrtNames.concat(["ange", "amina"]));

const a = ["names:", "uwase"];
const b = ["class:", "p5B"];
console.log(a.concat(b));
//used to join the array to string uisng whatever the separator you choose
console.log(fisrtNames.join("-"));
console.log(fisrtNames.join("."));
console.log(fisrtNames.join("|"));

//THE FOR OF
//the for of in js means the loop that lets you go through the values inside something that is iterable
//this can be arrays,strings, maps, sets and more
//it take the property of the object
const basket = ["apple", "mango", "banana"];
for (let fruits of basket) {
  console.log(fruits);
}

const string = "hello Ga";
//even its gonna print out the space
for (let singlechar of string) {
  console.log(singlechar);
}
for (var char of "mamy") {
  console.log(char);
}
//forin is used to loop through the indexes of the loops
//these are not methods but the special loop contrust
const colors = ["orange", "red", "blue", "green", "yellow"];
for (index in colors) {
  console.log(index);
}
for (let color of colors) {
  console.log(color);
}
//the method is for each
//is used to give the index, element and the full array
//first you write the array then the for each then you open the bracket
// Array.forEach(function(element,index,array){
// console.log("Index",index,"Value",element,"Full array:",array)
// });

let urClasses = ["muhazi", "muhabura", "unipod", "ikaze"];
urClasses.forEach(function (element, index, urClasses) {
  console.log("index:", index, "value:", element, "full array:", urClasses);
});

let bigGang = ["akabuto", "mukesha", "uwimana"];
bigGang.forEach(function (element, index, array) {
  console.log("index:", index, "value:", element, "full array:", array);
});
//how the map works

// array.map(function(element,index,array){
//it is used to create new array by applying function to each element of the original array
//return something (this will go into the new array)
// })

//example in usage
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 3);
console.log(doubled);

const students = [
  { name: "lorraine", age: 20 },
  { name: "Eddha", age: 20 },
];
//here you can write students or even s as long as yo have written s.
const namels = students.map((s) => s.name);
console.log(namels);

let numbersarray = [1, 2, 3, 4, 5];
whatWeGot = numbersarray.reverse();
console.log(whatWeGot);
console.log(numbersarray);

const nums = [1, 2, 3, 4, 5, 6, 8];
const evens = nums.filter((n) => n % 2 == 0);

const mixed = [1, 2, "nan", "null", "undefined", 0];
const truth = mixed.filter(Boolean);
console.log(truth);

const people = [
  { name: "Asha", age: 12 },
  { name: "Gaga", age: 10 },
];
const resp = people.filter((p) => p.name === "Gaga");
const lowAge = people.filter((p) => p.age > 10);
console.log(resp);
console.log(lowAge);

// arrry.reduce((accumulator,currentValue)=>{
  //return something (what you return is gonna be the accumulator in the next iteration)

// },initialValue);

const basketOfnumbers=[1,2,3,4];
//the basket is  [0,1,2,3,4,5]
//the current is gonna be what we have in the array
//here we just need to add the current numbers to the accumulator(sum so far)
const sum=numbers.reduce((acc,curr)=>{
  return acc+curr;
},0);//start with 0
console.log(sum);//the sum is gonna be 10


const loopOFnumbers=[1,2,3,4]
let add=0;
for(let i=0;i<numbers.length;i++){
  add=add+loopOFnumbers[i]
}
console.log(add);

const Array=[[1,2],[3,4],[5,6],[7,8]];
const flat=Array.reduce((acc,current)=>acc.concat(current),[])
//it will go inside the normal array like before concat go out but his tome this will go inside
console.log(flat);