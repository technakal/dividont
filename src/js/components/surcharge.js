/**
 * Creates a new surcharge field.
 * @param {HTMLElement} container The container in which the surcharge fields live.
 * @param {number} surchargeCount The number of surcharge fields already in existence.
 * @returns Template literal with the surcharge fields.
 */
export var createSurchargeFields = function (container, surchargeCount) {
    if (surchargeCount === void 0) { surchargeCount = 0; }
    var updatedInputs = replicateSurchargeValues(container)
        .map(function (item) {
        return "<input type=\"number\" step=\"any\" id=\"" + item.id + "\" name=\"surcharge\" value=\"" + item.value + "\"/><a id=\"" + item.id + "-delete\" class=\"btn btn__round btn__delete\" data-input=\"" + item.id + "\">\u00D7</a>";
    })
        .join('');
    return (updatedInputs += "<input type=\"number\" step=\"any\" id=\"surcharge-" + surchargeCount + "\" name=\"surcharge\" value=\"0\"/><a id=\"surcharge-" + surchargeCount + "-delete\" class=\"btn btn__round btn__delete\" data-input=\"surcharge-" + surchargeCount + "\">\u00D7</a>");
};
/**
 * Retrieves the surcharge values of each surcharge field.
 * Used later to create new instances of each field.
 * @param {HTMLElement} container The container in which the surcharge fields live.
 * @returns Array of objects with the ids and values of all existing surcharge fields.
 */
export var replicateSurchargeValues = function (container) {
    var surchargeFields = container.querySelectorAll('input');
    var currentValues = [];
    surchargeFields.forEach(function (field) {
        return currentValues.push({
            id: field.id,
            value: field.value,
        });
    });
    return currentValues;
};
/**
 * Makes sure the surcharge fields perform the necessary actions.
 * @param {HTMLElement} container Adds event handlers to all surcharge fields.
 */
export var addSurchargeEventHandlers = function (container, calculateFn, deleteFn) {
    container.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('click', function (e) { return e.target.select(); });
        input.addEventListener('blur', function (e) { return calculateFn(e); });
    });
    container
        .querySelectorAll('a')
        .forEach(function (button) {
        return button.addEventListener('click', function (e) { return deleteFn(e, calculateFn); });
    });
};
export var deleteSurchargeField = function (e, calculateFn) {
    document.querySelector("#" + e.target.dataset.input).remove();
    e.target.remove();
    return calculateFn();
};
export var getSurchargeTotal = function (surcharges) {
    var total = 0;
    surcharges.forEach(function (surcharge) { return (total += Number(surcharge.value)); });
    return total;
};
