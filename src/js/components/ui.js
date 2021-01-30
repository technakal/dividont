/**
 * Replaces an element using the elemId with the updatedElem.
 * @param {string} formElemId The id of the element to be replaced.
 * @param {string} updatedElem Template literal describing the replacement element.
 */
export var replaceElement = function (elemId, updatedElem) {
    return (document.querySelector("#" + elemId).innerHTML = updatedElem);
};
/**
 * Updates the output display to show the new text.
 * @param {string} displayId The id of the display item to update
 * @param {string} newText The new text value to dispaly on the output display
 */
export var updateOutputDisplay = function (displayId, newText) {
    var display = document.querySelector("#" + displayId);
    var scale = 1.0;
    if (Number(newText) > 10000)
        scale = 1.35;
    if (Number(newText) < 1000)
        scale = 0.65;
    applyRandomTransform(display, scale);
    return (display.textContent = "$" + newText);
};
export var applyRandomTransform = function (elem, scale) {
    if (scale === void 0) { scale = 1; }
    var signs = ['', '-'];
    var randVal = Math.floor(Math.random() * 10 + 1);
    var randSign = signs[Math.floor(Math.random() * 2)];
    return elem.setAttribute('style', "transform: rotate(" + randSign + randVal + "deg) scale(" + scale + ")");
};
/**
 * Adds the specified string to the `class` attribute of the element.
 * @param {HTMLElement} elem The HTMLElement to which the new class should be added.
 * @param {string} className The name of the class to add to the element.
 * @returns Updated element.
 */
export var addClass = function (elem, className) {
    elem.classList.add(className);
    return elem;
};
/**
 * Removes the specified string from the `class` attribute of the element.
 * @param {HTMLElement} elem The HTMLElement from which the class should be removed.
 * @param {string} className The name of the class to remove from the element.
 * @returns Updated element.
 */
export var removeClass = function (elem, className) {
    try {
        elem.classList.remove(className);
    }
    catch (err) {
        console.error(err);
    }
    return elem;
};
