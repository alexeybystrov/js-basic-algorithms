import tollStaircase from '../../src/lesson5/solution.js';

it('test some paths', () => {
  const path = [1, 13, 17, 2, 8, 7, 19, 6];
  expect(tollStaircase(path)).toBe(29);

  expect(tollStaircase(path.reverse())).toBe(29);

  const path2 = [0, 0, 0, 0];
  expect(tollStaircase(path2)).toBe(0);

  const path3 = [92, 92, 93, 92, 92, 92, 93, 93];
  expect(tollStaircase(path3)).toBe(461);
});
