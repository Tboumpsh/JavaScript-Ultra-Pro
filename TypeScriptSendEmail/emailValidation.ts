import success from "./helpers/checkedValidation";
import failed from "./helpers/failedValidation";

function emailValidation(input: any): void {
  if (input.value.includes("@") && input.value.indexOf(".") !== -1 && input.value.indexOf("com") !== -1) {
    success(input);
  } else {
    failed(input);
  }
}

export default emailValidation;
