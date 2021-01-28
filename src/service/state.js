import { curry } from 'ramda';

export default {
  state: {},
  State: curry((prop, value) => (state[prop] = value)),
};
