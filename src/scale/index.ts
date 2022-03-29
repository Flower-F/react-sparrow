import createBand from './main/band';
import createIdentity from './main/identity';
import createLinear from './main/linear';
import createLog from './main/log';
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
  createLog,
};

export default scales;
