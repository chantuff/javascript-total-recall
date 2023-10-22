/*
How do we assign a value to a variable?
use =
*/
// let number = 5;
// console.log(number);

//How do we change the value of a variable? 
// number = 10;
// console.log(number);

// using const to declare a variable
// const newNumber = 25;
// console.log(newNumber);

// Remind me, what are declare, assign, and define?
// declare = using let, var or const to declare or create
// assign = giving it a value
// define = 


// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// let yourName = "Chan";
// console.log("Hello, my name is " + yourName)

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a > b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false && true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a > b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a > a > d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

/* 
We create the variables using: let, var, const

1. How do we assign a value to a variable?
 use the single = with the variable name and the new value
 (variable = value)

2. How do we change the value of a variable?
The same way, use the =
( variable = newValue )

3. For a variable, what is the difference between: 
declare - let x 
assign - this is what we did in question 1
define - let x = 5

What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

*/

// let number = 5;
// console.log('This is the value of number');
// console.log(number);
// number = 7;
// console.log('this is the new number');
// console.log(number);

// const newNumber = 10;
// console.log('This is the new number');
// console.log(newNumber);
// you cannot change a variable that is a string, number, or boolean if you initialize it as const
// newNumber = 12;
// console.log('this is the same new number');
// console.log(newNumber);

// what are the types of variable in javaScript
// boolean, string, number
// array, object


/*
STRINGS

*/
// create a variable called firstVariable
// let firstVariable;
// Assign it the value of the string "Hello World"
// firstVariable = "Hello World";
// this would do the same thing
// let firstVariable = "Hello World";

// console.log('firstVariable is ');
// console.log(firstVariable);
// console.log('firstVariable is: ', firstVariable);
// console.log('firstVariable is: ', 'firstVariable');
// Change the value of this variable to some number
// firstVariable = 17;
// console.log('firstVariable is: ', firstVariable);

// Store the value of firstVariablein a new variable called secondVariable
// let secondVariable = firstVariable;
// console.log('after second variable');
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);

// Change the value of secondVariableto any string.
// secondVariable = 'any string';
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);
// What is the value of firstVariable?

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName
// so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
// let yourName = 'Christina';
// you can concatenate a string in two ways
// using the console.log so that we can see the concatenation, but you don't need that to concatenate
// console.log('Hello, my name is ', yourName);
// console.log('Hello, my name is ' + yourName);

/* 
BOOLEANS
*/

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// you could also use (a < b)
// console.log(a !== b);

// console.log(c > d);

// console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
// for || (OR), if any one thing is true, the whole thing is true
// console.log(true || false);
// console.log(false && true);
// console.log(false || false || false || false || false || true);

// console.log(false === false)

// console.log(e === 'Kevin');

// a = 4, b = 53, c = 57
// is 4 = -(53 - 57)
// console.log(a === -(b - c));
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + b === c);

// console.log(a !== a - d);
// note: the answer is a simple arithmetic equation, not something "weird"

// console.log(48 == '48');
// this will be false
// console.log(48 === '48');


// =========================================
// D. The Farm
// =========================================

// declare a variable animal and set it to be either "cow" or something else
// This will print "Hey! You are not a cow."
// let animal = "frog";
// animal = "cow";
// This will print "moooooooo"
// if (animal === "cow") {
//     console.log("moooooooo");
// } else {
//     console.log("Hey! You are not a cow.")
// }

// =========================================
// E. Driver's Ed
// =========================================
// let age = -5;
// if (age >= 16) {
//     console.log("Here are the keys!");
// } else if (age > 0) {
//     console.log("Sorry, you're too young.")
// } else {
//     console.log("that's not a real age")
// }


// ==================================================
// SECTION II 
//      LOOPS
// ==================================================

// =========================================
// A. The Basics
// =========================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive
// i++ is the same as i = i + 1
// for (let i = 0; i < 11; i++) {
//     // console.log(i);
// }

// // Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i=10; i<=400;i++) {
//     // console.log(i);
// }

// // Write a loop that will print every third number starting with 12 and 
// // going no higher than 4000
// // 12, 15, 18, ... 
// // i += 3 is the same as i = i + 3
// // set up of a for loop
// // for (starting point; go until; how to step up or down) 
// //   {what to do}
// for (let i=12; i< 4000; i+=3) {
//     // console.log(i);
// }

// // the first few steps of a for loop
// // let i = 4000
// // is i > 12 (is 4000 > 12)
// // it is, so console.log(i), and then i = i - 3, so i = 3997
// // it goes back around, and checks, is i > 12
// // 3997 > 12 (this is true), so it does what is in {}
// for (let i = 4000; i > 12; i -= 3) {
//     // console.log(i);
// }

