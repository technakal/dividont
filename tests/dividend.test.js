import dividend, { div, emod } from '../src/service/dividend';

describe('dividend calculations', () => {
  test('div calculates correctly and returns value', () => {
    const auditedPremium = 10000;
    const dividendFactor = 5;
    const emodFactor = 0.975;
    const expected = 1250;
    expect(div(auditedPremium, dividendFactor, emodFactor)).toEqual(expected);
  });
  test('div calculates correctly with only auditedPremium', () => {
    const auditedPremium = 10000;
    const dividendFactor = 0;
    const emodFactor = 0;
    const expected = 0;
    expect(div(auditedPremium, dividendFactor, emodFactor)).toEqual(expected);
  });
  test('div calculates correctly with surcharge exceptions', () => {
    const auditedPremium = 10000;
    const dividendFactor = 5;
    const emodFactor = 0.975;
    const surcharges = -117;
    const expected = 1265;
    expect(div(auditedPremium, dividendFactor, emodFactor, surcharges)).toEqual(
      expected
    );
  });
  test('emod returns 0.025 when emod is 0.975', () => {
    expect(emod(0.975)).toEqual(0.025);
  });
  test('emod returns 0.3 when emod is 0.6', () => {
    expect(emod(0.6)).toEqual(0.3);
  });
  test("dividend returns null when required information isn't available", () => {
    const f = {
      premium: 10000,
      divFactor: 5,
    };
    expect(dividend(f)).toBe(null);
  });
  test('dividend returns dividend amount when form is valid', () => {
    const f = {
      premium: 10000,
      divFactor: 5,
      emodFactor: 0.975,
      surcharges: [{ 1: -100 }, { 2: -20 }, { 3: 3 }],
    };
    const expected = 1265;
    expect(dividend(f)).toEqual(expected);
  });
});
