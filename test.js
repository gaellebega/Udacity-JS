
let school={
  name:"FAWE",
  location:"gisozi",
  students:"800",
  principles:"2"
}
for(key in school){
  console.log(`${key}:${school[key]}`)
}
let arraySiblings=["uwimana","ange","anny","aime"]
for(let sibling of arraySiblings){
  console.log(sibling) ;
}
function sayHello(){
  console.log("Hello Earth!")
}
//to be abale to get the value of a function, we need to call it
sayHello();
//passing the arguments in the function

function sayName(name){
console.log(` Hello Beautiful ${name}`);

}
sayName("Gaelle");
sayName("Lorraine");
sayName("Galirene"); 

//another role of the string intrepolation
const paragraph=`hello guys i just wante do
let you know that on this day i have writen 59 wpm
is in't it amazing?
because at first day i was able to write only 25 wpm 
then i made a goal of writting 60 wpm by the end of August
and now its 59wpm on the 28th of August,
my advice to evryone is that considtensy is the key to success
if you want to achieve something you hav
e to work hard for it`;
console.log(paragraph);

const name2="this is my name";
//when you dont open the quotes it will consider the whole thing as one string
console.log(name2.split(""));
//when the string is like 3
// console.log(name2.split("   "));
const name3=" this is my name ";
console.log(name3.split(""));

const name4="  this   is   my   name  ";
console.log(name4.split(""));

const name5="this,is,my,name";
console.log(name5.split(" "));

const name6="this is my name";
console.log(name6.split(" "));
const names="my names are uwimana anageliqur"
console.log(names.replace("anageliqur","ange"));