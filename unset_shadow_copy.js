function recUnset(obj, path) {
  const key = path[0];
  const inputIsArray = Array.isArray(obj);
  const idx = inputIsArray ? parseInt(key) : undefined;

  if (path.length === 1) {
    return inputIsArray
      ? obj.slice(0, idx).concat(obj.slice(idx + 1))
      : Object.assign(obj, { [key]: undefined });
  }

  return inputIsArray
    ? obj.map((e, i) => (i === idx ? recUnset(e, path.slice(1)) : e))
    : Object.assign(obj, { [key]: recUnset(obj[key], path.slice(1)) });
}

function unset(obj, path) {
  const pathAsArray = Array.isArray(path)
    ? path
    : path.split(/[\.\[\]]/).filter(e => e.length > 0);

  return recUnset(obj, pathAsArray);
}

const testCases = [
  {
    input: {
      obj: { key: "value" },
      path: "key"
    },
    expectedResult: {}
  },
  {
    input: {
      obj: { key: [0, 1, 2] },
      path: "key.1"
    },
    expectedResult: { key: [0, 2] }
  },
  {
    input: {
      obj: [0],
      path: ["0"]
    },
    expectedResult: []
  },
  {
    input: {
      obj: {
        a: {
          b: [
            0,
            1,
            {
              c: {
                key: "value"
              }
            },
            3
          ]
        }
      },
      path: "a.b[2].c.key"
    },
    expectedResult: {
      a: {
        b: [
          0,
          1,
          {
            c: {}
          },
          3
        ]
      }
    }
  }
];

testCases.forEach(t => {
  const { obj, path } = t.input;
  const resultAsStr = JSON.stringify(unset(obj, path), null, 2);
  const expectedResultAsStr = JSON.stringify(t.expectedResult, null, 2);
  if (resultAsStr !== expectedResultAsStr) {
    console.log("Test failed for case:");
    console.log(JSON.stringify(t, null, 2));
    console.log("result:");
    console.log(resultAsStr);
  }
});
