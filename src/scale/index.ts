import createBand from './band';
import createIdentity from './identity';
import createLinear from './linear';
import createOrdinal from './ordinal';
import createPoint from './point';
import createQuantize from './quantize';
import createThreshold from './threshold';
import createTime from './time';

const scales = {
  createLinear,
  createIdentity,
  createOrdinal,
  createBand,
  createPoint,
  createQuantize,
  createThreshold,
  createTime,
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
