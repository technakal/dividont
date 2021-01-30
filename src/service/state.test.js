import _s$, { INITIAL_STATE, State } from '@service/state';

describe('state', () => {
  beforeEach(() => {
    _s$(INITIAL_STATE);
  });
  test('_s$ returns the flyd state', () => {
    expect(_s$()).toEqual(INITIAL_STATE);
  });
  test('State overrides supplied state values', () => {
    const expected = 10000;
    const expectedState = { ...INITIAL_STATE, dividend: expected };
    State('dividend', expected);
    expect(_s$().dividend).toEqual(expected);
    expect(_s$()).toEqual(expectedState);
  });
});
