let numbers = []
for(let i = 1; i <= 10000; i++ ){
    numbers.push(i)
} 
console.time("reduceMethod")
let sumNumber = numbers.reduce((acc , curr ) => curr + acc, 0);
console.timeEnd("reduceMethod")

console.time("loopMethod")
let total = 0
for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
console.timeEnd("loopMethod")