import { max } from './max.js';
import { min } from './min.js';
import { subtract } from './subtract.js';
export function range(...args) {
  return subtract(max(...args), min(...args));
};
