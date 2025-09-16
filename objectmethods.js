const user={name:"Nyirahatangimana",
  age:30,
  location:"Muhazi",
}
//when you want to get the keys you write them but when you wanna get the values also you write values
console.log(Object.keys(user));

//the combination of the key and the values are called entries

console.log(Object.entries(user));

//Object.fromEntries(arrays) converts an array of key and the values pair back into an object.

const entries=[["a",1],["b",2]];
// console.log(Object.fromEntries); this is how we can get the object from the array the nested array
//object from the entries it expect the pair of the items like each value must be paired
console.log(Object.fromEntries(entries));
//here the output is ginna be like this "1":2,"3":4 becouse it expect it to be the keys and the values nested in an array as the entries
const secondArray=[[1,2],[3,4],[5,6]];
console.log(Object.fromEntries(secondArray));
//when you want to merge the object you may use this method

const obj1={a:1};
const obj2={b:2};
const merge=Object.assign({},obj1,obj2);
console.log(merge);


const student1= {name:"uwimana",age:20};
const student2= {name:"uwase",age:40};
const combine = Object.assign({},student1,student2);
console.log(combine);

//when the key repeats itself it only take one
//so to correct it you need to do this

const students=[student1,student2];

const ob={a:1}

ob.a=3;
console.log(ob);


const anotherOb={name:"mpazimaka"};
Object.seal(anotherOb);
//the seal is only used to update the existing one not to change
//becouse the keys also are the same it is gonna take the second one
// anotherOb.name="umukundwa";
anotherOb.name="uwimana";
console.log(anotherOb);

const anotherObj2={a:2}
Object.seal(anotherObj2);
anotherObj2.a=5;//this is gonna be allowed
// anotherObj2.a=8;//this is gonn abe ignored
console.log(anotherObj2)


//Object.hasOwn(obj,prop)
console.log(Object.hasOwn({a:1},"a"));
//the reason why this is gonna be false is because  it expect the keys to be the characters so the second one its gonna be false.
console.log(Object.hasOwn({a:1},1));

