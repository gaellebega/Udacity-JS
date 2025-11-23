//for  of loop

const names=["john","doe","smith"];
for(name of names){
  console.log(name);
}

const student={
name:"uwimana", age:2, location:"Rwamagana"
}
for(key in student){
  console.log(key,student[key]);
}
let i=[10,20,30,40,50];

for(index=0;index<i.length;index++){
  console.log(i[index]);
}

const nums=[1,2,3,4,5];
const double=nums.map(n=>n*2);
console.log(double);



const oddNumbers=[1,3,5,7,9,11,13,15];
const addTwo=oddNumbers.map(n=>n+2);
console.log(addTwo);