const prompt = require ("prompt-sync")();
let password
do{
  password=prompt("Enter the password: ");
  if(password!=="aec123"){
    console.log("enter the right password!:(");
  }
}
while(password!=="aec123")
  console.log("access granted:)");

let(key in life);
life={
  name:"uwase",
  age:"12",
  location:"kigali",
  indexNumber:"2230459"
}
console.log("key:",key);
console.log("Value",life[key]);

