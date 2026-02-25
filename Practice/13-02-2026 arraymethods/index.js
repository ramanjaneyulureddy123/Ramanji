let num=[10,20,30,40,50,20]
console.log(num[2])
// indexof -- is used to find the particular element in array and if the value is present & it returns a (-1)
console.log(num.indexOf(20))
console.log(num.indexOf(0))
// includes-- it returns a true or false
console.log(num.includes(20))
console.log(num.includes(60))
// length 
console.log(num.length)
// splice 
// num.splice(0,num.length)
console.log(num)
// lastindexof-- used to find the last value of occurence in the array and find the position in array
console.log(num.lastIndexOf(50))
// assign empty array 
// let arr=[]
// console.log(arr)
// combining 2 arrays
let a=[1,2,3,4]
let b=["a","b","c","d"]
console.log(a,b)
// concat 
let c=a.concat(b)
console.log(c)
// spread operator
var d=[...a,...b]
console.log(d)
// Push()
let arr1=[1,2]
let arr2=[3,4]
arr1.push(...arr2)
console.log(arr1)
// loop in array 
var arr=[1,2,3,4,5]
for(i in arr){
    arr[i]=arr[i]+1
}
console.log(arr)
// testing the array some and every
// some 
console.log(arr.some(i=>i>5)) 
// every 
console.log(arr.every(i=>i>0))
// join--is used to combine all elements in single string
console.log(arr.join())
// sort --
let v=[10,5,50,60]
v.sort((a,b)=> a-b )
console.log(v)
// removing duplictes
let f=[1,1,2,2,3,4]
console.log(...new Set(f))
var g=[]
for(i of f){
    if(g.indexOf(i)== -1) {
        g.push(i)
    }
}
console.log(f)
console.log(g)
// maps --
var array=[10,20,30]
console.log(array.map(i=>i*i))