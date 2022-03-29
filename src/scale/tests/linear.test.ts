import { ceil, floor, nice, ticks, tickStep } from '../utils';

let d0 = 0.1;
let d1 = 9.9;

const TICK_COUNT = 6;

describe('线性比例尺', () => {
  it('线性比例尺的输入输出应该按设置的比例缩放', () => {
    const step = tickStep(d0, d1, TICK_COUNT);

    [d0, d1] = nice([0.1, 9.9], {
      floor: (x) => floor(x, step),
      ceil: (x) => ceil(x, step),
    });

    expect(d0).toBe(0);
    expect(d1).toBe(10);

    expect(ticks(d0, d1, TICK_COUNT)).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
