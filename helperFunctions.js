// Data
const data = [
  {
    id: 0,
    code: 'DSB.AS.ACC',
    name: 'A.S. Accounting',
    type: 'Dregree'
  },
  {
    id: 1,
    code: 'DSB.AS.BUS',
    name: 'A.S. Business',
    type: 'Dregree'
  },
  {
    id: 2,
    code: 'SSL.AS.CHM',
    name: 'A.S. Christina Ministires',
    type: 'Dregree'
  },
  {
    id: 3,
    code: 'DSB.AS.CIT',
    name: 'A.S. Computer Info Tech',
    type: 'Dregree'
  },
  {
    id: 4,
    code: 'SSL.AS.CRJ',
    name: 'A.S. Criminal justice',
    type: 'Dregree'
  },
  {
    id: 5,
    code: 'SEL.AS.ECE',
    name: 'A.S. Early Childhood Education',
    type: 'Dregree'
  },
  {
    id: 6,
    code: 'DSB.BA.BUS',
    name: 'B.A. Business',
    type: 'Dregree'
  },
  {
    id: 7,
    code: 'DSB.MA.MAT',
    name: 'M.A. Math',
    type: 'Dregree'
  }
]

function filterByDegree(arr, code) {
  return arr.filter(elem => {
    return elem.code[4] + elem.code[5] === code;
  })
}

console.log(filterByDegree(data, 'BA'));