// if some one has refactory email and if he/she is from javascript   let them join the academy class room
// if not let them to know create an account

let hasRefactoryEmail = true;
let isFromJS = false;

let message;
if (hasRefactoryEmail && isFromJS) {
  message = "Joined succesfully";
} else {
  message = "Please Communicate with Progarm officers";
}

console.log(message);

/**
 * 3. Discount Application:
 * Scenario: An online store offers discounts based on the total purchase amount.
 * Condition: Check if the cart total exceeds a certain threshold (e.g., $100).
 * Action (if true): Apply a percentage discount to the total.
 * Action (if false): Proceed with the regular price.
 */
let totalPurchase = 200;
let discountPercentage = 5;
let discountedTotlaPurchase = totalPurchase * (1 - discountPercentage / 100)
if (totalPurchase > 100) {
  console.log("Congratualtions you have got 5% discount "+ discountedTotlaPurchase);
} else {
  console.log("Total Purchase: " + totalPurchase);
}


// Date
let now = new Date();
console.log(now)
let seconds = now.getMilliseconds();
let minutes = now.getMinutes();
console.log(seconds)
console.log(minutes)

let currentDate = new Date();
let startYear = new Date("2025-1-1");
let endYear = new Date("2025-12-31");

let passedDays = currentDate.getTime() - startYear.getTime();
console.log(passedDays);
let daysPassed = passedDays / (1000 * 60 * 60 * 24);
console.log(daysPassed)


//design different navigation vertical or horizontal in the left
// in the right any content 
