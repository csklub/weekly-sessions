/*

Reverse an array,

Given:

[10, 5, 6, 8] -> [8, 6, 5, 10]

[10] -> [10]

[] -> []

[10, 4] -> [4, 10]


reverseArray(arr);

*/
let reverseArray = (arr) => {  
  let pt1 = 0
  let pt2 = arr.length - 1
  while (pt1 < pt2) {
    let temp = arr[pt1]
    arr[pt1] = arr[pt2]
    arr[pt2] = temp 
    pt1++
    pt2--
  }
  return arr
}

// test
console.log(reverseArray([10, 4]))
console.log(reverseArray([10, 4, 5, 6, 7]))
console.log(reverseArray([]))

/*
- do a dry run first before saying you are done
- first talk through your solution before writing your code
- Listen to interviewer hints
- Ask questions; esp around constraints, eg. in-place reverse for our case
- Start with brute-force solution, if you are not sure about the optimal
    - even if you are sure of the optimal, talk about the b/f and why it's a good idea
- Do a dry run through code

   p1 --> <---  p2 // temp = // 2 < 2 --> false
   |            |
   V            V
[ 20, 8, 6, 5, 10 ] <- Arr

*/