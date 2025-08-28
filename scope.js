//here we are using the global scope of variable
let Lname="Angelique";
let   Fname="UWASE";
let school="UR-CST";
function makeScope(){
console.log("my name is " +`${Fname}`+" "+`${Lname}`)
}
makeScope();
console.log("my school is "+`${school}`);

//here we are going to use the local scope of variable

function localScope(){
  let level= "U1";
  console.log("your level in university is " +`${level}`)
}
localScope();

//the block quote scope
function blockQuote(){
  if(true){
    let fruit="banana";
  console.log(fruit);
  }

}
blockQuote();
//when we use the var it is easy to ignore the scope like the var ignores the scope
if(true){
  var name="mango";
}
console.log(name);

//NESTED SCOPES
console.log("----------------")
let city="kigali";
function outerFunction(){
let street ="Main street"; //this is grobal to the innefunction
function innerFunction(){
let houseName="KG-123";
console.log(`${houseName}`);
console.log(`${street}`);
console.log(`${city}`);
} 
innerFunction();
}
//before calling the outer function you have to call the inner function first
outerFunction();


