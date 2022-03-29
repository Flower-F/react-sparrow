import createTime from '../main/time';

const scale = createTime({
  domain: [new Date(2000, 0, 1), new Date(2000, 0, 2)],
  range: [0, 960],
});

describe('地图比例尺', () => {
  it('地图比例尺的输入输出应该按设置的比例缩放', () => {
    expect(scale(new Date(2000, 0, 1, 5))).toBe(200); // 200
    expect(scale(new Date(2000, 0, 1, 16))).toBe(640); // 640
    expect(scale(new Date(2000, 0, 2))).toBe(960); // 960
  });
});
