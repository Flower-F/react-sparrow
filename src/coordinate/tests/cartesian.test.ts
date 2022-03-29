import cartesian from '../main/cartesian';
import { compose } from '../utils';

describe('Cartesian', () => {
  it('笛卡尔坐标系变化', () => {
    const canvasOptions = {
      x: 0,
      y: 0,
      width: 600,
      height: 400,
    };

    // cartesian 不需要 transformOptions
    const transforms = cartesian(undefined, canvasOptions);
    // 合成一个函数
    const map = compose(...transforms);

    expect(map([0, 0])).toEqual([0, 0]); // [0, 0]
    expect(map([0.5, 0.5])).toEqual([300, 200]); // [300, 200]
    expect(map([1, 1])).toEqual([600, 400]); // [600, 400]
  });
});
