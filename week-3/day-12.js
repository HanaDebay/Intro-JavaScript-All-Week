// Why Console Methods?

let input  = 500000

if(input === undefined){
    console.warn("user didn't provide any input ")
}

//console.warn()
if(input === 0){
    console.warn("The user has provided an input of zero")
}

//console.info()
if(input > 10000){
    console.info("the user has provided a very large number ")
}

//console.assert()
//only if the assertion is false 
let tonnage = 900;
console.assert(tonnage > 1000, "The tonnage is lower than the required 1000kg")
console.assert()
let calulate = 500 / input
console.log(calulate);

//console.table
let sales = [
    {id: 23, amountDue: 57000, purchaseDate: new Date("2026-01-8"), isCreaditSale: false},
    {id: 24, amountDue: 46700, purchaseDate: new Date("2026-01-11"), isCreaditSale: true},
    {id: 25, amountDue: 89000, purchaseDate: new Date("2026-01-23"), isCreaditSale: true},
    {id: 26, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 27, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 28, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 29, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 30, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 31, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false},
    {id: 32, amountDue: 59000, purchaseDate: new Date("2026-01-4"), isCreaditSale: false}
]

console.log(sales);
console.table(sales[0])

let ages = [23,56,78,34,21,90]
console.table(ages)

//console.dir(object)
//display interactive list of properties 
console.dir(sales)


//console.count(lable)
// console the number of logs times 


//.time() and .timeEnd()
//start and stopes a timer 
//the lable must match exactly 

console.time("reduceMethod")
let reudcedSumOfRevenue = sales.reduce((curr , obj) => curr + obj.amountDue, 0);
console.timeEnd("reduceMethod")

console.time("loopMethod")
let totalRevenue = 0
for(let i = 0; i < sales.length; i++){
    totalRevenue = sales[i].amountDue
}
console.timeEnd("loopMethod")