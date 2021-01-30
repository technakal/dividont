import isValue from '@util/isValue';

describe('util', () => {
  test('isValue returns true for a non-empty, non-null value', () => {
    expect(isValue([1, 2, 3])).toBe(true);
    expect(isValue({ a: 1, b: 2 })).toBe(true);
    expect(isValue(1)).toBe(true);
    expect(isValue(true)).toBe(true);
    expect(isValue(false)).toBe(true);
  });
  test('isValue returns false for an empty array', () => {
    expect(isValue([])).toBe(false);
  });
  test('isValue returns false for an empty object', () => {
    expect(isValue({})).toBe(false);
  });
  test('isValue returns false for undefined', () => {
    expect(isValue(undefined)).toBe(false);
  });
  test('isValue returns false for null', () => {
    expect(isValue(null)).toBe(false);
  });
});
