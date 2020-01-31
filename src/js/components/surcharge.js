/**
 * Creates a new surcharge field.
 * @param {HTMLElement} container The container in which the surcharge fields live.
 * @param {number} surchargeCount The number of surcharge fields already in existence.
 * @returns Template literal with the surcharge fields.
 */
const createSurchargeFields = (container, surchargeCount = 0) => {
  let updatedInputs = replicateSurchargeValues(container)
    .map(
      item =>
        `<input type="number" step="any" id="${item.id}" name="surcharge" value="${item.value}"/><a id="${item.id}-delete" class="btn btn__round btn__delete" data-input="${item.id}">×</a>`
    )
    .join('');
  return (updatedInputs += `<input type="number" step="any" id="surcharge-${surchargeCount}" name="surcharge" value="0"/><a id="surcharge-${surchargeCount}-delete" class="btn btn__round btn__delete" data-input="surcharge-${surchargeCount}">×</a>`);
};

/**
 * Retrieves the surcharge values of each surcharge field.
 * Used later to create new instances of each field.
 * @param {HTMLElement} container The container in which the surcharge fields live.
 * @returns Array of objects with the ids and values of all existing surcharge fields.
 */
const replicateSurchargeValues = container => {
  const surchargeFields = container.querySelectorAll('input');
  const currentValues = [];
  surchargeFields.forEach(field =>
    currentValues.push({
      id: field.id,
      value: field.value,
    })
  );
  return currentValues;
};

/**
 * Makes sure the surcharge fields perform the necessary actions.
 * @param {HTMLElement} container Adds event handlers to all surcharge fields.
 */
const addSurchargeEventHandlers = (container, calculateFn, deleteFn) => {
  container.querySelectorAll('input').forEach(input => {
    input.addEventListener('click', e => e.target.select());
    input.addEventListener('blur', e => calculateFn(e));
  });
  container
    .querySelectorAll('a')
    .forEach(button =>
      button.addEventListener('click', e => deleteFn(e, calculateFn))
    );
};

const deleteSurchargeField = (e, calculateFn) => {
  document.querySelector(`#${e.target.dataset.input}`).remove();
  e.target.remove();
  return calculateFn();
};

const getSurchargeTotal = surcharges => {
  let total = 0;
  surcharges.forEach(surcharge => (total += Number(surcharge.value)));
  return total;
};

export {
  addSurchargeEventHandlers,
  createSurchargeFields,
  deleteSurchargeField,
  getSurchargeTotal,
  replicateSurchargeValues,
};
