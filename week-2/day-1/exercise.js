//first task
const dailyTonnage = [1200, 850, 1000, 900];

// //second task loop through our list of dailyTonnage
// let toatl = 0;
// for(let i = 0; i< dailyTonnage.length; i++){
//     toatl += dailyTonnage[i]
// }

// //third task is to calculate average
// const average = toatl / dailyTonnage.length
// console.log("Average daily tonnage: " , average)

let counter = 0
let toatl = 0;
while( counter< dailyTonnage.length){
    toatl += dailyTonnage[counter]
     
    average = toatl/dailyTonnage.length 
    counter++
   
}
console.log("Averge", average)

