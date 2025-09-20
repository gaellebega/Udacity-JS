const person={
  name:"peter",
  age:20,
  location:"Kigali",
  //this is the name of the object method
  display:function(){
    console.log(`name is ${this.name},age is ${this.age}, location is ${this.location}`)
  }
}
//as we know we need to call the functon in order to get the output so also we need to call the object name
person.display()