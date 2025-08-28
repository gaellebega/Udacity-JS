let name="uwimana";
function shadowingInJs(){
  let name="akira";
}
shadowingInJs()
console.log(name);

let fruit="apple";
{
  let fruit="banana";
  console.log(fruit);
}
console.log(fruit);

let animal="monkey";
{
  let animal="tigger";//inner shadows the outer variable
  console.log(animal);//prints "tigger"
}
console.log(animal);//then after it perints the outer variable