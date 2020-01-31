/**
 * Replaces an element using the elemId with the updatedElem.
 * @param {string} formElemId The id of the element to be replaced.
 * @param {string} updatedElem Template literal describing the replacement element.
 */
const replaceElement = (elemId, updatedElem) => {
  return (document.querySelector(`#${elemId}`).innerHTML = updatedElem);
};

/**
 * Updates the output display to show the new text.
 * @param {string} displayId The id of the display item to update
 * @param {string} newText The new text value to dispaly on the output display
 */
const updateOutputDisplay = (displayId, newText) => {
  return (document.querySelector(`#${displayId}`).textContent = newText);
};

/**
 * Adds the specified string to the `class` attribute of the element.
 * @param {HTMLElement} elem The HTMLElement to which the new class should be added.
 * @param {string} className The name of the class to add to the element.
 * @returns Updated element.
 */
const addClass = (elem, className) => {
  elem.classList.add(className);
  return elem;
};

/**
 * Removes the specified string from the `class` attribute of the element.
 * @param {HTMLElement} elem The HTMLElement from which the class should be removed.
 * @param {string} className The name of the class to remove from the element.
 * @returns Updated element.
 */
const removeClass = (elem, className) => {
  try {
    elem.classList.remove(className);
  } catch (err) {
    console.error(err);
  }
  return elem;
};

export { replaceElement, updateOutputDisplay, addClass, removeClass };
