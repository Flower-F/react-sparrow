import { FC } from 'react';
import { getNormalTransformStyles, TransformStyles } from './config';

export interface ICircleProps {
  cx: number;
  cy: number;
  r: number;
  transformStyles?: TransformStyles;
}

const Circle: FC<ICircleProps> = ({ cx, cy, r, transformStyles }) => {
  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <circle cx={cx} cy={cy} r={r} />
    </g>
  );
};

Circle.displayName = 'Circle';

export default Circle;
