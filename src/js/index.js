import * as ui from './components/ui.js';
import * as surcharge from './components/surcharge.js';
import * as div from './components/dividend.js';
var addSurchargeField = function (e) {
    e.preventDefault();
    var surchargeCount = surchargeContainer.querySelectorAll('input').length;
    var updatedInputs = surcharge.createSurchargeFields(surchargeContainer, surchargeCount);
    ui.replaceElement('surcharges', updatedInputs);
    surcharge.addSurchargeEventHandlers(surchargeContainer, updateDividend, surcharge.deleteSurchargeField);
    document.querySelector("#surcharge-" + surchargeCount).select();
    ui.applyRandomTransform(document.querySelector('#display--dividend'));
};
var getInputValues = function () {
    var surchargeContainer = document.querySelector('#surcharges');
    var surcharges = surchargeContainer.querySelectorAll('input');
    return {
        auditedPremium: document.querySelector('#audited-premium').value || 0,
        dividendFactor: document.querySelector('#dividend-factor').value || 0,
        emodFactor: document.querySelector('#emod-factor').value || 0,
        surchargeTotal: surcharge.getSurchargeTotal(surcharges),
    };
};
var updateDividend = function () {
    var _a = getInputValues(), auditedPremium = _a.auditedPremium, dividendFactor = _a.dividendFactor, emodFactor = _a.emodFactor, surchargeTotal = _a.surchargeTotal;
    ui.updateOutputDisplay('display--dividend', div.calculateDividend(auditedPremium, dividendFactor, emodFactor, surchargeTotal));
};
var addSurchargeElem = document.querySelector('#add-surcharge');
var surchargeContainer = document.querySelector('#surcharges');
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.addEventListener('blur', updateDividend);
    input.addEventListener('click', function (e) { return e.target.select(); });
});
addSurchargeElem.addEventListener('click', function (e) { return addSurchargeField(e); });
