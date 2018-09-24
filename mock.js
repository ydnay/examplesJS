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

// FInd duplicate in an array of numbers
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

const arr1 = [7, 24, 81, 32, 55, 1, 43, 99, -3, 43, 1230];
console.log(findDuplicated(arr1));