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

console.log(strOccurences('l', 'hello'));

