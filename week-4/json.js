// console.log("This is the JSON file");

// let sale = {
//   id: 1,
//   produceName: "maize",
//   price: 5000,
//   supplierDetaile: {
//     name: "Yahaya",
//     phoneNumber: "0707654323",
//     addres: "Matugga Stag",
//   },
// };
// //Serialization using .stringfy
// // console.log(sale)
// // let saleString = JSON.stringify(sale)
// // let ages = [23,56,78,34,23,45]
// // let agesString = JSON.stringify(ages)

// // console.log(saleString)

// // localStorage.setItem("sale",saleString)
// // localStorage.setItem("Ages", agesString)

// //Decerialization
// let storedSale = localStorage.getItem("sale")
// let saleObject = JSON.parse(storedSale) // decerialize using .parse

// console.log(storedSale);
// console.log(saleObject)


//Promis
/**
 * Pending 
 * Fulfulled
 * Rejected
 */

let loadReort  = new Promise((resolve, reject) =>{
    //code to open a file
    //code to save a report 

    //code that night a take while
let sucessfullyLoad = false
if(sucessfullyLoad){
setTimeout(()=>{
        resolve("Report loaded sucessfully")
    }, 2000)
}else{
    setTimeout(()=>{
        reject("Report failed to load sucessfully")
    }, 2000)
}
    


})

loadReort
.then((data) =>{
    console.log(data)
})
.catch((error)=>{
console.log(error)
})


//fetch
// syntax
//const promis = fetch()


// fetch("https://fakestoreapi.com/products")
// .then((res) =>{
//     console.log(res)
//     // console.log(res.json())
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })

async function fetchProduct(url){
    let respones = await fetch(url)
    if(!respones.ok){
        throw new Error("Failed to fetch results")
    }
    let data = await respones.json()
    console.log(data)
    return data
    
}

fetchProduct("https://fakestoreapi.com/products")