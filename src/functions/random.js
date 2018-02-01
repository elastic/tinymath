export function random(a, b) {
  if (a == null) return Math.random();

  // a: max, generate random number between 0 and a
  if (b == null) {
    if (a < 0) throw new Error(`Min is be greater than max`);
    return Math.random() * a;
  }

  // a: min, b: max, generate random number between a and b
  if (a > b) throw new Error(`Min is be greater than max`);
  return Math.random() * (b - a) + a;
}
