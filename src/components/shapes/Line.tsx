import { FC } from 'react';
import { getNormalTransformStyles, TransformStyles } from './config';

export interface ILineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  transformStyles?: TransformStyles;
}

const Line: FC<ILineProps> = ({ x1, x2, y1, y2, transformStyles }) => {
  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <line x1={x1} x2={x2} y1={y1} y2={y2} />
    </g>
  );
};

Line.displayName = 'Line';

export default Line;
