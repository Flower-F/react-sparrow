import createOrdinal from './ordinal';
import { band } from './utils';

export function createBand(options: {
  domain: string[];
  range: number[];
  padding: number;
}) {
  const { bandRange, bandWidth, step } = band(options);
  const scale = createOrdinal({ ...options, range: bandRange });

  // @ts-ignore
  scale.bandWidth = () => bandWidth;
  // @ts-ignore
  scale.step = () => step;

  // 除了需要通过 Band 比例尺获得条的位置
  // 还需要获得条的 BandWidth 和 Step
  return scale;
}
