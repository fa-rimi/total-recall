// JavaScript Review Lab

// PART I

// PART A - Q/A
/**
 * 1. How do we assign a value to a variable?
 *      A: There are different ways to assign a value to a variable depending on the language. For JS specifically you would would
 *         declare the variable by combining a keyword and variable name. Then you would equal(=) it to the value. Values could be a
 *         string, numbers, booleans, etc.
 *      Ex: const hermione = "ron";
 *
 * 2. How do we change the value of a variable?
 *      A: We change the value of a variable by using the assignment operator (=)
 *      Ex: (SPOILER) let colossalTitan = "Bertolt";
 *          colossalTitan = "Armin";
 *
 * 3. How do we assign an existing variable to a new variable?
 *      A: We can assign an existing variable to a new variable using the assignment operator (=)
 *      Ex: let a = 5;
 *          b = a;
 *
 * 4. Remind me, what are declare, assign, and define?
 *      A: Declaring is declaring a variable with a keyword and variable name. (let a;)
 *         Assigning is to assign a value to said variable. (let a = "sighs";)
 *         Defining is telling the computer that there is a variable that exists with a specific value and type so the program can then
 *         proceed and compile.
 *
 * 5. What is pseudo coding and why should you do it?
 *      A: Pseudo code is logically thinking and writing a "draft" of how you would solve a problem without writing actual code. It is
 *         an informal way of programming that doesn't require strict code and syntax. This is helpful because it you build a
 *         foundational understanding of the problem as well as an outline. At that point you just need to replace the outline with
 *         formal code.
 *
 * 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 *      A: In my opinion I think its good to spend about 70% of the time thinking about how you're going to solve the problem and
 *         spending 30% of the time coding. You can only think about your approach to a problem for so long. A large portion of problem
 *         solving is writing code, testing, running into an error, thinking, and debugging. Then the cycle repeats.
 *
 */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  PART B - STRINGS

// Create a variable called firstVariable
// const firstVariable;

// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = "Yuh";

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = 3;

// What is the value of firstVariable?
console.log(firstVariable);
// Output = Yuh

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Rimi";
console.log(`Hello, my name is ${yourName}`);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PART C - BOOLEANS
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PART D - THE FARM
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
  console.log("moooo");
}
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
animal = "penguin";
if (animal === "cow") {
  console.log("moooo");
} else {
  console.log("Hey! You're not a cow.");
}
// Commit
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PART E - DRIVERS ED
// Make a variable that holds a person's age; be semantic
const age = "14";

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16) {
  console.log("Here are the keys!");
} else if (age < 16) {
  console.log("Sorry, you're too young.");
} else {
  console.log("invalid age");
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PART II

/**
 * Remember: USE letwhen you initialize your for loops!
 *
 * This is GOOD: for(let i = 0; i < 100; i++)
 * This is NO GOOD: for(i = 0; i < 100; i++)
 *
 **/

// A -- THE BASICS
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let r = 10; r <= 400; r++) {
  console.log(r);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let num = 12; num <= 4000; num++) {
  if (num % 3 === 0) {
    console.log(num);
  }
}

// B -- GET EVEN
// Print out the numbers that are within the range of 1 - 100
// for (let num1 = 1; num1 <= 100; num1++) {
//     console.log(num1);
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let num1 = 1; num1 <= 100; num1++) {
  if (num1 % 2 === 0) {
    console.log(num1 + " <-- is an even number");
  } else {
    console.log(num1);
  }
}

// C -- GIVE ME FIVE
for (let index = 0; index <= 100; index++) {
  if (index % 5 === 0 && index % 3 === 0) {
    // For numbers divisible by both three and five, be sure your code prints both messages
    console.log(`I found a ${index}. High five but three is a crowd.`);
  } else if (index % 5 === 0) {
    // print out "I found a number. High five!" if the number is a multiple of five
    console.log(`I found a ${index}. High five!`);
  } else if (index % 3 === 0) {
    // print out "I found a number. Three is a crowd" if the number is a multiple of three
    console.log(`I found a ${index}. Three is a crowd.`);
  }
}

// D -- SAVINGS ACCOUNT
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;

// for( let i= 1; i <= 10; i++){
//     bank_account += i
// }
// console.log(bank_account)
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
for (let i = 1; i <= 100; i++) {
  bank_account += i;
  if (i === 100) {
    bank_account *= 2;
  }
}
console.log(bank_account);
//Check your work! Your bank_account should have $10,100 in it.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// PART III

// A -- TALK ABOUT IT
/**
 * 1. What are the things in an array called?
 * Things inside an array are called elements
 *
 * 2. Do Arrays guarantee those things will be in order?
 * Yes arrays guarantee elements will be in order
 *
 * 3. What real-life thing could you model with an array?
 * A line, train, ticket system, basically anything like an object.
 *
 **/



// B -- EASY DOES IT
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["How", "Are", "You?"];



// C -- ACCESSING ELEMENTS
// Given the following array
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
randomThings[0]; // the 0 indicates the first value

// Change the value of "Hello"to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);



// D -- CHANGE VALUES
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
ourClass[2]; // the 2 indicates the third value
console.log(ourClass);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);



// E -- MIX IT UP
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array:
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "targaryen");
console.log(myArray);

// Remove the 5 from the beginning of the array
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse()
myArray.reverse();
console.log(myArray);

/**
 * Did you mutate the array?
 * A - Yes because it calls to the array directly and then makes the changes 
 * 
 * What does mutate mean?
 * A - Mutate means to change or alter 
 *  
 * Did the .reverse() method return anything?
 * A - The .reverse() method returned the array in a reverse order
 *
 **/




// F -- BIGGIE SMALLS





// G -- MONKEY IN THE MIDDLE





// H -- WHAT IN YOUR CLOSET

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
