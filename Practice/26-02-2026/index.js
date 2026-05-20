let a1=document.getElementById("a")
console.log(a1)
console.log(a1.parentElement)
let c1=a1.parentElement
console.log(c1.children)
console.log(c1.firstElementChild)
console.log(c1.lastElementChild)

// // let first=document.getElementById("b")
console.log(a.nextElementSibling)
console.log(b.previousElementSibling)

let newElement=document.createElement("h1")
newElement.innerText="new element created"
console.log(newElement)

console.log(c1)
c1.appendChild(newElement)
// console.log(c1)
c1.prepend(newElement)
b.before(newElement)
b.after(newElement)

