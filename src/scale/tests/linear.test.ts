import createLinear from '../main/linear';

const scale = createLinear({
  domain: [0, 1], // 输入范围是 [0, 1]
  range: [0, 10], // 输出范围是 [0, 10]
});

describe('线性比例尺', () => {
  it('线性比例尺的输入输出应该按设置的比例缩放', () => {
    expect(scale(0.2)).toBe(2); // 2
    expect(scale(0.5)).toBe(5); // 5
  });
});
