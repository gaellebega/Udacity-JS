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
//to be able to get the value of a function, we need to call it
sayHello();

//passing the arguments in the function
function sayName(name){
console.log(` Hello Beautiful ${name}`);

}
sayName("Gaelle");
sayName("Lorraine");
sayName("Galirene"); 

//another role of the string intrepolation
const paragraph=`hello guys i just wanted to
let you know that on this day i have written 59 wpm
is in't it amazing?
because at first day i was able to write only 25 wpm 
then i made a goal of writting 60 wpm by the end of August
and now its 59wpm on the 28th of August,
my advice to everyone is that consistensy is the key to success
if you want to achieve something you have
 to work hard for it`;
console.log(paragraph);

const name2="this is my name";
//when you dont open the quotes it will consider the whole thing as one string
console.log(name2.split(""));
//when the string is like 3
// console.log(name2.split("   "));
const name3=" this is my name ";
console.log(name3.split(""));
//when it is empty("") it give each string though it can be the spaces
const name4="  this   is   my   name  ";
console.log(name4.split(""));

//when it is like this (" ") to mean it gonna take evrything as a one string
const name5="this,is,my,name";
console.log(name5.split(" "));
//???
const name6="this is my name";
console.log(name6.split(" "));

const names="my names are uwimana angelique"
console.log(names.replace("anagelique","ange"));

// isOpen===false; //this is the property data same as you can write name="nadia" all of those are the properties

function open(){
  //this is the normal function so to mean it doesnt belong anywhere
  console.log("we have a meeting under umbrella:)")
}
open();
//this is the function inside the object method so as to belong to the specific
// open:function(){
  
// }



// var umberella={
//   name:"red-umbrella",
//   location:"kigali",
//   isopen:false,
//   open:function(){
//     if(umberella.isopen===true){
//     return "the rain will be on you" ;
//     }
//     else if(umberella.isopen===false){
//       return "lucky you the rain is not gonna be on youu!!"
//     }
//   }
// }
// umberella.open();
var umbrella={
  color:"red",
  isOpen:true,
  location:"kigali",

  open:function(){
    if(this.isOpen === true){
      return "your umbrella is already opened"
    }
    else{
      this.isOpen=true;
      return"Juila opens the umbrella";
    }
  },
  close:function(){
if (this.isOpen === false){
  return "your umbrella is closed";
}
else{
  this.isOpen=false;
  return"make double check about your umbrella";
}
  }
}
console.log(umbrella.open());
console.log(umbrella.open());
console.log(umbrella.close());
console.log(umbrella.close());


var facebookProfile={
  name:"",
  friends:20,
  messages:["hy","wanna chat","we are here for you","don't hesitate","reach out to us" ],

postMessage: function(message){
this.messages.push(message);
},
//Remove the message at the given index(0-based)
deleteMessage: function(index){
if(index>=0 && index<this.message.length){
  this.messages.splice(index,1);
}
},
addFriend: function(){
this.friends += 1;
},
removeFriend: function(){

if(this.friends>0){
  this.friends-=1;
}
}

}