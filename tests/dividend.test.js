import {
  calculateDividend,
  getFinalEmodFactor,
} from '../src/js/components/dividend.js';

test('calculateDividend calculates correctly and returns value', () => {
  const auditedPremium = 10000;
  const dividendFactor = 5;
  const emodFactor = 0.975;
  const expected = 1250;
  expect(calculateDividend(auditedPremium, dividendFactor, emodFactor)).toEqual(
    expected
  );
});

test('calculateDividend calculates correctly with only auditedPremium', () => {
  const auditedPremium = 10000;
  const dividendFactor = 0;
  const emodFactor = 0;
  const expected = 0;
  expect(calculateDividend(auditedPremium, dividendFactor, emodFactor)).toEqual(
    expected
  );
});

test('getFinalEmodFactor returns 0.025... when emod is 0.975', () => {
  expect(getFinalEmodFactor(0.975)).toEqual(0.025000000000000022);
});

test('getFinalEmodFactor returns 0.3 when emod is 0.6', () => {
  expect(getFinalEmodFactor(0.6)).toEqual(0.3);
});
