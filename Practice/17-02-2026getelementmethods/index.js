// date --is used to work with dates and times
let now=new Date()
console.log(now)

let nows=new Date( 29,2005,6)
console.log(nows)
// or --("2026-8-20")
let date=new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMonth())

// date change 
var dat=new Date()
dat.setFullYear(2030)
dat.setMonth(6)
dat.setDate(29)
console.log(dat)

// format date
let time=new Date()
console.log(time.toTimeString())
console.log(time.toISOString())
console.log(time.toDateString())
// timestamp

let times=Date.now()
console.log(times)
// template string 
var a ="john"
var b=30000

console.log(`the employee name is ${a} and salalry is ${b}`)
// math method
var x=10.4
var y=9
console.log(Math.floor(x))
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.sqrt(y))
console.log(Math.pow(3,3))
console.log(Math.max(1,2,3,9))
console.log(Math.min(10,0,20))
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)

// strings 
let text="haiworld"
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.includes("world"))
console.log(text.slice(0,5))

// getelemnts methods
console.log(document)
let h1=document.getElementById("head")
let h3=document.getElementById("headings")
console.log(h3)
console.log(h1)
let h2=document.getElementsByClassName("hi")
console.log(h2)
let h4=document.getElementsByTagName("h1")
console.log(h4)
let h5=document.querySelector(".hi")
console.log(h5)
let h6=document.querySelectorAll(".hi")
console.log(h6)

let a1=document.getElementById("name")
console.log(a1)
console.log(a1.parentElement)
let parent=a1.parentElement
console.log(parent.children)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

let first=document.getElementById("first")
console.log(first.nextElementSibling )

let third=document.getElementById("third")
console.log(third)
console.log(third.previousElementSibling )




// // after -- like before
// let a3=document.getElementById("role")
// console.log(a3)
// let newItem=document.createElement("h1")
// newItem.textContent=2222
// role.after(newItem)

// let newElement=document.createElement("h1")
// newElement.Text="vijay"
// console.log(newElement)
// a1.prepend(newElement)
// // a1.appendChild(newElement)