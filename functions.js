function add(a,b){
return a + b;
}
let result=add(2,3);
console.log(result);

function multiply(c,d){
  return c*d;
}
let result3 = multiply(8,4);
console.log(result3);


function substractItem(e,f){
  // let e,f;
  return(e-f)
}
console.log(substractItem(2,4));

//function for add and reuse
function makeSum(a,b){
return(a+b);
}
let result5=makeSum(3,7); //use the function 
console.log(result5*10);//resuse the result

//function make the area of rectangle
function rectangleArea(length,width){
  return (length*width);
}
let result9=rectangleArea(30,40);
console.log(result9 +" "+ "cm²");

//function to make the reverse
//this works on the array not the function
let string=["Hello World","JavaScript is fun!"];
string.reverse();
console.log(string);
//function to make the profilt
function coffeeProfit(sellingPrice, costPrice, quantity){
return totalProfit=(costPrice-sellingPrice*quantity);
}
console.log(coffeeProfit(30,40,50));


//using the parameters and the arguments

function sayHy(name)
{
  //when we are using the string parameter inside a function we dont need to put o the"";
  console.log("Hyyyyyy"+""+name);
  console.log(`${name}are you doing great or is nothing?`)
}
sayHy("Gabriel");


//using the block scope ES6:using const and let only when we use the var it become the error

