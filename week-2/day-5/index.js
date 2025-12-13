//sets Unique collections 
//it can't contain duplicate iems if we try to add it will ignor the duplicate item

let users = ["Zahra", "Florence", "Uwase", "Daniel", "Zahra"]
const uniqueUsers = new Set(users);

uniqueUsers.add("Mark")
console.log(uniqueUsers);

uniqueUsers.delete("Uwase")
console.log(uniqueUsers.size)
console.log(uniqueUsers);

let sales = [
    {customerName: "Patrick", amountPaid: 5000, branch: "Kampala"},
    {customerName: "Patrick", amountPaid: 600, branch: "Gulu"},
    {customerName: "Patrick", amountPaid: 54000, branch: "Masaka"},
    {customerName: "Patrick", amountPaid: 34000, branch: "Kampala"},
    {customerName: "Patrick", amountPaid: 45000, branch: "Kampala"},
    {customerName: "Patrick", amountPaid: 69000, branch: "Kampala"},
]

let branches = sales.map((sale) => sale.branch)
let uniqueBranches = new Set(branches)
console.log(uniqueBranches)

let locationToCheck = "Kampala"
let didKampalaMakeSales = uniqueBranches.has()

//Maps

let priceList = [
    ["Beans",4500],
    ["Peas", 5000],
    ["Matooke", 10_000],
    [23, "Abdalla"]
]
const price = new Map(priceList)
console.log(price)

price.set("Rice", 5000)
console.log(price)



console.log(price.entries())
console.log(price.values())
console.log(price.keys())

console.log(price.get())

console.log(price.has("Rice"))

price.forEach((value, key) =>{
    if(value === 5000){
    console.log(`${value} => ${key}`)
    }
})
