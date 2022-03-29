// 线性比例尺
// y = a * x + b

import { normalize } from './utils';

interface ILinear {
  domain: [number, number];
  range: [number, number];
}

export default function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
}: ILinear) {
  return (x: number) => {
    const t = normalize(x, d0, d1);
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return interpolateNumber(t, r0, r1);
  };
}

// 线性插值
export function interpolateNumber(t: number, start: number, stop: number) {
  return start * (1 - t) + stop * t;
}
