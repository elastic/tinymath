import { transpose } from './lib/transpose';

const findMedian = a => {
  const len = a.length;
  const half = Math.floor(len / 2);

  a.sort((a, b) => a > b);

  if (len % 2 === 0) {
    return (a[half] + a[half - 1]) / 2;
  }

  return a[half];
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
