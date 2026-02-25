import sum from "./index.js";
console.log(sum(2,3));

// named 
// import {sub} from "./index.js"
// console.log(sub(4,3))

import {sub,add} from "./index.js"
console.log(sub(8,6))
console.log(add(5,6))


// import {hurry} from "../20-02-2026/indexx.js"
// console.log(hurry(8,8))

// web storage -- to store the data in the form of key value pairs
// localStorage 
// setItem 
localStorage.setItem( "name","balu")
localStorage.setItem( "role","soft")
// getItem 
console.log(localStorage.getItem("name"))
// remove 
localStorage.removeItem("name")
console.log(localStorage.getItem("name"))
// clear 
localStorage.clear()

// sessionStorage 

sessionStorage.setItem("age",22)
let data=sessionStorage.getItem("age")
console.log(data)
sessionStorage.removeItem("age")
// clear 

// event handling 
console.log(25)
// console.log(mike)
console.log("anji")

try {
    console.log(mike)
    throw("error ")
} catch (error) {
    // console.log(error)
}
finally{
    console.log("final")
}

console.log("bye")
let l=document.getElementById("name")
console.log(l)
// output methods 
console.log("boss")
// alert("welocome")
// prompt 
let d=prompt("the enter name")
console.log(d)




