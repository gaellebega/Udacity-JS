//example of the function call back in usage


function sayName(name,callback){
  // let name="Ange"
  console.log("hello "+name+ "hope you are doing amazing!")
  callback();
}
function sayThing(){
console.log("See Youu")
}
sayName("ange",sayThing)





function goodMorning(city,callback){
console.log("hollaaaa "+city)
  callback();
}
function goodEvening(){
console.log("good Evening Rwanda!")
}
//by passing  in the parameters you pass inside the value and the function above
//you pass the second function inside the first one
//the below said go to function called gm then pass parameter called kigali after move to the next
goodMorning("kigali",goodEvening)
// goodEvening(goodMorning)??
goodEvening()

function ourVillage(village,callback){
console.log(" the name of our village is "+village+" please come to visit us we will make you a cup of coffee");
  callback();
}
function ourDistrict(){
  let district="Gasabo"
  console.log(" the name of our district is called "+district)
}
//here the call back is gonna be the second function
ourVillage("amakawa",ourDistrict);

var laugh=function(num){
  let result="";
  for(let i=0;i<=num;i++){
    result=result+"ha";
  }
}
console.log(laugh(10))