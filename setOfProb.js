// https://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour

// 1-) Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop,
// and recursion.

function computeSum1(list) {
  let res = 0;
  for(let i = 0; i < list.length; i++) {
    res += list[i];
  }

  return res;
}

const l1 = [21, 7, 3, 5, 13];
console.log(computeSum1(l1));
console.log(computeSum2(l1));
console.log(computeSum3(l1));

// 4-) Write a function that given a list of non negative integers, arranges them such that they form the largest 
// possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

function findGreaterPossibleNumber(arr) {
  return parseInt(arr.sort().reverse().join(''));
}

// const a1 = [50, 2, 1, 9];
// const result = findGreaterPossibleNumber(a1);
// console.log(result, typeof(result));