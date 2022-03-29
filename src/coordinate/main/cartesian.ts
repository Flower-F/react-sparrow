// 笛卡尔坐标系变换

import { curry } from '../utils';
import { scale, translate } from './transform';

function coordinate(
  _transformOptions: any,
  canvasOptions: { x: number; y: number; width: number; height: number },
) {
  const { x, y, width, height } = canvasOptions;
  return [scale(width, height), translate(x, y)];
}

const cartesian = curry(coordinate);

export default cartesian;
