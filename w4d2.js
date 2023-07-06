// JavaScript Review Lab

// Part A - Q and A
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

// Part B - Strings

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
