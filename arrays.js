//Arrays: JavaScript arrays are used to store multiple values in a single variable.

var n1 = "waseem";
var n2 = "azhar";
var n3 = "sarfaraz";
var n4 = "Zain";

var names = ["waseem","azhar","sarfaraz","zain"];


//how to update an arrays
names[3] = "waseem";


// console.log(typeof(names));

//
// var person = {firstName:"John", lastName:"Doe", age:46};
// console.log(person['firstName']);

// Array Properties and Methods

//length new Promise(function(resolve, reject) {

  // console.log(names.length);

  var numb = [1,2,3,21,5,1,];
   //sort in asc order
  // console.log(numb.sort((a,b) => a-b ));
        //sort in desc
  // console.log(numb.sort((a,b) => b-a));

  // for(i=0;i<numb.length; i++) {
  //   console.log(numb[i]);
  // }
  //
  // for(i=0;i<names.length; i++) {
  //   console.log(names[i]);
  // }

// var result = names.forEach((name) => {
//        console.log(name);
// });

// Adding Array Elements

// var cars = ["bmw","benz","audi","ferrari"];

 // console.log(cars);

// cars.push("nano");

 // console.log(cars);

  // var points = new Array(40);     // Bad

  // var points = new Array(40);
    // var points = [20,25];
    // var points = [20];        //good
    // points.pop();
 // points.push(1,2,3,5,8);
 // console.log(points);

var carss = ["bmw","benz","audi","ferrari"];
var person = {name:"waseem",age:24,salary:35000}
// console.log(typeof(person));
// console.log(Array.isArray(person));
// console.log(Array.isArray(carss));

// Popping and Pushing
// Popping items out of an array, or pushing items into an array.


                     // Popping
// The pop() method removes the last element from an array:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

                        // Pushing
// The push() method adds a new element to an array (at the end):
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits);
