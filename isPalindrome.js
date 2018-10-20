var palindromeChainLength = function(n) {
  let steps = 0;
  let temp = n;
  while(!isPalindrome(temp)) {
    temp = temp + reverseNumber(temp);
    steps++;
    console.log(temp, steps);
  }

  return steps;
};

var isPalindrome = function(n) {
  return n.toString().split('').reverse().join('') == n; 
}

var reverseNumber = function(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}

// console.log(palindromeChainLength(87));
// console.log(palindromeChainLength(10));
console.log(palindromeChainLength(101));