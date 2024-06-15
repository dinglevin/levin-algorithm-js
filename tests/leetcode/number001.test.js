import { twoSumV1 } from '../../src/leetcode/number001.js';

describe('twoSumV1 tests', () => {
  it('Case1', async () => {
    const result = twoSumV1([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });
});
