import _ from 'lodash';
import { add, all, min, reduce, values } from 'ramda';
import isValue from '@util/isValue';

export const emod = e => _.round(min(1 - e, 0.3), 3);

export const div = (premium, divFactor, _emod, surcharges = 0) =>
  _.round(divFactor * emod(_emod) * (premium - surcharges), 0);

export const totalSurcharges = reduce((a, c) => add(a, values(c)), 0);

export default f => {
  const { premium, divFactor, emod, surcharges = [] } = f;
  return all(isValue, [premium, divFactor, emod])
    ? div(premium, divFactor, emod, totalSurcharges(surcharges))
    : null;
};
