function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// console.log(isPalindrome('level'));
// console.log(isPalindrome('lol'));
// console.log(isPalindrome('reinier'));
// console.log(isPalindrome('l'));
// console.log(isPalindrome(''));
// console.log(isPalindrome(' '));
// console.log(isPalindrome('palindrome'));

function strOccurences(char, str) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === char) {
      count++;
    }
  }

  return count;
}

// console.log(strOccurences('l', 'hello'));

// Find duplicate in an array of numbers with just one duplicated element
function findDuplicated(arr) {
  let sortedArr = arr.sort();
  for (let i = 0; i < sortedArr.length - 1; i++) {
    const element = sortedArr[i];
    const next = sortedArr[i + 1];
    if(element === next) {
      return element;
    }
  }

  return 'Sorry no repeated numbers';
}

const arr1 = [7, 24, 81, 32, 55, 1, 43, 99, -3, 43, 1230, 7];
console.log(findDuplicated(arr1));

// Find all duplicates in an array of numbers
function findAllDup(arr) {
  let obj = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      res.push(arr[i]);
    } else {
      obj[arr[i]] = 1;
    }
  }

  return res;
}

const arr2 = [7, 24, 81, 32, 55, 1, 43, 99, -3, 43, 1230, 7, -3];
console.log(findAllDup(arr2));
