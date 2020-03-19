import * as ui from './components/ui.js';
import * as surcharge from './components/surcharge.js';
import * as div from './components/dividend.js';

const addSurchargeField = e => {
  e.preventDefault();
  const surchargeCount = surchargeContainer.querySelectorAll('input').length;
  let updatedInputs = surcharge.createSurchargeFields(
    surchargeContainer,
    surchargeCount
  );
  ui.replaceElement('surcharges', updatedInputs);
  surcharge.addSurchargeEventHandlers(
    surchargeContainer,
    updateDividend,
    surcharge.deleteSurchargeField
  );
  document.querySelector(`#surcharge-${surchargeCount}`).select();
  ui.applyRandomTransform(document.querySelector('#display--dividend'));
};

const getInputValues = () => {
  const surchargeContainer = document.querySelector('#surcharges');
  const surcharges = surchargeContainer.querySelectorAll('input');
  return {
    auditedPremium: document.querySelector('#audited-premium').value || 0,
    dividendFactor: document.querySelector('#dividend-factor').value || 0,
    emodFactor: document.querySelector('#emod-factor').value || 0,
    surchargeTotal: surcharge.getSurchargeTotal(surcharges),
  };
};

const updateDividend = () => {
  const {
    auditedPremium,
    dividendFactor,
    emodFactor,
    surchargeTotal,
  } = getInputValues();
  ui.updateOutputDisplay(
    'display--dividend',
    div.calculateDividend(
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
