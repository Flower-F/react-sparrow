// 按照比例缩放到尺子
export function normalize(value: number, start: number, stop: number) {
  return (value - start) / (stop - start);
}
