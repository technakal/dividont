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
  test('State does not override unsupplied values', () => {
    _s$({
      ...INITIAL_STATE,
      form: { premium: 500, emod: 0.975, divFactor: 5 },
    });
    const expectedDividend = 10000;
    const expectedPremium = 15000;
    const expectedState = {
      ...INITIAL_STATE,
      form: { premium: expectedPremium, emod: 0.975, divFactor: 5 },
      dividend: expectedDividend,
    };
    State('dividend', expectedDividend);
    State('form', { ..._s$().form, premium: expectedPremium });
    expect(_s$()).toEqual(expectedState);
  });
});
