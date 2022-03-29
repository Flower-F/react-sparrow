import createBand from './main/band';
import createIdentity from './main/identity';
import createLinear from './main/linear';
import createOrdinal from './main/ordinal';
import createPoint from './main/point';
import createQuantile from './main/quantile';
import createQuantize from './main/quantize';
import createThreshold from './main/threshold';
import createTime from './main/time';

const scales = {
  createLinear,
  createIdentity,
  createOrdinal,
  createBand,
  createPoint,
  createQuantize,
  createThreshold,
  createTime,
  createQuantile,
};
// export    from './identity';
// export    from './ordinal';
// export {  } from './band';
// export {  } from './point';
// export { createQuantile } from './quantile';
// export {  } from './threshold';
// export {  } from './quantize';
// export {  } from './time';
// export { createLog } from './log';

export default scales;
