// // Variables and Data Types

// /**
//  * 1. What are the two recommended keywords for declaring variables in JavaScript, and when should each be used?
//  * *** *** The two recommended keywords we use to declar in JS are
//  * ## const: const used for declaring varialbles whose value is intended to remain constant and will not be reassigned throughout the program execution
//  * ## let: we use let keyword for declaring variables whose value might need to be reassigned later in the program.
//  */

// /**
//  * 2. Why is the var keyword discouraged in modern JavaScript?
//  * var keyword is discuraged in modern JS primarily due to its function scoping and hosting behavior
//  * when we say var is function-scoped it means the variables scope is not limited to block statments
//  *                    _______________
//  *      example
//  *          if(true){
//  *                  var count = 10;
//  *           }
//  *      we can access count from here outside of the if block
//  *          console.log(count)
//  *      this lead to unexpected error or ambiguity
//  * when we say hoisted behavior with var the declaration is moved to the top of it's function(global) scope
//  *            ________________
//  * and it is automatically assigned the value undefined
//  * this allows us to access the variable before the line which can be very confusing
//  *      example
//  *              console.log(userName);
//  *                  var userName = "Hana";
//  *              consol.log(userName);
//  *
//  */

// /**
//  * 3. Write a valid variable name following the camelCase convention for storing a customer's phone number.
//  *
//  */
// let customerPhoneNumber;

// /**
//  * 4. What will happen if you try to name a variable starting with a number, like 9lives?
//  *  If i try to name a variable starting with number i will result a syntax error
//  */

// /**
//  * 5. List all five primitive data types in JavaScript.
//  * 1. String: we use it to represent textual date
//  *         let firstName = "Daniel";
//  * 2. number: represent both integer and floating point numbers
//  *          let age = 28;
//  *          let height = 1.89; //in meters
//  * 3. boolean: represent the logical entity with only two possible values true/false
//  *          let isHeMarried = fales;
//  * 4. null: intentional absence of object value or unknown value
//  *          let emptyValue = null;
//  * 5. undefined: represent a variable that has been declared but not yet assineed a value by the programmer
//  *          let middleName;
//  */

// /**
//  * 6. What value does a declared but unassigned variable hold?
//  *  undefined
//  */

// /**
//  * 7. What is the difference between undefined and null?
//  * the code difference b/n undefined and null how and why the empty state is aplied
//  * undefined : variable hasbeen declared but not yet been assigned a vlaue by the progarammer.
//  * it is the defalut inital state for any variable that has not been initialized.
//  * null: is an assignment value, it is an explicit instruction by the programmer
//  * type using typeof method  undefined : undefined  null : object
//  *
//  */

// /**
//  * 8. Write code to declare a constant variable called earthGravity and assign it the value 9.81.
//  */

// const earthGravity = 9.81;

// /**
//  * 9. How do you check the data type of a variable in JavaScript?
//  * we check data type for variables using typeof method
//  */

// let name = "HanA";
// console.log(typeof name); //String
// let salary = 2000;
// console.log(typeof salary); //number
// let isStudent = true;
// console.log(typeof isStudent); //boolean
// let middleName = null;
// console.log(typeof middleName); //object
// let lastName;
// console.log(typeof lastName); //undefined

// /**
//  * 10. What is the quirk when checking the type of null using the typeof operator?
//  *      the type for null value is object
//  *      let middleName = null
//  *      console.log(typeof(middleName));//object
//  *
//  */

// // Console and Syntax

// /**
//  * 11. What is the purpose of the console.log() function?
//  * the primary purpose is to output messages , vlaues of variables or expressions to the developer console.
//  * we also use it for debugging to inspect the state of variables at different points in our code
//  * we also use to track code excution by strategically placing console.log statments
//  */

// /**
//  * 12. Write a console.log() statement that prints three separate arguments: your name, age, and country.
//  */

// let fullName = "Hana Debay";
// let dateOfBirth = "12-6-2025";
// let country = "Uganda";
// console.log(fullName);
// console.log(dateOfBirth);
// console.log(country);

// /**
//  * 13. How do you write a single-line comment in JavaScript?
//  *
//  */
// // we write singl-line comment using  two slashes

