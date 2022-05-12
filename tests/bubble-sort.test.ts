import { bubbleSort } from '../src/bubble-sort';

it('should sorting array [3, 2] to be [2, 3]', () => {
  const input = [3, 2];
  expect(bubbleSort(input)).toStrictEqual([2, 3]);
});

it('should sorting array [1, 3, 2] to be [1, 2, 3]', () => {
  const input = [1, 3, 2];
  expect(bubbleSort(input)).toStrictEqual([1, 2, 3]);
});

it('should sorting array [4, 1, 3, 2] to be [1, 2, 3, 4]', () => {
  const input = [4, 1, 3, 2];
  expect(bubbleSort(input)).toStrictEqual([1, 2, 3, 4]);
});

it('should sorting array [4, 1, 5, 3, 2] to be 1, 2, 3, 4, 5]', () => {
  const input = [4, 1, 5, 3, 2];
  expect(bubbleSort(input)).toStrictEqual([1, 2, 3, 4, 5]);
});
