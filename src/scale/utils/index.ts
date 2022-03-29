// 按照比例缩放
export function normalize(value: number, start: number, stop: number) {
  return (value - start) / (stop - start);
}

// 对于 Linear 比例尺来说
// 合适的刻度间隔应该是 10 为底指数乘上 1 或者 2 或者 5 的结果
// 也就是说希望 step = 10 ^ n * (1 | 2 | 5)
// 该函数来源于 d3-array
export function tickStep(min: number, max: number, count: number) {
  const e10 = Math.sqrt(50); // 7.07
  const e5 = Math.sqrt(10); // 3.16
  const e2 = Math.sqrt(2); // 1.41

  // 获得目标间隔 step0，设 step0 = 10 ^ m
  const step0 = Math.abs(max - min) / Math.max(0, count);
  // 获得 step1 的初始值 = 10 ^ n < step0，其中 n 为满足条件的最大整数
  let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
  // 计算 step1 和 step0 的误差，error = 10 ^ m / 10 ^ n = 10 ^ (m - n)
  const error = step0 / step1;
  // 根据当前的误差改变 step1 的值，从而减少误差
  // 1. 当 m - n >= 0.85 = log(e10) 的时候，step1 * 10
  // 可以减少log(10) = 1 的误差
  if (error >= e10) step1 *= 10;
  // 2. 当 0.85 > m - n >= 0.5 = log(e5) 的时候，step1 * 5
  // 可以减少 log(5) = 0.7 的误差
  else if (error >= e5) step1 *= 5;
  // 3. 当 0.5 > m - n >= 0.15 = log(e2) 的时候，step1 * 2
  // 那么可以减少 log(2) = 0.3 的误差
  else if (error >= e2) step1 *= 2;
  // 4. 当 0.15 > m - n > 0 的时候，step1 * 1
  return step1;
}

// 修改值域的间隔为整数，加强可读性
export function ticks(min: number, max: number, count: number) {
  const step = tickStep(min, max, count);
  const start = Math.ceil(min / step);
  const stop = Math.floor(max / step);
  const n = Math.ceil(stop - start + 1);
  // n 不一定等于 count，所以生成的 ticks 的数量可能和指定的不一样
  const values = new Array(n);
  for (let i = 0; i < n; i += 1) {
    values[i] = round((start + i) * step);
  }
  return values;
}

// 简单解决 js 的精度问题：0.1 + 0.2 !== 0.3
export function round(n: number) {
  return Math.round(n * 1e12) / 1e12;
}

// 修改定义域的间隔为整数，加强可读性
export function nice(
  domain: number[],
  interval: {
    floor: (arg: number) => number;
    ceil: (arg: number) => number;
  },
) {
  const [min, max] = domain;
  return [interval.floor(min), interval.ceil(max)];
}

export function ceil(n: number, base: number) {
  return base * Math.ceil(n / base);
}

export function floor(n: number, base: number) {
  return base * Math.floor(n / base);
}

export function band({
  domain,
  range,
  padding,
}: {
  domain: string[];
  range: number[];
  padding: number;
}) {
  const [r0, r1] = range;
  const n = domain.length;
  const step = (r1 - r0) / (n + padding);
  const bandWidth = step * (1 - padding);
  const interval = step - bandWidth;
  const x = (_: any, i: number) => r0 + interval + step * i;
  return {
    step,
    bandWidth,
    bandRange: new Array(n).fill(0).map(x),
  };
}

export function log(n: number, base: number) {
  return Math.log(n) / Math.log(base);
}
