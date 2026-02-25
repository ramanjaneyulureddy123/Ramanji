var m=[1,2,3,4,5,6]
console.log(m)
// for each -- it returns values and indexes 
m.forEach((i,j)=>{
    console.log(i,j)
})
// Flattening of array --it cnverts a multi-dimensional array into single dimensonal array
let x=[1,2,[3,4,5,[6,7,8]],9,10]
console.log(x.flat(2)) 

let y=[1,2,[3,4,5,[6,7,8,9,10,[11,12,[13,14]]]]]
console.log(y.flat(Infinity))

// reduce --
let b=[1,2,3]
console.log(b.reduce((i,j)=>i+j,0))

// object-- it stored in key value pairs 
var obj={name:"anji",age:22, sal:1500}
console.log(obj)
console.log(obj.name)
console.log(obj["age"])
obj.name="vijay"
console.log(obj)
// objects 
// 1.object literal similar to object
// 2.constructor -is used to create and intilize objects
function person (name,age){
    this.name=name;
    this.age=age;
}
let p1=new person ("alice",20)
let p2=new person ("ali",20)

console.log(p2)
//  3.class 
class persons{
    constructor (a,b,c){
        this.name=a;
        this.sal=b
        this.role=c
    }
}
let p3=new person("king",599,"operator")
console.log(p3)
// copy of object
// normal copy 
let orginal={name:"don",a:"one", b:"two"}
var copy=orginal

copy.name="vijjulu"
console.log(orginal)
console.log(copy)

// swallow is usind the spread opertor
let org={name:"don",a:"one", b:"two",obj:{x:"blue" , y:"black"}}
var cop={...org}

cop.name="mike"
console.log(org)
console.log(cop)
// non primi not change and primi is change

// deep copy 
var cop=JSON.parse(JSON.stringify(org))

cop.name="mike"
cop.obj.x="white"
console.log(org)
console.log(cop)
//  non primi change

// copying of arrays
// normal copy 
let arr=[1,2,3,[20,30,40]]
copy2=arr
copy2[0]=10
console.log(arr)
console.log(copy2)
//  shallow copy 
copy2=[...arr]
copy2[3][0]=12
console.log(arr)
console.log(copy2)

// deap copy 
  var copy2=JSON.parse(JSON.stringify(arr))
copy2[3][0]=45
console.log(copy2)
console.log(arr)



let per={name:"don",a:"one", b:"two"}

console.log(Object.keys(per))
console.log(Object.values(per))
console.log(Object.entries(per))

