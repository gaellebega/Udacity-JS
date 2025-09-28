function hello() {
  console.log("Hi!");

}

let x = hello(); 

console.log(x); // undefined
//in javascriot every function is supposed to return something so if you dont do it its gonna be an error of undefined
//to send the value out of a function you must use the return



function sayNames(){
  let names="Uwimana Ange";
  return names;
}
console.log(sayNames());

//return is different from the printing