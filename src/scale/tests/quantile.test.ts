import createQuantile from '../quantile';

const scale = createQuantile({
  domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  range: ['white', 'pink', 'red'],
});

describe('Quantile 比例尺', () => {
  it('Quantile 比例尺应当自动帮我们排序后再分组', () => {
    expect(scale(1)).toBe('white'); // [0, 300577 / 3) -> "white"
    expect(scale(6)).toBe('pink'); // [300577 / 3, 300577 * (2 / 3)) -> "pink"
    expect(scale(15)).toBe('red'); // [300577 * (2 / 3), 300577) -> "red"
  });
});
