import { and, converge, isEmpty, isNil, not, pipe } from 'ramda';

export default converge(and, [pipe(isNil, not), pipe(isEmpty, not)]);
