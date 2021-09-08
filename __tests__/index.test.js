import slice from "../src/index.js";

// BEGIN
let array;

beforeEach(() => {
  array = [1, 2, 3, 4, 5]; 
});

test('common case', () => {
  const result = slice(array, 1, 4);
  expect(result).toEqual([2, 3, 4]);
});

test('should use defalt start and end', () => {
  const result = slice(array);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('should works with start and end < 0', () => {
  const result = slice(array, -4, -2);
  expect(result).toEqual([2, 3]);
});

test('should works with start > length', () => {
  const result = slice(array, 5);
  expect(result).toEqual([]);
});

test('should works with start < - length', () => {
  const result = slice(array, -6);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('should works with empty array', () => {
  const result = slice([], 1, 4);
  expect(result).toEqual([]);
});
// END