// /**
//  * 14. Write a multiline comment explaining what variables are.
//  * this is how we write multiline comments
//  * we use two ** between // two slashes
//  */
// /*
// variables are named containers used to store data values.
// They act as placeholders for information that can be referenced and manipulated throughout a program.
// */
// /**
//  * 15. What happens when JavaScript encounters a syntax error?
//  * It fails to excute, the engine stops all excution as soon as it detects code that violates the language's grammar rules and
//  * display error message, and wait until the error corrected
//  */

// /**
//  * 16. What are the three types of quotes that can enclose a string in JavaScript?
//  * 1. Single Quotes: 'Hana Debay'
//  * 2. Double Quotes: "Hana Debay"
//  * 3. Backticks(template litrals): `Hana Debay`
//  */

// /**
//  * 17. Write a console.log() statement to display the result of 5 raised to the power of 3.
//  * console.log(5 ** 3);
//  */
// console.log(5 ** 3);

// /**
//  * 18. What is the modulus operator and what does it return?
//  * modules operator is percentage symbol %, it divides two numbers and return only the remainder of that division
//  */

// /**
//  * 19.  Calculate and write the code for: "What is the remainder when 17 is divided by 5?"
//  */
// let dividend = 17;
// let divisor = 5;
// let remainder = dividend % divisor;
// console.log(
//   "The remainder when " +
//     dividend +
//     " is divided by " +
//     divisor +
//     " is" +
//     remainder
// );

// /**
//  * 20.  What is the Google Chrome V8 engine used for?
//  * used to excute JavaScript code both in chrome web browser and in server-side applications like Node.js
//  */

// // Data Types and String Manipulation (20 Questions)
// // Type Casting

// /**
//  * 21. How do you convert the string "1500" into a number type?
//  *
//  */
// let num = "1500";
// console.log(Number(num), typeof Number(num));

// /**
//  * 22. What is the difference between parseInt() and parseFloat()?
//  * both are type casting methods
//  * parseInt() parses a string into an integer(whole number)it discards any decimal part
//  * parseFloat() parses a string in to a floating number or decimal number
//  */

// /**
//  * 23. Write code to convert the number 2500 into a string.
//  */
// let number = 2500;
// console.log(String(number), typeof String(number));

// /**
//  * 24. What are the six falsy values in JavaScript?
//  * the six falsy values in JS are
//  * 0 and 0.0
//  * "" empty string
//  * null an intentional absence of value
//  * undefined  an uninitialized variable
//  * NaN not a Number
//  * false the boolean value itself
//  */

// /**
//  * 25. How would you check if a value is truthy or falsy?
//  */
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); // true
// console.log(Boolean("")); //false
// console.log(Boolean("Hana")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(" ")); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); //false

// // String Operations

// /**
//  * 26. What is string concatenation?
//  * String concatenation is the the process of combining two or more strings together to create a  new string
//  */

// /**
//  * 27. Write code to concatenate "Karibu" and "Groceries" using the + operator
//  */
// let string1 = "Karibu";
// // let string2 = "Groceries";
// // let concatenatedString = string1 + string2;
// // console.log(concatenatedString);

// // /**
// //  * 28. What are template literals and why are they preferred over string concatenation?
// //  * Template literals are a modern way to create strings using backticks(``)
// //  * It is preferred to create string because it support variable interpolation and multi-line strings
// //  */

// // /**
// //  * 29.  Rewrite this using template literals: 'My name is ' + firstName + ' and I am ' + age + ' years old.'
// //  */

// // let firstName = "Veronica";
// // let age = 29;

// // console.log(`My name is ${firstName} and I am ${age} years old.`);
// // /**30. What is string interpolation?
// //  * is a method of embedding expressions/variables directly within a string literal instead of using single or double quotes.
// //  */

// // // 31. How do you find the length of a string?
// // // we find the length of a string using .lenght method(property)
// // let sentence = "I love my country";
// // console.log(sentence.length);

// // // 32. Write code to access the first character of the string "JavaScript".
// // console.log(sentence[0]);

// // // 33. Write code to access the last character of any string stored in a variable called myString.
// // let myString = "Hana Debay";
// // console.log(myString[myString.length - 1]);
// // //34. What does the .toUpperCase() method do?
// // //The toUpperCase() method or property changes all strings we are applying to upper-case or capitalize all the letters

// // //35. Write code to convert "beans" to uppercase.
// // let produceType = "beans";
// // console.log(produceType.toUpperCase());

