import { stringToNumber } from './stringToNumber';

describe('stringToNumber', () => {
  test('converts a simple number string to a number', () => {
    expect(stringToNumber('123')).toBe(123);
  });

  test('converts a number string with commas to a number', () => {
    expect(stringToNumber('1,234')).toBe(1234);
  });

  test('handles a decimal number string correctly', () => {
    expect(stringToNumber('1234.56')).toBe(1234.56);
  });

  test('handles a decimal number string with commas correctly', () => {
    expect(stringToNumber('1,234.56')).toBe(1234.56);
  });

  test('returns NaN for non-numeric strings', () => {
    expect(stringToNumber('abc')).toBeNaN();
  });

  test('handles an empty string', () => {
    expect(stringToNumber('')).toBe(0);
  });
});
