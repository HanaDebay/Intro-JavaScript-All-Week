// Why Functions
//when we need to access or use it in different places in our code 
//functions allws us to organize variable logic and loops 
//function is a block of reusable code designed to perform particular task

//key word functiion followed by function-name(parameters){
// }


function returnSumOfTwoNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}

// returnSumOfTwoNumber(10,20)
console.log(returnSumOfTwoNumber(20,10))


function welcomingMessage(){
    console.log("Welcom to Karibu Groceries")
}
welcomingMessage();

//Default parmeters

function calulateTax(amount, taxRate=0.18){
    let tax = amount * taxRate;
    return tax;
}
console.log(calulateTax(4000))

console.log(calulateTax(3000, 0.20)) //overriding the default parameter 

let firstName = "Hana Debay"

console.log(firstName.split("", 0))


//Functions Expressions
// defined inside an expression varialble argument 
let numbers = [20,30,45,78]
let sum = 0;
// let sumArray = function(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum
// }
// console.log(sumArray())

function sumOfArrayElements(numbers){
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]; 
    }
    return sum;
}


console.log(sumOfArrayElements(numbers));

//Arrow Functions 


//Scope

let age = 25 //global variable 

function showAge(){
    let age = 30; // local variable scope 
    console.log(age) 
}
showAge()