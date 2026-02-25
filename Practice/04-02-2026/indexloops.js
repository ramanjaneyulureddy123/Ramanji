// Loops--it allows  block of code to run multiple times as long as given conditions is satisfied
// for loop, while loop, do while 
// for loop-- is a repeats block of code a specific number of times as long as given condition is true
for (let i=1; i<=5; i++){
    console.log(i)
} 
// --
for (let i=1; i<=20;i++){
    if(i%2===0){
        console.log(i +"even")
    }else {
        console.log(i + "odd")
    }
}
// -- print array values 
let fruits =["apple","banana","mango"]
for (let i=0; i< fruits.length ; i++){
    console.log(fruits[i])
}
// --
let num=15
for (let i=1; i<=10; i++){
    console.log(num +"x"+i+"="+(num*i))
}
// -- count the numbers in array
let numbers=[1,2,3,4,5,6,7]
let count=0
for (let j=0;j<numbers.length; j++ ){
  console.log(count) 
}
// while loop-- executes a block of code repeatedly as long as condition is true
let i=0
while(i<3){
    console.log(i)
    i++
}
let y=2
while(y<=10){
    console.log(y)
    y +=2;
}
let p=5
while(p>0){
    console.log(p)
    p--
}
 let pin=1234
    let enterpin;
    let attempts=0
    while(enterpin!==pin && attempts<3){
        enterpin=1234;
        attempts++
        console.log("enter pin")
    }
// do while -- executes the block of code once before checking the condition
// do {
//  }while ( condition)
let h=1
do {
    console.log(h)
    h++;
}while(h<=5)
// -- it run first once after the condition 
let k=10
do {
    console.log(k)
}while(k<5)
    // // --
    // let pin=1234
    // let enterpin;
    // let attempts=0
    // do{
    //     enterpin=234;
    //     attempts++
    //     console.log("enter pin")
    // }while(enterpin!==pin && attempts<3)
 // for of -- is used to iterate over values of iterate objects like arrays ,string ,set maps
var arr=[2,3,4]
console.log(arr)
for (x of arr){
    console.log(x )
}
// for  in -- is used to iterate over the enumerable properties of an object (over he keys of a object)
let obj={name:"anji",age:22}
console.log(obj)
for (b in obj){
    console.log(b)
    
}
// console.log(b,obj[b])
// infinite loop-- is a loop that never stop executing because its condition is always true and never becomes false
while(true){
    console.log("hello")
    break;
}
// for each 
let fruit=["apple","grapes","banana"]
fruit.forEach((item ,index)=>{
    console.log(index,item)
}
 )
