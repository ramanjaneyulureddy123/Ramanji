// event bubbling
let child=document.getElementById("parent")
// console.log(child)
function action(){
    console.log("welcome click")
}
child.addEventListener("click",action)

let parent=document.getElementById("child")
// console.log(parent)
function action(){
    console.log("come on click")
}
parent.addEventListener("click",action)

let div=document.getElementById("div")
// console.log(div)
function action1(){
    console.log("parent element")
}
div.addEventListener("click",action1)

// capturing event 

let div1=document.getElementById("div1",true)
// console.log(div1)
function action2(){
    console.log("parent element")
}
div1.addEventListener("click",action2,true)
// deligation 
let list=document.getElementById("listed")
// console.log(div)
function action4(){
    console.log("listed items")
}
list.addEventListener("click",function(e){

console.log(e.target)
})
// // normal event 
let a=0
let b1=document.getElementById("box")
b1.addEventListener("click",function(){
    a+=1 
    console.log("it runs")
        console.log("value of a is :" ,a)
})

// throttling 
let lastclick=0
let b=0
b1.addEventListener("click",function(){
    let current=Date.now()
    if (current-lastclick>2000){
        b+=1;
    console.log("value of b is :" ,b)
    lastclick=current;
}
console.log("button clicked")
})
// // promise 

let mypromise=new Promise(function(reslove,reject){
    let status=fail
    if(status){
      reslove("operation success")
    } else{
        reject("failure")
    }
})

mypromise.then(function(a){
console.log("sucess")
})
.catch (function(b){
    console.log("fail")
})

// debouncing
let t
let x=document.getElementById("bell")
// console.log(x)
x.addEventListener("click",function(){
    clearTimeout(t)
    t=setTimeout(function(){
        console.log("value of c is:")
    },2000)
})

