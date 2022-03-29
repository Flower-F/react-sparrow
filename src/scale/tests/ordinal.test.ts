import createOrdinal from '../main/ordinal';

const scale = createOrdinal({
  domain: ['苹果', '香蕉', '梨', '西瓜'],
  range: ['red', 'yellow', 'green'],
});

describe('序列比例尺', () => {
  it('序列比例尺应该正常显示映射结果', () => {
    expect(scale('苹果')).toBe('red'); // 'red'
    expect(scale('香蕉')).toBe('yellow'); // 'yellow'
    expect(scale('梨')).toBe('green'); // 'green'
    expect(scale('西瓜')).toBe('red'); // 'red'
  });
});
