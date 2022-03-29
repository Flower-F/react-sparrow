import { FC } from 'react';
import { ICommonProps } from './config';
import { getNormalTransformStyles } from './config/transform';

export interface ICircleProps {
  cx: number;
  cy: number;
  r: number;
}

const Circle: FC<ICircleProps & ICommonProps> = ({
  cx,
  cy,
  r,
  transformStyles,
}) => {
  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <circle cx={cx} cy={cy} r={r} />
    </g>
  );
};

Circle.displayName = 'Circle';

export default Circle;
