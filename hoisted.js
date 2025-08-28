console.log(x); // ???
var x = 10;
console.log(x);


//by making the hoited we call the function above
sayHello()
function sayHello(){
  console.log("Hello, students hope ypu are all doing alright")
}
//in the noraml way we call the function below
// console.log(y);
let y;
console.log(y);

console.log(z); // ???
//on the const couse the error because the const variable is accessed early
const z=10;
console.log(z);
