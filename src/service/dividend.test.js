import dividend, { div, emod, totalSurcharges } from '@service/dividend';

describe('dividend calculations', () => {
  test('div calculates correctly and returns value', () => {
    const auditedPremium = 10000;
    const dividendFactor = 5;
    const _emod = 0.975;
    const expected = 1250;
    expect(div(auditedPremium, dividendFactor, _emod)).toEqual(expected);
  });
  test('div calculates correctly with only auditedPremium', () => {
    const auditedPremium = 10000;
    const dividendFactor = 0;
    const _emod = 0;
    const expected = 0;
    expect(div(auditedPremium, dividendFactor, _emod)).toEqual(expected);
  });
  test('div calculates correctly with surcharge exceptions', () => {
    const auditedPremium = 10000;
    const dividendFactor = 5;
    const _emod = 0.975;
    const surcharges = -117;
    const expected = 1265;
    expect(div(auditedPremium, dividendFactor, _emod, surcharges)).toEqual(
      expected
    );
  });
  test('emod returns 0.025 when emod is 0.975', () => {
    expect(emod(0.975)).toEqual(0.025);
  });
  test('emod returns 0.3 when emod is 0.6', () => {
    expect(emod(0.6)).toEqual(0.3);
  });
  test('totalSurcharges returns 0 for no inputs', () => {
    expect(totalSurcharges([])).toEqual(0);
  });
  test('totalSurcharges returns sum of all surcharge values', () => {
    const expected = -117;
    expect(totalSurcharges([{ 1: -100 }, { 2: -20 }, { 3: 3 }])).toEqual(
      expected
    );
  });
  test("dividend returns null when required information isn't available", () => {
    const f = {
      premium: 10000,
      divFactor: 5,
    };
    expect(dividend(f)).toBe(null);
  });
  test('dividend returns amount when form is valid', () => {
    const f = {
      premium: 10000,
      divFactor: 5,
      emod: 0.975,
      surcharges: [{ 1: -100 }, { 2: -20 }, { 3: 3 }],
    };
    const expected = 1265;
    expect(dividend(f)).toEqual(expected);
  });
});
