const prompt=require("prompt-sync")();
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
//The fuzzbuzz internview quetion
// var i =1;
// while (i<100){

// }
for(a=0;a<=100;a++){
  if((a%3==0)&&(a%5==0)){
console.log("FizzBuzz");
  }
 else if(a%3==0){
    console.log("Fizz");
  }
  else if(a%5==0){
    console.log("Buzz");
  }
   else{
    console.log(a);
  }
  }
//Understanding using the while loops

  let x =0;
  while(x<=20){
    if((x%3==0)&&(x%5==0)){
console.log("Julia"+""+"James");
    }
    else if(x%3==0){
console.log("Julia");
    }
    else if(x%5==0){
console.log("James")
    }
    else{
      console.log(x);
    }
    x=x+1;
  }

  //we also have the nested loops in the js
  //which are the loops inside another loop

  for(i=0;i<=5;i++){
    for(j=0;j<=5;j++){
      console.log(i+""+j)

    }
  }
  //function to make a factorial of a number

  let n=5;
  let result=1;
  for(let i=1;i<=n;i++){
    result=result*i;
    console.log("Step",i,":result=",result);
  }
  console.log("Factorial of",n,"is",result);

  //do while loop
  //it ruun the code fisrt then checks the condition after

  // let password;
  // //this means when the password is not correct then repeat while it is true then print access granted
  // do{
  //   password=propmt("Enter your password please!");
  // }while(password!=="uwanyirigira!234");
  // console.log("The paasword is wrong then try another one");
  //the above code means while passord not rqual to that then ask enter passord againn while it is correct means then tell user to make that below 
  

  //the purpose of the for...in

  let life ={
    name:"Gaelle",
    work:"Software Engenieer",
    countiesVisited:12,
    motherLand:"Rwanda"
  };
  for(let key in life){
    console.log("key:",key);
    console.log("Value:",life[key]);
  }
  // for(let key in life){
  //   console.log(`${key}:${life[key]}`);
  // }

  //do while loop example
  let password;
  do{
    password=prompt("please enter the right password: ")
    if(password!=="Uwimana@123"){
      console.log("you have entered a wrong password:(")
    }
  }
  while(password!=="Uwimana@123");
  console.log("access granted!")