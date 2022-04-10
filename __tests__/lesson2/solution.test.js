import _ from 'lodash';
import quickSort from '../../src/lesson2/solution.js';

it('quickSort empty collection', () => {
  expect(quickSort([])).toEqual([]);
});

it('quickSort not change original array', () => {
  const items = [1, 2, 3, 4, 5];
  const result = quickSort(items);
  expect(result).not.toBe(items);

  const arr = [];
  expect(quickSort(arr)).not.toBe(arr);
});

test.each([
  [[-1, 0, 0, 1, 1, 3, 3, 20, 20]],
  [[1, 2, 3, 3]],
  [_.times(100)],
])('quickSort asc, desc', (items) => {
  const shuffled = _.shuffle(items);
  expect(quickSort(shuffled, 'asc')).toEqual(items);
  expect(quickSort(shuffled, 'desc')).toEqual(items.reverse());
});
