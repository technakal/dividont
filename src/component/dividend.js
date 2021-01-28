import { min } from 'ramda';
import _ from 'lodash';

export const calculateDividend = (aud, div, emod, sur = 0) =>
  _.round(div * emodFactor(emod) * (aud - sur), 0);

export const emodFactor = e => _.round(min(1 - e, 0.3), 3);
