// Variables and Data Types

/**
 * 1. What are the two recommended keywords for declaring variables in JavaScript, and when should each be used?
 * *** *** The two recommended keywords we use to declar in JS are
 * ## const: const used for declaring varialbles whose value is intended to remain constant and will not be reassigned throughout the program execution
 * ## let: we use let keyword for declaring variables whose value might need to be reassigned later in the program.
 */

/**
 * 2. Why is the var keyword discouraged in modern JavaScript?
 * var keyword is discuraged in modern JS primarily due to its function scoping and hosting behavior
 * when we say var is function-scoped it means the variables scope is not limited to block statments
 *                    _______________
 *      example
 *          if(true){
 *                  var count = 10;
 *           }
 *      we can access count from here outside of the if block
 *          console.log(count)
 *      this lead to unexpected error or ambiguity
 * when we say hoisted behavior with var the declaration is moved to the top of it's function(global) scope
 *            ________________
 * and it is automatically assigned the value undefined
 * this allows us to access the variable before the line which can be very confusing
 *      example
 *              console.log(userName);
 *                  var userName = "Hana";
 *              consol.log(userName);
 *
 */

/**
 * 3. Write a valid variable name following the camelCase convention for storing a customer's phone number.
 *
 */
let customerPhoneNumber;

/**
 * 4. What will happen if you try to name a variable starting with a number, like 9lives?
 *  If i try to name a variable starting with number i will result a syntax error
 */

/**
 * 5. List all five primitive data types in JavaScript.
 * 1. String: we use it to represent textual date
 *         let firstName = "Daniel";
 * 2. number: represent both integer and floating point numbers
 *          let age = 28;
 *          let height = 1.89; //in meters
 * 3. boolean: represent the logical entity with only two possible values true/false
 *          let isHeMarried = fales;
 * 4. null: intentional absence of object value or unknown value
 *          let emptyValue = null;
 * 5. undefined: represent a variable that has been declared but not yet assineed a value by the programmer
 *          let middleName;
 */

/**
 * 6. What value does a declared but unassigned variable hold?
 *  undefined
 */

/**
 * 7. What is the difference between undefined and null?
 * the code difference b/n undefined and null how and why the empty state is aplied
 * undefined : variable hasbeen declared but not yet been assigned a vlaue by the progarammer.
 * it is the defalut inital state for any variable that has not been initialized.
 * null: is an assignment value, it is an explicit instruction by the programmer
 * type using typeof method  undefined : undefined  null : object
 *
 */

/**
 * 8. Write code to declare a constant variable called earthGravity and assign it the value 9.81.
 */

const earthGravity = 9.81;

/**
 * 9. How do you check the data type of a variable in JavaScript?
 * we check data type for variables using typeof method
 */

let name = "HanA";
console.log(typeof name); //String
let salary = 2000;
console.log(typeof salary); //number
let isStudent = true;
console.log(typeof isStudent); //boolean
let middleName = null;
console.log(typeof middleName); //object
let lastName;
console.log(typeof lastName); //undefined

/**
 * 10. What is the quirk when checking the type of null using the typeof operator?
 *      the type for null value is object
 *      let middleName = null
 *      console.log(typeof(middleName));//object
 *
 */

// Console and Syntax

/**
 * 11. What is the purpose of the console.log() function?
 * the primary purpose is to output messages , vlaues of variables or expressions to the developer console.
 * we also use it for debugging to inspect the state of variables at different points in our code
 * we also use to track code excution by strategically placing console.log statments
 */

/**
 * 12. Write a console.log() statement that prints three separate arguments: your name, age, and country.
 */

let fullName = "Hana Debay";
let dateOfBirth = "12-6-2025";
let country = "Uganda";
console.log(fullName);
console.log(dateOfBirth);
console.log(country);

/**
 * 13. How do you write a single-line comment in JavaScript?
 *
 */
// we write singl-line comment using  two slashes

