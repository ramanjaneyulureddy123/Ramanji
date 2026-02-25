let drag=prompt("enter a value")
let m=parseInt(drag)
console.log(typeof(m))

let k=m.toString()
console.log(typeof(k))

var a=28.977777
console.log(a.toFixed(3))

var b=parseFloat("34.77")
console.log(b)


fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json()
})
.then(d => console.log(d))
.catch((e)=>{
    console.log(e)
})

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"post",
    headers: {
        "content-Type": "application/json"
    },
    body:JSON.stringify({
        title:"hello",
        body: 'this is a post',
        userID:1 
    })
})

.then(Response=> Response.json())
.then(data => console.log(data))


fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PUT",
    headers: {
        "content-Type": "application/json"
    },
    body:JSON.stringify({
        title:"HY",
        body: 'Welocme',
        userID:2
    })
})

.then(d=> d.json())
.then(data1 => console.log(data1))

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PATCH",
    headers: {
        "content-Type": "application/json"
    },
    body:JSON.stringify({
        title:"Partically changed booss",
        name:"anji"
       
    })
})

.then(d=> d.json())
.then(data1 => console.log(data1))

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"DELETE"
})
.then(d=> d.json())
.then(data1 => console.log(data1))

console.log(screen.width)
console.log(window.innerWidth)
console.log(location.href)

