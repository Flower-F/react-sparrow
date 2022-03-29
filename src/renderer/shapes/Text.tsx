import { FC } from 'react';
import { ICommonProps } from './config';
import { getNormalTransformStyles } from './config/transform';

export interface ITextProps {
  fontSize: number;
  x: number;
  y: number;
  content: string;
}

const Text: FC<ITextProps & ICommonProps> = ({
  fontSize,
  x,
  y,
  content,
  transformStyles,
}) => {
  return (
    <g transform={getNormalTransformStyles(transformStyles)}>
      <text x={x} y={y} fontSize={fontSize}>
        {content}
      </text>
    </g>
  );
};

Text.displayName = 'Text';

export default Text;
