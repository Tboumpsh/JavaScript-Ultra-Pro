/**
 * Marks the input as failed.
 *
 * This function sets the CSS class of the provided input element to "error",
 * indicating that the input has failed validation or encountered an error.
 *
 * @function failed
 * @param {HTMLElement} input - The input element to be marked as failed.
 * @returns {void}
 */

function failed(input: any): void {
    input.setAttribute("class", "error");
  }
  export default failed