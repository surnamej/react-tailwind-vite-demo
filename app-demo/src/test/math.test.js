// math.test.js
import { add } from '../app/math';

test('adds two positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative and positive numbers', () => {
  expect(add(-1, 4)).toBe(3);
});

test('adds two negative numbers', () => {
  expect(add(-3, -2)).toBe(-5);
});
