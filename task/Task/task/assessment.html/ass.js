function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("JavaScript is powerful"));

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
  // Outer loop
  for (let i = 0; i < arr.length; i++) {
    // Inner loop
    for (let j = i + 1; j < arr.length; j++) {
      // Swap if current element is bigger than the next
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr; // Return the sorted array
}

console.log(sortAscending([5,4,3,2,1]))