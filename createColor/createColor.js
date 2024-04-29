import domGenerator from "dom-generator";
import "./index.scss";

import setRandomBackgroundColor from "./RGBcreatore";

function createColors() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "buttonRGB" },
    eventListeners: { click: createColor },
  });

  function createColor() {
    setRandomBackgroundColor();
  }

  document.body.append(button);
}
export default createColors;
