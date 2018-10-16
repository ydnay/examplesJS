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

function computeSum2(list) {
  // copy list in order to NOT modify the original
  const copiedList = JSON.parse(JSON.stringify(list));
  let res = 0;
  while(copiedList.length > 0) {
    let temp = copiedList.pop();
    res += temp;
  }

  return res;
}

function computeSum3(list) {
  return list.reduce(function(a, b) {
    return a + b;
  }, 0);
}

// const l1 = [21, 7, 3, 5, 13];
// console.log(computeSum1(l1));
// console.log(computeSum2(l1));
// console.log(computeSum3(l1));

// 2-) Write a function that combines two lists by alternatingly taking elements. For example: given the two 
// lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

function combineLists(list1, list2) {
  const res = [];
  for (let i = 0; i < list1.length; i++) {
    res.push(list1[i]);
    res.push(list2[i]);
  }

  return res;
}

const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];
console.log(combineLists(l1, l2));

// 4-) Write a function that given a list of non negative integers, arranges them such that they form the largest 
// possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

function findGreaterPossibleNumber(arr) {
  return parseInt(arr.sort().reverse().join(''));
}

// const a1 = [50, 2, 1, 9];
// const result = findGreaterPossibleNumber(a1);
// console.log(result, typeof(result));