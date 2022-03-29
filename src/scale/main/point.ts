// Point 比例尺

import createBand from './band';

export default function createPoint(options: {
  domain: string[];
  range: number[];
}) {
  return createBand({ ...options, padding: 1 });
}
