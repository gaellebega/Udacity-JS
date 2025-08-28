let person1={
  name:"uwimana",
  age:20,
  location:"kacyiru",
  siblings:2
}
for(key in person1){
  console.log("key:",key);//here is going to display  the key with the name of the key
  console.log("value:",person1[key])//this means take the value of each key
}
let person2={
  name:"uwase",
  age:30,
  location:"kicukiro",
  siblings:4
}

for(key in person2){
  // console.log(`${key}`);
  console.log(`${key}:${person2[key]}`);
}

//working with the arrays
let fruit=["banana","orange","pinapple"];
for(let index in fruit){
  console.log(`Index:${index}`);
  console.log(`fruits:${fruit[index]}`);
}


//loops over an arrays of fruits
//when we want to get one by one items 
let fruits = ["apple","banana","grape"];
for(let fruit of fruits){
  console.log(fruit);
}

let greetings="Hello, World!";
for (let char of greetings){
  console.log(char);
}