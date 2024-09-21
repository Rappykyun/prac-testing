import { capitalize, reverseString, calculator, caesarCipher, arrayAnalysis } from './script';
test('capitalize should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('github copilot')).toBe('Github copilot');
});

// Test cases for reverseString()
test('reverseString should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('github copilot')).toBe('tolipoc buhtig');
});

// Test cases for calculator()
test('calculator should perform basic arithmetic operations', () => {
    const calc = calculator();
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.subtract(5, 2)).toBe(3);
    expect(calc.multiply(4, 6)).toBe(24);
    expect(calc.divide(10, 2)).toBe(5);
});

// Test cases for caesarCipher()
test('caesarCipher should shift characters in a string based on the given shift value', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

// Test cases for arrayAnalysis()
test('arrayAnalysis should return an object with average, min, max, and length of the array', () => {
    expect(arrayAnalysis([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
    expect(arrayAnalysis([10, 20, 30, 40, 50])).toEqual({
        average: 30,
        min: 10,
        max: 50,
        length: 5
    });
});