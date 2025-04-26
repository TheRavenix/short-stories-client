const ROMANIZE_LOOKUP: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function romanize(num: number): string {
  let roman = "";

  for (const key in ROMANIZE_LOOKUP) {
    while (num >= ROMANIZE_LOOKUP[key]) {
      roman += key;
      num -= ROMANIZE_LOOKUP[key];
    }
  }
  return roman;
}

export { ROMANIZE_LOOKUP, romanize };
