import success from "./helpers/checkedValidation";
import failed from "./helpers/failedValidation";

/**
 * Validates the length of an input's value and updates its status.
 *
 * This function checks whether the value of the provided input element has a length greater than 0.
 * If the length is greater than 0, it calls the `success` function with the input as the argument.
 * Otherwise, it calls the `failed` function with the input as the argument.
 *
 * @function checkLength
 * @param {HTMLInputElement} input - The input element to be validated.
 * @returns {void}
 */

function checkLength(input: any): void {
  if (input.value.length > 0) {
    /**
     * Marks the input as successful.
     *
     * @param {HTMLInputElement} input - The input element to be marked as successful.
     * @returns {void}
     */
    success(input);
  } else {
    /**
     * Marks the input as failed.
     *
     * @param {HTMLInputElement} input - The input element to be marked as failed.
     * @returns {void}
     */
    failed(input);
  }
}

export default checkLength;
