import { addTwoNumbers } from '../../src/leetcode/number002.js';

const createNodeList = (nums) => {
  let head = null;
  let p = null;
  for (const num of nums) {
    if (head == null) {
      head = { val: num, next: null };
      p = head;
    } else {
      p.next = { val: num, next: null };
      p = p.next;
    }
  }
  return head;
};

const convertToList = (ln) => {
  const result = [];
  while (ln != null) {
    result.push(ln.val);
    ln = ln.next;
  }
  return result;
};

describe('addTwoNumbers tests', () => {
  it('Case1', async () => {
    const result = addTwoNumbers(
      createNodeList([2, 4, 3]),
      createNodeList([5, 6, 4])
    );
    expect(convertToList(result)).toEqual([7, 0, 8]);
  });

  it('Case2', async () => {
    const result = addTwoNumbers(createNodeList([0]), createNodeList[0]);
    expect(convertToList(result)).toEqual([0]);
  });

  it('Case3', async () => {
    const result = addTwoNumbers(
      createNodeList([9, 9, 9, 9, 9, 9, 9]),
      createNodeList([9, 9, 9, 9])
    );
    expect(convertToList(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
