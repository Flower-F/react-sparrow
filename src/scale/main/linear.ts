// 线性比例尺
// y = a * x + b

import { ceil, floor, nice, normalize, ticks, tickStep } from './utils';

interface ILinear {
  domain: number[];
  range: number[];
  interpolate?: typeof interpolateNumber;
}

export default function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}: ILinear) {
  const scale = (x: number) => {
    const t = normalize(x, d0, d1);
    return interpolate(t, r0, r1);
  };

  scale.ticks = (tickCount: number) => ticks(d0, d1, tickCount);
  scale.nice = (tickCount: number) => {
    const step = tickStep(d0, d1, tickCount);
    [d0, d1] = nice([d0, d1], {
      floor: (x) => floor(x, step),
      ceil: (x) => ceil(x, step),
    });
  };

  return scale;
}

// 数值线性插值
export function interpolateNumber(t: number, start: number, stop: number) {
  return start * (1 - t) + stop * t;
}
