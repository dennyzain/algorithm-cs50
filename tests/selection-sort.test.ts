import { selectionSort } from '../src/selection-sort';

it('should sorting array [3, 2] to be [2, 3]', () => {
  const input = [3, 2];
  expect(selectionSort(input)).toStrictEqual([2, 3]);
});
