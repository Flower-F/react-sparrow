import createThreshold from '../threshold';

const scale = createThreshold({
  domain: [10000, 100000], // 1000, 10000 就是两个分割值
  range: ['white', 'pink', 'red'],
});

describe('Threshold 比例尺', () => {
  it('Threshold 比例尺应当将数据进行正确的分组', () => {
    expect(scale(9999)).toBe('white'); // [0, 10000) -> "white"
    expect(scale(10000)).toBe('pink'); // [10000, 100000) -> "pink"
    expect(scale(100001)).toBe('red'); // [100000, 300577) -> "red"
  });
});
