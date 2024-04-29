import domGenerator from "dom-generator";
import "./index.scss";

function createColors() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "button" },
    eventListeners: { click: createColor },
  });

  function createColor() {}

  document.body.append(button);
}
export default createColors