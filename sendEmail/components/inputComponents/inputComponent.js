import domGenerator from "dom-generator";
import "./index.scss";

function inputGenerator({
  inputId = "",
  inputClass = "",
  placeholder = "",
  type = "text",
  disabled,
  eventListeners = {},
  fontSize = "medium",
  size = "medium",
  statues = "mainInput",
}) {
  let input = domGenerator({
    tag: "input",
    attributes: {
      id: inputId,
      class: `inputStyles  ${inputClass}`,
      placeholder: placeholder,
    },
    dataAttributes: { size: size, status: statues, fontSize: fontSize },
    eventListeners,
  });
  input.type = type ?? "text";

  if (disabled) {
    button.disabled = true;
  }

  return input;
}
export default inputGenerator;
