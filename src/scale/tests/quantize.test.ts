import createQuantize from '../quantize';

const scale = createQuantize({
  domain: [0, 300577],
  range: ['white', 'pink', 'red'],
});

describe('Quantize 比例尺', () => {
  it('Quantize 比例尺应当自动帮数据进行正确的分组', () => {
    expect(scale(100190)).toBe('white'); // [0, 300577 / 3) -> "white"
    expect(scale(100200)).toBe('pink'); // [300577 / 3, 300577 * (2 / 3)) -> "pink"
    expect(scale(300576)).toBe('red'); // [300577 * (2 / 3), 300577) -> "red"
  });
});
