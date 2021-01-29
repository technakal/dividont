import { curry } from 'ramda';
import flyd from 'flyd';

export const INITIAL_STATE = {
  form: {},
  errors: {},
  dividend: null,
};

const _s$ = flyd.stream(INITIAL_STATE);
export const State = curry((prop, value) => _s$({ ..._s$(), [prop]: value }));

export default _s$;
