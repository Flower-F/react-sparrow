import { curry } from '../utils';
import { reflectX, translate, transpose as transposeT } from './transform';

// eslint-disable-next-line no-unused-vars
function coordinate(_transformOptions: any, _canvasOptions: any) {
  return [transposeT(), translate(-0.5, -0.5), reflectX(), translate(0.5, 0.5)];
}

const transpose = curry(coordinate);

export default transpose;
