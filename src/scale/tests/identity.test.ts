import createIdentity from '../identity';

const scale = createIdentity();

describe('恒等比例尺', () => {
  it('恒等比例尺的输入输出应该完全相等', () => {
    expect(scale(1)).toBe(1);
    expect(scale('sparrow')).toBe('sparrow');
    expect({ a: 1 }).toEqual({ a: 1 });
  });
});
