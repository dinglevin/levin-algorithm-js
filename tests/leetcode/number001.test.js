import { twoSumV1, twoSumV2, twoSumV3 } from '../../src/leetcode/number001.js';

describe('twoSumV1 tests', () => {
  it('Case1', async () => {
    const result = twoSumV1([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it('Case2', async () => {
    const result = twoSumV1([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  it('Case3', async () => {
    const result = twoSumV1([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
});

describe('twoSumV2 tests', () => {
  it('Case1', async () => {
    const result = twoSumV2([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 0]);
  });

  it('Case2', async () => {
    const result = twoSumV2([3, 2, 4], 6);
    expect(result).toEqual([2, 1]);
  });

  it('Case3', async () => {
    const result = twoSumV2([3, 3], 6);
    expect(result).toEqual([1, 0]);
  });
});

describe('twoSumV3 tests', () => {
  it('Case1', async () => {
    const result = twoSumV3([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it('Case2', async () => {
    const result = twoSumV3([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  it('Case3', async () => {
    const result = twoSumV3([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
});
