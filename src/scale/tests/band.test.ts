import { createBand } from '../band';

const options = {
  domain: ['苹果', '香蕉', '梨'],
  range: [0, 320], // 上图中 width 的范围
  padding: 0.2, // 控制条之间的间距，上图中的 padding
};

const scale = createBand(options);

describe('Band 比例尺', () => {
  it('Band 比例尺应该显示对应的映射数值', () => {
    scale('苹果'); // 20
    scale('香蕉'); // 120
    scale('梨'); // 220
    //@ts-ignore
    scale.bandWidth(); // 80
    //@ts-ignore
    scale.step(); // 100
  });
});
