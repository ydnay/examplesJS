function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('level'));
console.log(isPalindrome('lol'));
console.log(isPalindrome('reinier'));
console.log(isPalindrome('l'));
console.log(isPalindrome(''));
console.log(isPalindrome(' '));
console.log(isPalindrome('palindrome'));