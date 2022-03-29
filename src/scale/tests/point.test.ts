import createPoint from '../point';

const options = {
  domain: ['苹果', '香蕉', '梨'],
  range: [0, 320],
};

const scale = createPoint(options);

describe('Point 比例尺', () => {
  it('Point 比例尺应该按照 padding 为 1 的 Band 比例尺运作', () => {
    expect(scale('苹果')).toBe(80); // 80
    expect(scale('香蕉')).toBe(160); // 160
    expect(scale('梨')).toBe(240); // 240
  });
});