// // count down by 2 from 10 to 0
// // so my starting point is 10, and my ending point is 0
// // and we subtract 2 each time
// // i -= 2 is the same thing as i = i - 2
// for (let i=10; i >= 0; i = i - 2) {
//     // console.log(i);
//     // the i = i - 2 happens after you console.log
// }

// // =========================================
// // B. Get Even
// // =========================================
// // print out the numbers that are withing the range of 1 - 100
// // add a message next to even numbers saying 
// //  "<-- is an even number"
// // are we including 1 - 100? we are including 1 and 100
// // remember that % checks for the remainder
// // i % 2 checks for the remainder of i / 2
// for (let i=1;i<=100;i++) {
//     if (i%2 === 0) {
//         console.log(i + " <-- is an even number")
//     } 
//     // else {
//     //     console.log(i);
//     // }

// }
// ===============================================================================
// Section II
// Arrays and flow control 

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let littleNumber = 9;
// let bigNumber = 50;
// if (littleNumber <= 5) {
//     console.log("littleNumber");
// } else {
//     console.log(bigNumber);
// }


// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  // Thom's closet is more complicated. Check out this nested data structure!!

// ===========================================================================
// FUNCTIONS 
// ===========================================================================
// Function declaration:
// function doStuff() {};

// Function expression:
// const doStuff = function() {}

// functions = verbs
// variables = nouns
// Do you think you could write a function called printGreetingwith a parameter name that 
// returns a greeting with the argument interpolated into the greeting?

// function printGreeting(name) {
//     return `Hello there, ${name}!`
// }

// console.log(printGreeting('Chan'));

// Write a function printCoolthat accepts one parameter, name as an argument.
// The function should print the name and a message saying that that person is cool.

// function printCool(name) {
//     return `${name} is cool!`
// }
// console.log(printCool('Captain Reynolds'))

// =====================================================================================
// C. calculateCube
// =====================================================================================
// Write a function calculateCubethat takes a single number and prints the volume of a cube made 
// from that number.

// function calculateCube(number) {
//     console.log(number * number * number)
// }
// calculateCube(6)

// =====================================================================================
// C. isVowel
// =====================================================================================
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns 
// true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test 
// your function on every vowel and make sure it's working. In general, when you write 
// functions, take a minute to test them with different 
// values to make sure they behave the way you want.

// function isVowel(letter) {
//     if (letter === 'a'|| letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' )
//     return true;
//         } else
//         return false;
// }
// console.log(isVowel('o'));

// ======================================================================================
// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). 
// The function should
// return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(string1, string2) {
//     return[string1.length, string2.length]  
// }
// console.log(getTwoLengths('Chan', 'Tuff'));

// ======================================================================================
// F. getMultipleLengths
// ======================================================================================
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: 
// an array of strings. The function should return an array of numbers where each number
// is the length of the corresponding string.

// function getMultipleLengths(arr) {
//    let retArr = [];
//    for (let i = 0; i < arr.length; i++) {
//    retArr.push(arr[i].length);
//    return retArr;
//      }
//   }

// console.log(getMultipleLengths(['chan', 'marco', 'aysia', 'dominique']))

// =======================================================================================
// G. maxOfThree
// =======================================================================================
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers 
// are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(one, two, three) {
//     if((one >= two)) && (one >= three)) {
//         return one;
//     } else if((two>= one) && (two >= three)) {
// } else if ((three >= one)&&(three >= two)){
//     return three
// }
// }

// function maxOfThree(a, b, c){
//     if((a >= b) && (a >= c)){
//         return a;
//     }else if((b >= a) && (b >= c)){
//         return b;
//     }else if((c >= a)&&(c >= b)){
//         return c;
//     }
// }

// console.log(maxOfThree(256, 255, 256))

// ======================================================================================================
// H. printLongestWord
// ======================================================================================================
// Write a function printLongestWordthat accepts a single argument, 
// an array of strings. The method should return the longest word in the array. 
// In case of a tie, the method should return the word that appears first in the array.

// =======================================================================================================
// OBJECTS
// =======================================================================================================

// =======================================================================================================
// A. Make a user object
// =======================================================================================================
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased 
// to an empty array []. Set the other values to whatever you would like.



// const user = {
//      name: 'Chan',
//      age: 25,
//      email: 'chan@yahoo.com',
//      purchased: []
// }


// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "Columbus",
//     purchased: ['house', 'dog', 'car']
// }
// // to change user age
// // user.friend.age = 66;

// let arrLength = user.purchased.length;
// arrLength = user.friend.purchased.length
// for (i = 0; i < arrLength; i++) {
//     console.log(user.purchased[i]);
// }


