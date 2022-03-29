import { FC } from 'react';
import { ICommonProps } from './config';
import { getNormalTransformStyles } from './config/transform';

export interface IRectProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

// rect 不支持 width 和 height 是负数，下面这种情况将绘制不出来
// <rect width="-60" height="-60" x="100" y="100" /> ❌
// 为了使其支持负数的 width 和 height，我们转换成如下的形式
// <rect width="60" height="60" x="40" y="40" /> ✅

function normalizeReactProps(
  width: number,
  height: number,
  x: number,
  y: number,
) {
  return {
    normalWidth: Math.abs(width),
    normalHeight: Math.abs(height),
    normalX: width > 0 ? x : x + width,
    normalY: height > 0 ? y : y + height,
  };
}

const Rect: FC<IRectProps & ICommonProps> = ({
  width,
  height,
  x,
  y,
  transformStyles,
}) => {
  const { normalHeight, normalWidth, normalX, normalY } = normalizeReactProps(
    width,
    height,
    x,
    y,
  );

  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <rect width={normalWidth} height={normalHeight} x={normalX} y={normalY} />
    </g>
  );
};

Rect.displayName = 'Rect';

export default Rect;
