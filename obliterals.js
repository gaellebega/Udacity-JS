var student={
  name:"ishimwe",
  location:"kigali",
  age:20,
  parents:["uwimana","mugenzi"],
}
console.log(student.parents[0]);
console.log(student.parents[1]);

var university={
  name:"UR",
  location:"kigali",
  numberOfSttudents:2000,
  ageRange:[20,10],

  univOfRwanda: function(){
    //you can not use the return 2 times because the return works only once to mean the function can return only once after the return it stops
    return this.ageRange[0];
  
  }
  
}
  console.log(university.ageRange[1]);
console.log(university.univOfRwanda());

//to name the variables please dont use the numbers and also use camel-case when it is too wrong instead of using the quotations

