//method is function inside an boject
///example
let names={
  fname:"uwimana",
  lname:"angel",
  callName:function(){
    //the commas make evrything becomes ignored
    return `my names are"+this.${this.faname}+${this.lname}`;
  }
}
console.log(names.callName());