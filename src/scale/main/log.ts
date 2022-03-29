import createLinear from './linear';
import { ticks, nice, log } from './utils';

export function createLog({
  domain,
  base = Math.E,
  range,
}: {
  domain: number[];
  range: number[];
  base: number;
}) {
  const transform = (x: number) => Math.log(x);
  let linear = createLinear({ domain: domain.map(transform), range });
  const scale = (x: number) => linear(transform(x));

  scale.ticks = (tickCount = 5) => {
    const [min, max] = domain.map((x) => log(x, base));
    return ticks(min, max, tickCount).map((x) => base ** x);
  };

  scale.nice = () => {
    domain = nice(domain, {
      floor: (x) => base ** Math.floor(log(x, base)),
      ceil: (x) => base ** Math.ceil(log(x, base)),
    });
    linear = createLinear({ domain: domain.map(transform), range });
  };

  return scale;
}
