//object
//are an keyed collections 
//store data in key-value pairs
//created using curly braces {}

let product = {
    "name": "Milk",
    "weight": 50,
    "price": 2500,
    "purchasedBy": "Kitsa",
    "purchasedDate": new Date("2025-12-10"),
    "isAvailable": true
}

//access using .notation 
console.log(product.name)
console.log(product)

//access using bracket
console.log(product["price"])

product.price = 3000
console.log(product.price)

product["currency"] ="UGX"

console.log(product)


for(const key in product){
    // console.log(key)
    // console.log(product[key])
    
}

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))
