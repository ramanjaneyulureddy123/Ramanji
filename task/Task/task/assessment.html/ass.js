function reverseWords(sentence) {
  return sentence.split("").reverse().join("");
}

console.log(reverseWords("hello world"));

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("JavaScript is powerful"));

let sets= new Set([1,2,3,2,4,5,1])
console.log(sets)


let array=[9,8,7,6,5,4,3,3]
array.sort((a,b)=>a-b)
console.log(array)

function sorting(array){
    return array.sort((a,b)=>a-b)
}
console.log(sorting([6,5,4,3,2,1]))

let num=[5,50,100,35]
for(let i = 0; i<num.length; i++){
    for( let j = i + 1; j<num.length; j++){
        if(num[i]>num[j]){
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;

        }
    }
}
console.log(num)

function sortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr; 
}

console.log(sortAscending([5,4,3,2,1]))

// check whether even or odd 
// let number=prompt("enter a number")
// if (number %2===0){
//   console.log(number+"is a even number")
// }else{
//   console.log(number+"is a odd number")
// }


// even or odd 
let x=6

if (x%2 ==0){
  console.log('even number')
}if(x%2 !==0){
console.log("odd number")

}

let a = 30;
let b = 20;

if (a > b) {
  console.log("a is the larger number");
} else {
  console.log("b is the larger number");
}


let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}

console.log("Factorial of", number, "is:", factorial);

function count(sentence){
  let result={}
  let words=sentence.split(" ")
  for(let word of words){
    if(result[word]){
      result[word]++;
    }else{
      result [word]=1
    }
  }
  return result;
}
console.log(count("hello world hello is"))

let nums=9
for(let i=1; i<=10; i++){
console.log(nums+"*"+i+"="+(nums*i))
}

function palindrome(sentence){
  let reversed=sentence.split("").reverse().join("")
  if(sentence===reversed){
    console.log("palindrome")
  }else{
    console.log("not polidrome")
  }
}

palindrome("madam")