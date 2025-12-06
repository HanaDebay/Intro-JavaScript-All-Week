/**
 * day1-variable
 * day2-Strings
 * day3-Logic and Date
 * day4-Conditionals
 * day5-Array and Index Collection
 * arrays are zero based-indexed
 */
let users = [
    "Yahaya", 
    "Daniel", 
    "Hana", 
    "Ibrahim"
]
console.log(users[0])

//the property of lenght to get how many elements are in our array
console.log(users.length)
for(let i=0; i<=users.length; i++){
    console.log(users[i])
}

//modifying elements 
let usersList = ["Ismail", "Uwase", "Simba"]

usersList[0] = `${usersList[0]} "Hana Debay"`

for(let i=0; i<=usersList.length; i++){
    console.log(usersList[i])
}


//Adding Elements at the end push()

usersList.push("Patient")
console.log(usersList);

//Adding Elements at the beginnig unshift()

usersList.unshift("Samuel");
console.log(usersList)

//removing elements pop() removes at the end 

usersList.pop()
console.log(usersList)

//remove the first element from array shift()
// usersList.shift()
// console.log(usersList);

//slice()

usersList.splice(2,1)
console.log(usersList)
let deleted = usersList.splice(2,1)
console.log(deleted)

let newDatabase = [usersList + deleted] 
console.log(newDatabase)


let indexOfHana = users.indexOf("")



let doesJohonExist = users.includes("John");
console.log(doesJohonExist)


let ages = [23,56,34,32,12]

let indexOf12YrOlds = ages.indexOf(12)
console.log(`${indexOf12YrOlds} is the index of the ${ages.indexOf()}  yr old`)

// console.log(ages.find(ages >= 40 && ages === 12))

//organize array data

console.log(ages);

ages.reverse()
console.log(ages)

//sorting arrays

ages.sort()
console.log(ages)

console.log(usersList)
let sortedUserList = usersList.toSorted()
console.log(sortedUserList)