// // // String Methods

// // //36. What does the .trim() method do, and why is it essential for user input?
// // // the trim() method removes whitespace from both ends and return a new string. It is essential for cleaing input.

// // // 37. How do you check if a string contains a specific substring?
// // //we check if a string contains using includes() method and it will return true if a substring exists and otherwise false.

// // // 38. Write code to check if the string "Karibu Groceries Ltd" includes the word "Groceries".

// // let karibuSentence = "Karibu Groceries Ltd";
// // console.log(karibuSentence.includes("Groceries")); //true

// // // 39. What does the .split() method do?
// // // the split() method breaks a string in to an array using a separator.
// // console.log(karibuSentence.split(" ")); //[ 'Karibu', 'Groceries', 'Ltd' ]
// // console.log(karibuSentence.split("")); //[ 'K', 'a', 'r', 'i', 'b','u', ' ', 'G', 'r', 'o','c', 'e', 'r', 'i', 'e', 's', ' ', 'L', 't', 'd']
// // console.log(karibuSentence.split(",")); //[ 'Karibu Groceries Ltd' ]

// // // 40. Write code to split "Beans,Maize,Cowpeas" into an array using the comma as a separator.
// // let karibuProduces = "Beans,Maize,Cowpeas";
// // console.log(karibuSentence.split(" ")); //[ 'Karibu', 'Groceries', 'Ltd' ]

// // // Day 3: Booleans, Operators, and Date Object (20 Questions)
// // // Boolean Logic
// // // 41. What are the only two values a Boolean data type can hold?
// // /**
// //  * 1. true
// //  * 2. false
// //  */

// // // 42. What is the difference between == and ===?
// // /**
// //  * == or loose equality comapre values of two different variables
// //  * === or strict equality compares bothe value and data type of two different variables
// //  * in strict equality for the comarision to return true both value and data type must be identical.
// //  *  */

// // // 44. Write code to check if 5 is strictly equal to "5". What will be the result?

// // console.log(5 === "5"); //result/output: false

// // // 45. Write code to check if 1000 is greater than or equal to 1000.

// // console.log(1000 >= 1000); //output: true

// // // Comparison Operators

// // // 46. What comparison operator would you use to check if procurement tonnage is not less than 1000kg?
// // // >= (greater than or equal)

// // // 47. Write a comparison expression that checks if a dealer's name length is less than 2 characters.
// // let dealerName = "Daniel";
// // console.log(dealerName.length < 2); //inthis case we get false

// // // 48. What does the !== operator check for?
// // // Strict inequality checks both value and type are NOT equal.

// // // 49. Write code to verify that "Beans" is not equal to "Maize" using strict inequality.
// // let produce1 = "Beans";
// // let produce2 = "Maize";
// // console.log("Beans" !== "Maize");
// // console.log("=================");
// // console.log(produce1 !== produce2);

// // if (produce1 !== produce2) {
// //   console.log("They are strictly equal");
// // } else {
// //   console.log("They are not strictly equal ");
// // }

// // // 50. What Boolean value does 10 < 5 return?
// // //false

// // // Logical Operators
// // // 51. What does the AND (&&) operator do?
// // // && returns true only if both conditions are true.

// // // 52. Write a logical expression that checks if both stock > 0 AND price > 0 are true.
// // let stock = 100;
// // let price = 50;
// // console.log(stock > 0 || price < 0); //true

// // 53. What does the OR (||) operator return?
// // || returns true  if at least one condition is true.

// // 54. Write a logical expression using OR to check if a produce source is either "Individual Dealer" OR "KGL Farm".
// let produceSource = "Individual Dealer" || "KGL Farm";
// // produceSource = "Individual Dealer";
// console.log(
//   produceSource === "Individual Dealer" || produceSource === "KGL Farm"
// );

// // if (produceSource === "Individual Dealer" && produceSource === "KGL Far") {
// //   console.log("Yes");
// // } else "NO";

// // 55. What does the NOT (!) operator do?
// // NOT operator inverts a value. example true to false or equal to not equal
// let isMarried = true;
// console.log("+++++++++++");
// console.log(!isMarried);

// let x = 5;
// let y = 8;
// console.log(!y > x); //false
// //56. Write code using the NOT operator to check if a string is NOT empty.
// let string = "string";
// console.log(!(string === "")); //true

