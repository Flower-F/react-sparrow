import { FC } from 'react';
import { getNormalTransformStyles, TransformStyles } from './config';

export interface ITextProps {
  fontSize: number;
  x: number;
  y: number;
  content: string;
  transformStyles?: TransformStyles;
}

const Text: FC<ITextProps> = ({ fontSize, x, y, content, transformStyles }) => {
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
