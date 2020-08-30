   //1.variables : is conatiner to store the data

   var name = "waseem is a software dev waseem";


   var num1= 5;
   var num2 = "5";
   var num3 = 0.5;

  var ty1 =  typeof(name);

  var ty2 =  typeof(num1);
  var ty3 =  typeof(num2);
  var ty4 =  typeof(num3);

  // console.log(ty1);
  // console.log(ty2);
  // console.log(ty3);
  // console.log(ty4);

   //string properties and methods

//1.to find the length of string
 // console.log(name.length);

//2.Finding a String in a String
// console.log(name.indexOf("waseem"));

//3. The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

 // console.log(name.lastIndexOf("waseem"));

 //4.
 // console.log(name.search("dev"));


 // Extracting String Parts
 // There are 3 methods for extracting a part of a string:

      // slice(start, end)
//  console.log(name);
//  console.log(name.lastIndexOf("waseem"));
// console.log(name.slice(-4,31));


 // substring(start, end)

 // console.log(name);
 // console.log(name.lastIndexOf("waseem"));
 //  console.log(name.substring(25,31));

 // substr(start, length)
// console.log(name.substring(-4,31));

//Replacing String Content

 // replace method is a case sensitive so to overcome tht we use i flag

// console.log(name.replace(/WASeem/i,"Sarfaraz"));


//to chnage the selected value globally we use g flag
// console.log(name.replace(/WASeem/g,"Sarfaraz"));

//to handle both sensivtivness and to chnage the selected value globally
// console.log(name.replace(/WASeem/gi,"Sarfaraz"));

              // Converting to Upper and Lower Case

 // var firstname = "sarfaraz";
 //  var lastname = "KHAN";
 // console.log(firstname);
 //
 //  console.log(firstname.toUpperCase());
 //
 //   console.log(lastname);
 //    console.log(lastname.toLowerCase());


              // The concat() Method

  // var firstname = "sarfaraz";
  // var lastname = "khan";
  //  console.log(firstname.concat(" ", lastname));

          // String.trim()
// The trim() method removes whitespace from both sides of a string:
var firstname = "     sarfaraz khan                                             ";
console.log(firstname);
console.log(firstname.trim());
