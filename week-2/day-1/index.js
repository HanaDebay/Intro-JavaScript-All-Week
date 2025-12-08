// LOOPS
// WHY DO WE NEED LOOPS
//REPEATING A TAKS
/**
 * FOR-LOOP
 * initalization
 * condition
 * increment
 */

for (let step = 1; step <= 10; step++) {
  // this where we run our loop and carry out any excution
  console.log("Step: ", step);
}
let sum = 0;
let start = 1;
let end = 10;
// for(let i = 1; i <= 10; i++){
//     sum  += i;
// }
// console.log(sum)

for (let i = start; i <= end; i++) {
  sum += i;
}
console.log(`The sum of number starts from ${start} - ${end} is ${sum}`);

let firstName = "Hana";
for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i]);
}

//Golobal Scope
//that u have a variable or function that accesseble form any where

function showAge(age) {
  return console.log("His age is: ", age);
}
showAge(25);

//While loop
//indetrminate iteration

let isLoggedIn = false;

while (isLoggedIn === false) {
  console.log("Please Login");

  isLoggedIn = true;
}

sum = 0;
let step = 1;

while (step <= 10) {
  sum += step;
  step++;
}
console.log(sum);

//infinty loop

//  while(true){
//     console.log("thsi is an infinity loop")

//  }

//
let counter = 0;

do {
  console.log(counter);
  counter++;
} while (counter < 5);

let emails = [
  "abdalla@student.refactory.academy",
  "hana@student.refactory.academy",
  "victor@student.refactory.academy",
  "kitisa@student.refactory.academy",
  "yahaya@student.refactory.academy",
];
for (const email of emails) {
  console.log(`Email has been successfully sent to ${email}`);
}

let people = [
  "doctor",
  "lawyer",
  "general",
  "teacher",
  "engineer",
  "programer",
  "general",
];

for (const person of people) {
    if(person ===  "general"){
        continue
    }
  console.log(person);
}
