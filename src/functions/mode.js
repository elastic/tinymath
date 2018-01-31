const findMode = (a) => {
  let maxFreq = 0;
  const mapping = {};

  a.map(val => {
    if (mapping[val] === undefined) {
      mapping[val] = 0;
    }
    mapping[val] += 1;
    if (mapping[val] > maxFreq) {
      maxFreq = mapping[val];
    }
  });

  return Object.keys(mapping).filter(key => mapping[key] === maxFreq).map(val => parseFloat(val)).sort((a, b) => a - b);
};

const transpose = (args, index) => {
  let len = args[index].length;
  return args[index].map((col, i) => args.map(row => {
    if (Array.isArray(row)) {
      if (row.length !== len) throw new Error('Matrix length mismatch');
      return row[i];
    }
    return row;
  }));
};

export function mode(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMode(args[0]);
    return args[0];
  }

  let firstArray = args.findIndex(element => Array.isArray(element));
  if (firstArray !== -1) {
    let result = transpose(args, firstArray);
    return result.map(val => findMode(val));
  }
  return findMode(args);
};
