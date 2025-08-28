//FUNCTION EXPRESSION

var movieBox = function (moviename) {
  console.log("the name of the movie is " + moviename);
};
function playersList() {
  console.log("-----");
  console.log("Here is the players lists:");
  console.log("KIM");
  console.log("ANGELO");
  console.log("JUKONG");
  console.log("ANAAM");
}

playersList(movieBox("IN the Jungle"));

//inline function full explained example

function sayAges(callback) {
  console.log(10, "years old");
  console.log(13, "years old");
  console.log(14, " years old");
  console.log(16, "years old");

  callback("teenegers");
}
//we calll the callback in the second function

sayAges(function (category) {
  console.log("the age category of the list is: " + category);
});

//example 2 of an inline function
function listMarks(callback) {
  console.log("######");
  console.log("50%");
  console.log("60%");
  console.log("70%");
  console.log("80%");
  console.log("90%");
  callback("PASS");
}
listMarks(function (markscategory) {
  console.log("our marks category is: ", `${markscategory}`);
});

function foodList(callback) {
  console.log("###");
  console.log("banana");
  console.log("nuts");
  console.log("oats");
  console.log("yoghurt");

  callback("Proteins foods");
}
foodList(function (foodgeneralname) {
  console.log(
    "these are my fav proteins food their general name is: ",
    `${foodgeneralname}`
  );
});

function processUser(name, callback) {
  //when you do in this way there is no reason to pass an argument inside the callback b
  console.log("the user name is", `${name}`);
  callback();
}

processUser("uwimana", function () {
  console.log("the processing is done!");
});

//another example of a callback
function callMe(nickname, callback) {
  //inline function
  console.log("the name that i like is:", `${nickname}`);
  callback();
}
callMe("kajaja", function () {
  //using the function expression as a call back
  console.log("them reply: we like your nickname:)");
});
function emotions(callback){
    callback("haha!");
}
emotions(function(laugh){
    console.log("I am happy,", laugh);
});