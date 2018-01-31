const findMedian = a => {
  const len = a.length;
  const half = Math.floor(len / 2);

  a.sort((a, b) => a > b);

  if (len % 2 === 0) {
    return (a[half] + a[half - 1]) / 2;
  }

  return a[half];
};

const transpose = (args, index) => {
  const len = args[index].length;
  return args[index].map((col, i) =>
    args.map(row => {
      if (Array.isArray(row)) {
        if (row.length !== len) throw new Error('Matrix length mismatch');
        return row[i];
      }
      return row;
    })
  );
};

export function median(...args) {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return findMedian(args[0]);
    return args[0];
  }

  const firstArray = args.findIndex(element => Array.isArray(element));
  if (firstArray !== -1) {
    const result = transpose(args, firstArray);
    return result.map(val => findMedian(val));
  }
  return findMedian(args);
}
