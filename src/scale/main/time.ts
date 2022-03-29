// 时间比例尺
// Linear 比例尺要求定义域都是数字
// 但是有的时候我们希望定义域是浏览器的时间对象

// y = a * x.getTime() + b
import createLinear from './linear';

export default function createTime({
  domain,
  range,
}: {
  domain: Date[];
  range: number[];
}) {
  const transform = (x: Date) => x.getTime();
  const transformedDomain = domain.map(transform);
  const linear = createLinear({ domain: transformedDomain, range });
  const scale = (x: Date) => linear(transform(x));

  scale.nice = (tickCount: number) => linear.nice(tickCount);
  scale.ticks = (tickCount: number) =>
    linear.ticks(tickCount).map((d) => new Date(d));

  return scale;
}
