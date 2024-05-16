import success from "./helpers/checkedValidation";
import failed from "./helpers/failedValidation";

// check length
function checkLength(input: any): void {
  if (input.value.length > 0) {
    success(input);
  } else {
    failed(input);
  }
}

export default checkLength;