// // Date Object
// // 57. How do you create a new Date object representing the current date and time?
// let currentDate = new Date();
// console.log("Current Date:",currentDate)

// // 58. What method retrieves the current year from a Date object?
// let currentYear = new Date();
// console.log(currentYear.getFullYear())


// // 59. What does .getMonth() return for January?
// let janDate = new Date("2025-03-02")
// console.log("Date: ",janDate.getDay())
// // let monthIndex = janDate.getMonth()
// console.log("Month Index:", janDate.getMonth())
// // console.log(janDate.getMonth())


//   let monthNames =  [ "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
//   let date = new Date("2025-06-01");
//   let getMonthNumber = date.getMonth()
//   monthNames = monthNames[getMonthNumber];
// console.log("Month Name: ",monthNames)

// // console.log("Month:",getMonthName())


// // 60. Write code to get the current day of the month from a Date object called today.
// let today = new Date();
// console.log("Current Date of the Month: ",today.getDate())

// // If Statements
// // 61. What does an if statement do?
// //it checks conditions  if the condition is true then it will excute a block of code if the condition si false
// // it excutes the other block of code (else)

// // 62. Write an if statement that logs "Access Granted" if userRole equals "Manager".
// let userRole = "Manager";

// if(userRole === "Managerr"){
//   console.log("Access Granted")
// }else{
//   console.log("Access Denied")
// }


// // 63. What is the purpose of the else block in an if...else statement?
// //it provides an alternative block of code if condition is false 

// // 64. Write an if...else statement that checks if availableStock >= 500. 
// // If true, log "Sale Approved";// otherwise, log "Out of Stock".

// let availableStock = 300;
// if(availableStock >= 500){
//   console.log("Sale Approved")
// }else{
//   console.log("Out of Stock")
// }


// // 65. When would you use an if...else if...else chain?

// //we use if..else if.. else when we need to check multiple conditons in sequence 

// // Complex Conditionals
// // 66. Write an if...else if...else statement that categorizes a 
// // user: "Director" logs "View Only", "Manager" logs "Full Access", all others log "No Access".
// let userRoles = "Accountant" 
// if(userRoles === "Director"){
// console.log("View Only")
// }else if(userRoles === "Manager"){
//   console.log("Access Granted");
// }else{
//   console.log("No Access")
// }



// // 67. How do you combine multiple conditions in a single if statement?
// //we combine multible conditions using logical operators &&, ! and ||
// // 68. Write an if statement using && that checks if both dealerName.length >= 2 AND tonnage >= 1000
// // are true.
// let dealerName = "Hana"
// let tonnage = 10;
// if(dealerName.length >=2 && tonnage >=1000){
//   console.log("Conditions met sale approved!")
// }else{
//   console.log("Sale Denied")
// }

// // 69. Write code that uses the OR operator to check if produceType is either "Beans" OR "Maize".
// let produceType = "Maizee";
// if(produceType === "Beans" || produceType === "Maize"){
// console.log("produce type available")
// }else{
//   console.log("produce type not available")
// }

// 70. What happens if you forget to use && or || when checking multiple conditions?
//javascript will not combine conditions correctly, leading to syntax error or unexpected result 


// Switch Statements
// 71. When is a switch statement preferred over multiple if...else if statements?
/**
 * easier to read than long chain of if..else 
 * we use one variable to check againes several fixed variables 
 * if conditions involve logical oprators switch can't operate
*/

// 72. What is the purpose of the break keyword in a switch statement?
/**
 * It used to stop excution from falling through the next case or condition
 */

// 73. What happens if you omit break in a switch case?
/**
 * The program keeps excuting the next cases even if they don't match 
 */

// 74. Write a switch statement that checks a produce variable and logs different messages for "Beans", "Maize", and a default case.
let produce = "Milk";
switch(produce){
case "Beans":
console.log("Beans Selected")
break;
case "Maize":
  console.log("Maize Selected")
  break;
  default:
    console.log("No Produce Selected")
}

// 75. What is the default case used for in a switch statement?
/**
 * it ensures the program has a defined behavior even-if the input doesn't match any of the listed cases
 * it handles any value not matched by the cases
 */

