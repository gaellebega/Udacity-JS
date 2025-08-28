const greet = function (fruit) {
  return "I like " + "eating" + fruit;
};
console.log(greet(" avocado"));

// normal function

function greetings() {
  console.log("Hello!");
}
greetings();
//here we have made a cls
//function expression
const greetUs = function () {
  console.log("make a wave!");
};
greetUs();
//A function expression is just a function stored in a variable. It’s used everywhere in real
//  JS apps: for callbacks, event handling, array methods, and closures. Without it, modern
// JavaScript (like React, Node.js, etc.) wouldn’t work as we know it.

var catSays = function (sound) {
  return "the sound of cat " + "is " + `${sound}`;
};
console.log(catSays("meow"));

var dogSaid = function (max) {
  var dogMessage = "";
  for (var i = 0; i < max; i++) {
    dogMessage += "woof ";
  }
  return dogMessage;
};
console.log(dogSaid(6)); //it will take the numver depending on our max value ours is 6 so it will print 6 times woof
