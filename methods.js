//THIS IS SAMPLE OF HOW TO USE THE METHODS

//the String methods
let greetings="  Hello World  ";
//by using the length we dontt add the 2 brackets
console.log(greetings.length);
//it is used to remove the spaces at the beginning and at the end not in the middle
console.log(greetings.trim())
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
console.log(greetings.replace("Hello","hyyyy"));
//to use the slice you write the index you wanna start froma and the end before the number been said.
//to use the slice without 2 numbers that means that you start from that first then the others follow in the normal 
console.log(greetings.slice(0,2));
//the split is used to split the strings inside the array it return an array nt a stirng
//to mean is like telling the computer that evrythime you reach to that character bring the string that you have before it
//count the space and make them an empty string when are 2 when they are 1 it ignores it
console.log(greetings.split(" "));

let name="Gagaayle"
let result=name.split("a");
console.log(result);
// s
let names="jose,mike ,annie, clare";
console.log(names.split("e"));

//ANOTHER EXAMPLES
 const country="Rwanda";
 //this means take the character from 0 to the character before index 5
 console.log(country.slice(0,5));
 //when we writes only one digit that means take aother numbers before that
 console.log(country.slice(3));
 console.log(country.slice(-3));


 //this is how how the question was asking to do this after store our data in value

 let str=" Programming is fun! ";
 let trimme=str.trim()
 console.log(trimme);
 console.log(trimme.toUpperCase());
 console.log(trimme.toLowerCase());
 console.log(trimme.length);
 console.log(trimme.slice(0,12));

 //The numbers methods

 let nc=3.5;
 console.log(nc.toFixed(2));
 console.log(nc.toString());
 //this is boolean we have to write Number before
 console.log(Number.isInteger(nc));
 //on the following below we dont need to add the calling of our variable
 console.log(parseInt("3.5"));
 console.log(parseFloat(3))

//Numbers methods

const number=123.45;
console.log(number.toFixed());

let result2=number.toString();
console.log(result2);
console.log(number.toString());

console.log(Number.isInteger());
// const number2="123.45";
//the below examples all take the strings
//the parseInt and the parseFloat they are not the functions
console.log(parseInt("123.5abc"));

console.log(parseFloat("12.45"));


//THE ARRAYS METHODS
//the push is used to push the afray to the last index

let arr =["banana", "apple","mango","pineple"]
let resul=arr.push("umwembe")
console.log(resul,arr);

let another=[1,2,3,4,5];
let solution=another.pop();
console.log(solution,another);
//this is used to remove the remove the first elemnt of the array
let arr2=[1,4,6,7,0]
let sl=arr2.shift();
console.log(sl,arr2);

let arr3=["a","b","c","d"];
let answer=  arr3.unshift("A");
console.log(answer,arr3)
//is used to find the index of a given array
console.log(arr3.indexOf("a"))
//to check if a given element exist inside the array
console.log(arr.includes(0));
//the slice is used to give the elemrnt between a given range in array
console.log(arr3.slice(0,3));//the first is included(inclusive) then the last is excluded(exclusive) to mean here will start from the elemnt in the index 0 then end in the element in the index 2

const bigNames=["uwiamana","akabuto","akimana"];
// let response=bigNames.slice(0,1);
// console.log(response);

console.log(bigNames.splice(0,1));
//is used to fist point the element then the second delete those then what are the replacements like the elemnts that you want to replace there
