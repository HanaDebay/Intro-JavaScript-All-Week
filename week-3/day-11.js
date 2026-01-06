let record = ["ID-102", "Rice", 5000]
console.log(record)

let location = {
    name: "Kampala Store",
    staff: 5,
    launchDate: new Date("2026-01-05"),

}
let {name, staff,launchDate} = location
console.log(name,staff,launchDate)


let stock = ["maize", "Rice","Millet","Milk"]
let stock2 = ["Mango", "Orange", "Banana"]
console.log(...stock)
let copy = [...stock, ...stock2]
console.log(copy)


let matugaSale = [
    {id:23, total:50000, purchaseDate: new Date("2025-01-05")},
    {id:24, total:89000, purchaseDate: new Date("2025-01-11")},
    {id:25, total:45000, purchaseDate: new Date("2025-01-02")},
    {id:26, total:65000, purchaseDate: new Date("2025-01-04")},
]
let KampalaSale = [
    {id:27, total:45000, purchaseDate: new Date("2025-01-02")},
    {id:28, total:98000, purchaseDate: new Date("2025-01-01")},
    {id:29, total:67000, purchaseDate: new Date("2025-01-02")},
    {id:30, total:85000, purchaseDate: new Date("2025-01-04")},
]

let sales = [ ...matugaSale, ...KampalaSale]
let firstSale = {...sales[0], location: KampalaSale, purchaseDate: new Date("2025-02-05")}
console.log(firstSale);