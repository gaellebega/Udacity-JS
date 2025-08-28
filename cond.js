let weather = "rain";

if(weather==="rain"){
  console.log("bring the jacket");
}
else if(weather==="sunny"){
  console.log("come to the bich")
}
else{
  console.log("there is nothing much out of here you are safe!")
}

let number=8;
if(number%2!==2){
  console.log("the number is even");
}
else if(number%2==0){
  console.log("the number is odd");
}

let flavor="vanilla";
let topings="chocolate";
let coneColor="brown";
if((( flavor==="vanilla")||(coneColor==="brown"))&&((topings=="chocolate")||(flavor==="vanilla"))&&((topings==="chocolate")||(coneColor="brown"))){
  console.log("You have made the right choice");
}
else{
  console.log("Please make another choice again!");
}