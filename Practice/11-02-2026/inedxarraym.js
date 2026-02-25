// array -- it store multiple values in single variables and collection of data
var arr=[1,2,3,4,"hello",true, undefined,[2,3,4,]]
console.log(arr)
// array methods
// Push()--add the element at the end of the array
arr.push(4)
console.log(arr)

// Pop()--remove the element
arr.pop()
console.log(arr)

// unshift()--add the element starting of the array
arr.unshift("anji")
console.log(arr)
 
// shift()-- remove the starting element
arr.shift()
console.log(arr)

// splice()-- we can add at my location
// splice (indexvalue, deletecount,new )
arr.splice(2,0,5)
console.log(arr)

arr.splice(3,2,6)
console.log(arr)

// using splice add 
arr.splice(0,0,"add")
console.log(arr)

// using splice remove 
arr.splice(0,1)
console.log(arr)

// length
console.log(arr.length)

// hoisting
// var a=10



// console.log(c)
// const c=10
// // --function 
// great()

// function great(){
//     console.log("hello")
// }
// // great()
// // function expression
// sweat()
// var sweat=function(){
//     console.log("bye")
// }

// maps 
var sub= new Map([ 
    ["apples", 60],
    ["banana", 80 ]
 ])

 console.log(sub)

 sub.set("name","anji")
 console.log(sub.get("name"))
  console.log(sub.has("name"))
sub.delete("name")
  console.log(sub.has("name"))
  sub.clear()
console.log(sub.get("name"))

// weakmap 
const wm=new WeakMap()
let obj={name:"mike"}
let obj1={}
wm.set(obj,"developer")
wm.set(obj1,"assciate softwre engineer")

console.log(wm.get(obj1))
console.log(wm.has(obj1))
// wm.delete(obj)
console.log(wm.has(obj))

// set 
var set=new Set([1,2,2,3,3,4,5,5])
console.log(set)
set.add(6)
console.log(set.has(6))
// set.delete(2)
// console.log(set.has(2))
// set.clear()
// console.log(set.has(3))
// console.log(set.size)

// weakset 
var weakset=new WeakSet()
let object={name:"mike",age:22}

weakset.add(object)

console.log(weakset.has(object))
weakset.delete(object)
console.log(weakset.has(object))

setTimeout(function(){
    console.log("hi ram")
},5000)

