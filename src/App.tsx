import Circle from './components/shapes/Circle';
import Rect from './components/shapes/Rect';
import ViewBox from './containers/ViewBox';

function App() {
  return (
    <div>
      <ViewBox x={0} y={0} width={600} height={400}>
        <Rect
          width={50}
          height={50}
          x={0}
          y={0}
          transformStyles={{ translate: [200, 100], scale: [2, 3], rotate: 60 }}
        />

        <Circle cx={60} cy={60} r={30} />
      </ViewBox>
    </div>
  );
}

export default App;
