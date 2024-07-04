import { getColour } from './getColour';

describe('getColour', () => {
  test('returns blue for rank <= 10000', () => {
    expect(getColour(10000)).toBe('#0000FF');
  });

  test('returns dark green for rank <= 100000', () => {
    expect(getColour(100000)).toBe('#006400');
  });

  test('returns green for rank <= 200000', () => {
    expect(getColour(200000)).toBe('#008000');
  });

  test('returns light green for rank <= 500000', () => {
    expect(getColour(500000)).toBe('#ADFF2F');
  });

  test('returns yellow for rank <= 1000000', () => {
    expect(getColour(1000000)).toBe('#FFFF00');
  });

  test('returns orange for rank <= 2500000', () => {
    expect(getColour(2500000)).toBe('#FFA500');
  });

  test('returns red for rank <= 5000000', () => {
    expect(getColour(5000000)).toBe('#FF0000');
  });

  test('returns dark red for rank > 5000000', () => {
    expect(getColour(5000001)).toBe('#8B0000');
  });
});
