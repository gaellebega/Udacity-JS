const donuts=["jelly donut","chocolate donut","glazed donut"];
//donut[0]+="hole";
//donut[1]+="hole";
//donut[2]+="hole";

for(var i=0; i<donuts.length; i++){
  //it was taking it as one string so to change it you have to make this by writig the index so ass to add the hole to the current item
donuts[i]=donuts+"hole";
donuts[i]=donuts[i].toUpperCase();
}
console.log(donuts);



var fruits=["banana","apple","mango","orange"];
//the parameter that we pass in the function it is not the mandatory to be 1 it can also be 2 or more
fruits.forEach(function(fruit,index,arr){
  // fruit += " taste good";
  fruit = fruit.toUpperCase();
  console.log("fruit:",fruit+" taste so good");
  console.log("index:",index);
  console.log("arr:",arr);

});
//.tostring is used to change also the array in the one string 

const words=["wax","meouw","muuii"];
words.forEach(function(word,num,wholearray){
  console.log("word" + num + " in" + wholearray.toString() + " is" +word);
});

//mixing the for loop and for Each is unnecessary so the good way is to choose one to use

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
//you have to pass in all the parameters that you are gonna use
test.forEach(function(tes,index,arr){
  if(tes%3===0){
    arr[index]=tes+100;
  }
});
console.log(test);
//the forEach it doesnot create the new array but it goes to the orginal array and make the changes
//map is the one that create a new array
//map it is used to take the returned values and then it creates the new array
//for the forEach if you want to create a new array you have to create it manually bcz the forEach cant return any value like it doesnt care at all




