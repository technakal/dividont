import {
  replaceElement,
  addClass,
  removeClass,
  updateOutputDisplay,
} from './components/ui.js';

import {
  createSurchargeFields,
  addSurchargeEventHandlers,
  deleteSurchargeField,
  getSurchargeTotal,
} from './components/surcharge.js';

import { calculateDividend } from './components/dividend.js';

const addSurchargeField = e => {
  e.preventDefault();
  const surchargeCount = surchargeContainer.querySelectorAll('input').length;
  let updatedInputs = createSurchargeFields(surchargeContainer, surchargeCount);
  replaceElement('surcharges', updatedInputs);
  addSurchargeEventHandlers(
    surchargeContainer,
    updateDividend,
    deleteSurchargeField
  );
};

const getInputValues = () => {
  const surchargeContainer = document.querySelector('#surcharges');
  const surcharges = surchargeContainer.querySelectorAll('input');
  return {
    auditedPremium: document.querySelector('#audited-premium').value || 0,
    dividendFactor: document.querySelector('#dividend-factor').value || 0,
    emodFactor: document.querySelector('#emod-factor').value || 0,
    surchargeTotal: getSurchargeTotal(surcharges),
  };
};

const updateDividend = () => {
  const {
    auditedPremium,
    dividendFactor,
    emodFactor,
    surchargeTotal,
  } = getInputValues();
  updateOutputDisplay(
    'display--dividend',
    calculateDividend(
      auditedPremium,
      dividendFactor,
      emodFactor,
      surchargeTotal
    )
  );
};
const addSurchargeElem = document.querySelector('#add-surcharge');
const surchargeContainer = document.querySelector('#surcharges');
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('blur', updateDividend);
  input.addEventListener('click', e => e.target.select());
});

addSurchargeElem.addEventListener('click', e => addSurchargeField(e));
