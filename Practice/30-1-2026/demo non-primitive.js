// non primitive data type -- it stores the multiple valueor complex data in single memory location
// types -- object , array, function
// 1.object -- it stores the key-value pairs and used with curly braces { } 
var object={
    name:"vijay", age:22, role:"ass software engineer" , salary:{month:2303}
}

console.log(object)
// dot natation
console.log(object.salary)
console.log(object.name)

// bracket notation 
console.log(object["age"])

console.log(object.age=30)

console.log(object["age"])

delete object.age
// 2.Array -- it stores a multiple values in  a single variable and stored in square brackets [ ]
// an arry is a collection of values stored in ordered list
var array=[1,2,3,"mike",Boolean,true ,false,null,undefined,"hello"]
console.log(array[1] )
// change the value 
array [1]=23
console.log(array)
// length
console.log(array.length)

let arr=[1,2,3,[45,"hello"]]
console.log(arr)
// adda t0 end
arr.push(50) 
// remove last 
arr.pop()
console.log(Array.isArray(arr))

// function -- it is block of code to perform some specific task and return a value and it runs only when it is called & helps in code reuse
// syntax 
function functionname(){
    console.log("code to executed")
}
// 
function hi(){
    console.log("pawan sehrawat")
}
hi()
// 
function add(a,b){
return a+b
}
 console.log(add(10,20))
//

function attend(name,days) {
    perday=500
    console.log(name,perday*days)
    return perday*days
}

console.log(attend("ramu",20))
attend("shva",19)

// es-6 -- means ecma script or java script. it stands for european computer manufacturers association
// maps-- the data will be stored in key value pairs and key can be any datatype
var sub = new Map([
    ["apple",600],
    ["banana",700]
])
console.log(sub)
sub.set ("name","anji")
sub.set(true,"value")
sub.set(55,"age")
console.log(sub)
// get 
console.log(sub.get("banana"))
// has -- check key 
console.log(sub.has(55))
// delete 
sub.delete(true)
console.log(sub)
// clear-- remove
sub.clear()
console.log(sub)
// size 
console.log(sub.size)

// weak map -- 
let weakmap= new WeakMap()
let user={ }
weakmap.set(user,{name:"anji",age:22})
// weakmap.set(user,22)
// get 
console.log(weakmap.get(user) )
// has 
console.log(weakmap.has(user))
// delete 
// weakmap.delete(user)
// console.log(weakmap.has(user))

// set 
let set= new Set([1,2,3,3,3,4,5,6,7,])
console.log(set)
// add 
 set.add(10)
//  has 
console.log(set.has(10))
// size 
console.log(set.size)
// delete 
set.delete(10)
console.log(set)
// clear 
set.clear()
console.log(set)