/**
 * 14. Write a multiline comment explaining what variables are.
 * this is how we write multiline comments
 * we use two ** between // two slashes
 */
/*
variables are named containers used to store data values. 
They act as placeholders for information that can be referenced and manipulated throughout a program.
*/
/**
 * 15. What happens when JavaScript encounters a syntax error?
 * It fails to excute, the engine stops all excution as soon as it detects code that violates the language's grammar rules and
 * display error message, and wait until the error corrected
 */

/**
 * 16. What are the three types of quotes that can enclose a string in JavaScript?
 * 1. Single Quotes: 'Hana Debay'
 * 2. Double Quotes: "Hana Debay"
 * 3. Backticks(template litrals): `Hana Debay`
 */

/**
 * 17. Write a console.log() statement to display the result of 5 raised to the power of 3.
 * console.log(5 ** 3);
 */
console.log(5 ** 3);

/**
 * 18. What is the modulus operator and what does it return?
 * modules operator is percentage symbol %, it divides two numbers and return only the remainder of that division
 */

/**
 * 19.  Calculate and write the code for: "What is the remainder when 17 is divided by 5?"
 */
let dividend = 17;
let divisor = 5;
let remainder = dividend % divisor;
console.log(
  "The remainder when " +
    dividend +
    " is divided by " +
    divisor +
    " is" +
    remainder
);

/**
 * 20.  What is the Google Chrome V8 engine used for?
 * used to excute JavaScript code both in chrome web browser and in server-side applications like Node.js
 */

// Data Types and String Manipulation (20 Questions)
// Type Casting

/**
 * 21. How do you convert the string "1500" into a number type?
 *
 */
let num = "1500";
console.log(Number(num), typeof Number(num));

/**
 * 22. What is the difference between parseInt() and parseFloat()?
 * both are type casting methods
 * parseInt() parses a string into an integer(whole number)it discards any decimal part
 * parseFloat() parses a string in to a floating number or decimal number
 */

/**
 * 23. Write code to convert the number 2500 into a string.
 */
let number = 2500;
console.log(String(number), typeof String(number));

/**
 * 24. What are the six falsy values in JavaScript?
 * the six falsy values in JS are
 * 0 and 0.0
 * "" empty string
 * null an intentional absence of value
 * undefined  an uninitialized variable
 * NaN not a Number
 * false the boolean value itself
 */

/**
 * 25. How would you check if a value is truthy or falsy?
 */
