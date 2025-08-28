
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
sayName("Galila");

//another role of the string intrepolation
