function createEmptyStr(n) {
  let result = ' ';
  for(let i = 0; i < n - 2; i++) {
    result += ' ';
  }

  return result;
}

function buildStairs(rows) {
  let row = createEmptyStr(rows) + '##';
  console.log('Height: ' + rows);
  for(let i = 1; i <= rows; i++) {
    console.log(row);
    row = row.slice(1) + '#';
  }
}

console.log(buildStairs(20));
