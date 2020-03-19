/**
 * Calculates the dividend.
 * @param {number} auditedPremium The final audited premium value.
 * @param {number} dividendFactor The dividend factor. Should be a whole number.
 * @param {number} emodFactor The emod factor. Should be a decimal.
 * @param {number} surchargeTotal The total value of all surcharge exceptions.
 */
export const calculateDividend = (
  auditedPremium,
  dividendFactor,
  emodFactor,
  surchargeTotal = 0
) => {
  console.log(getFinalEmodFactor(emodFactor));
  console.log(dividendFactor * getFinalEmodFactor(emodFactor));
  console.log(auditedPremium - surchargeTotal);
  return Math.round(
    dividendFactor *
      getFinalEmodFactor(emodFactor) *
      (auditedPremium - surchargeTotal)
  );
};

/**
 * Returns the lesser of two numbers: 1 - the emod factor or 0.3.
 * @param {*} emodFactor
 * @returns The final emod factor, to use in the dividend calculation.
 */
export const getFinalEmodFactor = emodFactor =>
  1 - emodFactor <= 0.3 && 1 - emodFactor > 0 ? 1 - emodFactor : 0.3;
