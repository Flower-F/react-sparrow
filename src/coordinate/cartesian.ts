import { scale, translate } from './transform';

function coordinate(
  _transformOptions: any,
  canvasOptions: { x: number; y: number; width: number; height: number },
) {
  const { x, y, width, height } = canvasOptions;
  return [scale(width, height), translate(x, y)];
}

export const cartesian = curry(coordinate);
