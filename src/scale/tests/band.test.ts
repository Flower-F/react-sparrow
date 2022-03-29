import createBand from '../band';

const options = {
  domain: ['苹果', '香蕉', '梨'],
  range: [0, 320], // 上图中 width 的范围
  padding: 0.2, // 控制条之间的间距，上图中的 padding
};

const scale = createBand(options);

describe('Band 比例尺', () => {
  it('Band 比例尺应该显示对应的映射数值', () => {
    expect(scale('苹果')).toBe(20); // 20
    expect(scale('香蕉')).toBe(120); // 120
    expect(scale('梨')).toBe(220); // 220
    //@ts-ignore
    expect(scale.bandWidth()).toBe(80); // 80
    //@ts-ignore
    expect(scale.step()).toBe(100); // 100
  });
});
