function unset(obj, path) {
  const parts = Array.isArray(path)
    ? path
    : path.split(/[\.\[\]]/).filter(part => part.length > 0);

  const topRef = obj;
  let ref = obj;
  let parentRef = null;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (ref.hasOwnProperty(part)) {
      parentRef = ref;
      ref = ref[part];
    } else {
      const invalidPath = parts.slice(0, i - 1);
      throw new Error(`the path ${invalidPath} is not valid`);
    }
  }

  const keyToBeDeleted = parts[parts.length - 1];
  if (Array.isArray(ref)) {
    const idx = parseInt(keyToBeDeleted);
    ref = ref.splice(idx, 1);
  } else {
    delete ref[keyToBeDeleted];
  }

  return topRef;
}

const myObject = {
  a: 1,
  b: [2, 2.1, 2.2],
  c: 3,
};

const testCases = [
  {
    input: {
      obj: { a: 1, aa: 11 },
      path: "a",
    },
    expected: { aa: 11 },
  },
  {
    input: {
      obj: { a: 1, b: [2, 2.1, 2.2], c: 3 },
      path: "b[1]",
    },
    expected: { a: 1, b: [2, 2.2], c: 3 },
  },
  {
    input: {
      obj: { a: [{ b: { c: "value" } }] },
      path: "a[0].b.c",
    },
    expected: { a: [{ b: {} }] },
  },
];

testCases.forEach(test => {
  const result = unset(test.input.obj, test.input.path);
  const resultAsStr = JSON.stringify(result, null, 2);
  const expectedAsStr = JSON.stringify(test.expected, null, 2);
  if (resultAsStr !== expectedAsStr) {
    console.log("Test failed for input:", test.input.obj);
    console.log("Expected result:", expectedAsStr);
    console.log("Result:", resultAsStr);
  }
});