console.log(Boolean(0)); //false
console.log(Boolean(1)); // true
console.log(Boolean("")); //false
console.log(Boolean("Hana")); //true
console.log(Boolean("0")); //true
console.log(Boolean(" ")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

// String Operations

/**
 * 26. What is string concatenation?
 * String concatenation is the the process of combining two or more strings together to create a  new string
 */

/**
 * 27. Write code to concatenate "Karibu" and "Groceries" using the + operator
 */
let string1 = "Karibu";
let string2 = "Groceries";
let concatenatedString = string1 + string2;
console.log(concatenatedString);

/**
 * 28. What are template literals and why are they preferred over string concatenation?
 * Template literals are a modern way to create strings using backticks(``)
 * It is preferred to create string because it support variable interpolation and multi-line strings
 */

/**
 * 29.  Rewrite this using template literals: 'My name is ' + firstName + ' and I am ' + age + ' years old.'
 */

let firstName = "Veronica";
let age = 29;

console.log(`My name is ${firstName} and I am ${age} years old.`);
/**30. What is string interpolation?
 * is a method of embedding expressions/variables directly within a string literal instead of using single or double quotes.
 */

// 31. How do you find the length of a string?
// we find the lognth of a string using .lenght method(property)
let sentence = "I love my country";
console.log(sentence.length);

// 32. Write code to access the first character of the string "JavaScript".
console.log(sentence[0]);

// 33. Write code to access the last character of any string stored in a variable called myString.
let myString = "Hana Debay";
console.log(myString[myString.length - 1]);
//34. What does the .toUpperCase() method do?
//The toUpperCase() method or property changes all strings we are applying to upper-case or capitalize all the letters

//35. Write code to convert "beans" to uppercase.
let produceType = "beans";
console.log(produceType.toUpperCase());

// String Methods

//36. What does the .trim() method do, and why is it essential for user input?
// the trim() method removes whitespace from both ends and return a new string. It is essential for cleaing input.

// 37. How do you check if a string contains a specific substring?
//we check if a string contains using includes() method and it will return true if a substring exists and otherwise false.

// 38. Write code to check if the string "Karibu Groceries Ltd" includes the word "Groceries".

let karibuSentence = "Karibu Groceries Ltd";
console.log(karibuSentence.includes("Groceries")); //true

// 39. What does the .split() method do?
// the split() method breaks a string in to an array using a separator.
console.log(karibuSentence.split(" ")); //[ 'Karibu', 'Groceries', 'Ltd' ]
console.log(karibuSentence.split("")); //[ 'K', 'a', 'r', 'i', 'b','u', ' ', 'G', 'r', 'o','c', 'e', 'r', 'i', 'e', 's', ' ', 'L', 't', 'd']
console.log(karibuSentence.split(",")); //[ 'Karibu Groceries Ltd' ]

// 40. Write code to split "Beans,Maize,Cowpeas" into an array using the comma as a separator.
let karibuProduces = "Beans,Maize,Cowpeas";
console.log(karibuSentence.split(" ")); //[ 'Karibu', 'Groceries', 'Ltd' ]

// Day 3: Booleans, Operators, and Date Object (20 Questions)
// Boolean Logic
// 41. What are the only two values a Boolean data type can hold?
/**
 * 1. true
 * 2. false
 */

// 42. What is the difference between == and ===?
/**
 * == or loose equality comapre values of two different variables
 * === or strict equality compares bothe value and data type of two different variables
 * in strict equality for the comarision to return true both value and data type must be identical.
 *  */

// 44. Write code to check if 5 is strictly equal to "5". What will be the result?

console.log(5 === "5"); //result/output: false

// 45. Write code to check if 1000 is greater than or equal to 1000.

console.log(1000 >= 1000); //output: true

// Comparison Operators

// 46. What comparison operator would you use to check if procurement tonnage is not less than 1000kg?
// >= (greater than or equal)

// 47. Write a comparison expression that checks if a dealer's name length is less than 2 characters.
let dealerName = "Daniel";
console.log(dealerName.length < 2); //inthis case we get false

// 48. What does the !== operator check for?
// Strict inequality checks both value and type are NOT equal.

// 49. Write code to verify that "Beans" is not equal to "Maize" using strict inequality.
let produce1 = "Beans";
let produce2 = "Maize";
console.log("Beans" !== "Maize");
console.log("=================");
console.log(produce1 !== produce2);

if (produce1 !== produce2) {
  console.log("They are strictly equal");
} else {
  console.log("They are not strictly equal ");
}

// 50. What Boolean value does 10 < 5 return?
//false

// Logical Operators
// 51. What does the AND (&&) operator do?
// && returns true only if both conditions are true.

// 52. Write a logical expression that checks if both stock > 0 AND price > 0 are true.
let stock = 100;
let price = 50;
console.log(stock > 0 && price > 0); //true

// 53. What does the OR (||) operator return?
// || returns true  if at least one condition is true.

// 54. Write a logical expression using OR to check if a produce source is either "Individual Dealer" OR "KGL Farm".
let produceSource = "Individual Dealer" || "KGL Far";
produceSource = "Individual Dealer";
if (produceSource === "IndividualDealer" || produceSource === "KGLFar") {
  console.log("Yes");
} else "NO";

// 55. What does the NOT (!) operator do?
// NOT operator inverts a value. example true to false or equal to not equal

//56. Write code using the NOT operator to check if a string is NOT empty.
let string = "string";
console.log(!(string === "")); //true

// Date Object
