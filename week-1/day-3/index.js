// booleans matter 
/**booleans are the foundation of flow control and decision making
 * there is question 
 * answer for the question true/false yes/no
 * then decision 
 */

// comparison 
/**
 * two comapriosn methods in javascript 
 * loose equal == this checks the value 
 * strictl equal === this check the value and type
 */

let answer1 = "43";
let answer2 = 43;

let firstName1 = "Hana";
let firstName2 = "hana";

let comparision1 = answer1 == answer2
let comaprision2 = answer1 === answer2

console.log(comparision1)
console.log(comaprision2)

let comFirstNames1 = firstName1 == firstName2;
let comFirstNames2 = firstName1 === firstName2;

console.log(comFirstNames1, comFirstNames2)

//in equality comparision !=
let age = 18
let age2 = "18"
console.log(age != age2)//false 
console.log(age !== age2) //true 


//logical operators 

let costOfRice = 3000;
let customersMoney = 2000;
// let canPayForRice = customersMoney >= costOfRice;

function canPayForRice(costOfRice, customersMoney){
    return canPayForRice = customersMoney >= costOfRice
}

console.log("Affordablity is:",canPayForRice(3000, 2000))
console.log("=================")

function hasClearedDues(schoolFeesPaid, schoolFeesDue){
    return hasClearedDues = schoolFeesPaid >= schoolFeesDue;
}
console.log(hasClearedDues(300,400))
console.log("**********************")

if(canPayForRice){
    console.log("Yes they can afford to buy rice");
}else{
    console.log("No please ")
}

// && operators the two operhands should be meet the condition(true)
let costOfBeans = 3000;
let customerMoney = 2000;
let isUgandanShilling = true;
// let canPayForRice = customersMoney >= costOfRice;

let isReturningCustomer = true;
let canPayForBeans = customerMoney >= costOfBeans && isReturningCustomer || isUgandanShilling;
 console.log("Can the customer pay for the beans ? true/false", canPayForBeans)

 //NOT Operator !
 //authentication 

 let isLoggedIn = true;
 console.log(!isLoggedIn)

 if(!isLoggedIn){
    console.log("Please log in now, you are going to be redirected")
 }else{
    console.log("you are logged in!")
 }

 /*Date Object 
 * use to store date and time computer stores time as miliseconds 
 */

 console.log("__________________________________________")

 let date = new Date(); //we use date object and assign it to our variable 
 console.log(date);

 //Universal Time format MM/DD/Year
 let time = new Date().toLocaleDateString();
 console.log(time);

 //Local Time format DD/MM/Year
 time = new Date().toLocaleDateString("en-GB");
 console.log(time);

 console.log(date.getDate());
  console.log(date.getMonth());
  //timestamp
  console.log(date.getTime())


  let purchaseDate = new Date("03-12-2025");
  let currentDate = new Date();
  let passedTime = currentDate.getTime() - purchaseDate.getTime();
  console.log(passedTime)

  let secondsPassed = passedTime/1000;
  console.log( `${secondsPassed} seconds have passed since the purchase`)

  let minutePassed = secondsPassed/60;
  console.log(`${minutePassed} minutes have passed since the purchase`)

  let hoursPassed = minutePassed/60;

let daysPassed = hoursPassed/24;
console.log(`${daysPassed} days have passed since the purchase`)

