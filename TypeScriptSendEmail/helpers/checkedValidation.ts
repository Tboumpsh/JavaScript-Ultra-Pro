/**
 * Marks the input as successful.
 *
 * This function sets the CSS class of the provided input element to "checked",
 * indicating that the input has passed validation or completed successfully.
 *
 * @function success
 * @param {HTMLElement} input - The input element to be marked as successful.
 * @returns {void}
 */

function success(input: any): void {
  input.setAttribute("class", "checked");
}
export default success