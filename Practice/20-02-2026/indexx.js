//  Promise.all 
 Promise.all([
            Promise.reject("ok"), 
    Promise.resolve("completed"),
    Promise.resolve("ok")

])
.then(()=>
    console.log("success")
)
.catch(()=>
    console.log("failure")
)

// Promise.race 
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));


let a=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("task 1 settle")
    },1000);
})

let b=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("task 2")
    },5000);
})
Promise.race([a,b])
.then((a)=>{
    console.log(a)
})
.catch((a)=>{
    console.log(a)
})
// promise.settled 
Promise.allSettled([a,b
])
    .then((results) => console.log(results));
// promise.any 
Promise.any([a,b
])
    .then((results) => console.log(results));
// generator
function* hello(){
    yield 1;
      yield 2;
        yield 3;
}   
let s= hello()
console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())

for(let num of hello()){
    console.log(num)
}
// iterator
let value=[1,2,3]
let k=value[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
// array destructure 
let l =[10,20,90,30,40]
let [A, B,C, D , E]= l
console.log(A, B,C, D , E)

// object destructure 

const person= {name:"mike",age:22,address:{city:'ap'}}
// var {name, age}=person
// console.log(person)

console.log(person.name)
let m=person.name
console.log(m)
console.log(m)
// nested destru obj 
const {address:{city}}=person
console.log(person)
// nested destru array
let red=[1,2,[3,4]]
const [M,N,[O,P]]=red
console.log(M )
console.log(N)
console.log(O)
console.log(P)

// export function hurry(x,y){
//     return x+y
// }

