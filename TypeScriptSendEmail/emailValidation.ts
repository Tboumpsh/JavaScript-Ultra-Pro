import success from "./helpers/checkedValidation";
import failed from "./helpers/failedValidation";

/**
 * Validates an email input and updates its status.
 *
 * This function checks whether the provided input element's value meets basic email format criteria.
 * Specifically, it verifies that the value contains an "@" symbol, a dot ("."),
 * and the substring "com". If the value meets these criteria, the function calls
 * the `success` function with the input as the argument. Otherwise, it calls the `failed` function with the input as the argument.
 *
 * @function emailValidation
 * @param {HTMLInputElement} input - The input element to be validated.
 * @returns {void}
 */

function emailValidation(input: any): void {
  if (
    input.value.includes("@") &&
    input.value.indexOf(".") !== -1 &&
    input.value.indexOf("com") !== -1
  ) {
    success(input);
  } else {
    failed(input);
  }
}

export default emailValidation;
