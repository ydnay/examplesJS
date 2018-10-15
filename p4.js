// Write a function that given a list of non negative integers, arranges them such that they form the largest 
// possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

function findGreaterPossibleNumber(arr) {
  return parseInt(arr.sort().reverse().join(''));
}

const a1 = [50, 2, 1, 9];
const result = findGreaterPossibleNumber(a1);
console.log(result, typeof(result));