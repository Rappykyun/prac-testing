export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export function calculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
}

export function caesarCipher(string, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
  return string.split('').map(char => {
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) return char;
    return isUpperCase ? shiftedAlphabet[index].toUpperCase() : shiftedAlphabet[index];
  }).join('');
}

export function arrayAnalysis(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
}