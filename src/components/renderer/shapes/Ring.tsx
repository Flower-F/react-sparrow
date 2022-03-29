import { FC } from 'react';
import { ICommonProps } from './config';
import { getNormalTransformStyles } from './config/transform';

const DEFAULT_STROKE_WIDTH = 1;

export interface IRingProps {
  cx: number;
  cy: number;
  r1: number;
  r2: number;
  stroke: string;
  strokeWidth: number;
  fill?: string;
}

const Ring: FC<IRingProps & ICommonProps> = ({
  cx,
  cy,
  r1,
  r2,
  stroke,
  strokeWidth,
  fill,
  transformStyles,
}) => {
  // 分别计算三个圆的参数
  const innerStyle = {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  };

  const ringStyle = {
    strokeWidth: r2 - r1 - (strokeWidth || DEFAULT_STROKE_WIDTH),
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  };

  const outerStyle = {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  };

  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <circle {...innerStyle} />
      <circle {...ringStyle} />
      <circle {...outerStyle} />
    </g>
  );
};

Ring.displayName = 'Ring';

export default Ring;
