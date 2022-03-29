import { Children, cloneElement, FC, FunctionComponentElement } from 'react';
import { ICircleProps } from '../components/shapes/Circle';
import { ILineProps } from '../components/shapes/Line';
import { IRectProps } from '../components/shapes/Rect';
import { IRingProps } from '../components/shapes/Ring';
import { ITextProps } from '../components/shapes/Text';

interface IViewBoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

type ShapeProps =
  | ITextProps
  | ICircleProps
  | IRectProps
  | IRingProps
  | ILineProps;

const ViewBox: FC<IViewBoxProps> = (props) => {
  const { x, y, width, height, children } = props;

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElem = child as FunctionComponentElement<ShapeProps>;
      const { displayName } = childElem.type;

      if (
        displayName === 'Text' ||
        displayName === 'Circle' ||
        displayName === 'Ring' ||
        displayName === 'Line' ||
        displayName === 'Rect'
      ) {
        return cloneElement(childElem);
      } else {
        console.error(
          'Error: The children of ViewBox can only be Shape Components',
        );
      }
    });
  };

  return (
    <svg
      viewBox={`${x} ${y} ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderChildren()}
    </svg>
  );
};

export default ViewBox;