// Ternary Operator
// 76. What is the ternary operator and when is it used?
/**
 * It is a shorthand of if..else (condition? valueTrue : valueFalse)
 * we use ternary operator 
 * primarily when you need to assign a value to a variable or return a value from a function based on a condition. 
 */

// 77. What is the syntax of the ternary operator?
// (condition? valueTrue : valueFalse)

// 78. Write a ternary expression that assigns "Adult" to category if age >= 18, otherwise "Minor".
let age = 10;
let category = age >=18 ? "Adult" : "Minor" ;

console.log(category)
// 79. Rewrite this if...else as a ternary: if (isManager) { access = "Full"; } else { access = "Limited"; }
let userRole = "Developer"
let isManager = userRole === "Manager"? "Full Access" : "Limitted Access"
console.log(isManager)

// 80. Can you nest ternary operators? Should you?
//yes it is possible to nest but it will not be readable 
// let category1 = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult"
// yes we can nest them but it will make the code harder to read 


// Array Basics
// 81. What is an array in JavaScript?
/**
 * A special data structure used to store multiple values in a single variable.
 * It is a set of elements that arranged in one group 
 * an array is a collection on elements  store in a single variable 
 * arrays are zero based-indexed 
 */

// 82. How do you create an empty array?
let array = [];

// 83. Write code to create an array containing the five KGL produce types: Beans, Grain Maize, Cow peas, G-nuts, and
// Soybeans.
let kglProduceTypes = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soyabeans","Milk"];

// 84. What does "zero-indexed" mean in the context of arrays?
//zero-indexed means the first element of an array.

// 85. Write code to access the first element of an array called produceTypes.
console.log(kglProduceTypes[0]);
// 86. How do you access the last element of an array without knowing its length beforehand?

console.log(kglProduceTypes[kglProduceTypes.length - 2])
console.log(kglProduceTypes.length)
console.log(kglProduceTypes[1])

// 87. What property tells you how many elements are in an array?
//.length
// 88. Write code to find the length of an array called salesRecords.
let salesRecords = ["Beans", "Cow Peas", "Maize"]
console.log(salesRecords.length)

// Modifying Arrays
// 89. How do you change the value of an existing element in an array?
console.log("Before Update:", salesRecords)
salesRecords[2] = "Cow Peas"
console.log("After update:",salesRecords)

// 90. What method adds an element to the end of an array?
//.push()

console.log(salesRecords)

// 91. Write code to add "Green Peas" to the end of the kglProduce array.

salesRecords.push("Apples");

// 92. What method removes the last element from an array?
salesRecords.pop()//remove the last element 
// 93. What method adds an element to the beginning of an array?

salesRecords.unshift("Banana")// add at begining 
console.log("Add At the beginning: " ,salesRecords)
// 94. What method removes the first element from an array?
salesRecords.shift()
console.log("After Shift:", salesRecords)
salesRecords.push("Orange")
console.log("Adding it at the end:", salesRecords)
// 95. What does the .splice() method do?
//let us add, remove, replace any where in side the array (at beginning, middle or at the end)
// 
let products = [ 'Beans', 'Cow Peas', 'Apple', 'Soyaseed' ]

//syntax .splice(Starting point, number of elements to remove)
// products.splice(2, 3)//removing
// console.log(products)

//add
console.log("Before:", products)
// console.log(products[2])
products.splice(2, 0,"Banana", "Orange", "Strawberry")//remove and add 
console.log("After:",products)

// 96. What does the .indexOf() method return if the element is not found?

/** After: [
  'Beans',
  'Cow Peas',
  'Banana',
  'Orange',
  'Strawberry',
  'Apple',
  'Soyaseed'
]
  */
console.log(products.indexOf("Apple"))

// 97. Write code to check if "Beans" exists in the produceTypes array using .includes().
console.log(products.includes("Soyaseed"));
// 98. What does the .reverse() method do?
//.reverse() method do reverse the order of element in an array
console.log("Before Revers:", products)
console.log("After Reverse:",products.reverse())

// 99. How do you combine two arrays into one?
//to combine two arrays we use .concat() method 

// 100. Write code to merge branch1Sales and branch2Sales arrays into a totalSales array using the
// appropriate method.
let branch1Sales = ["Maize", "Beans", "Soyabeans"];
let branch2Sales = ["Cow peas", "Rice", "Strawberry"]
let totalSales = branch1Sales.concat(branch2Sales);
console.log(totalSales);