import domGenerator from "dom-generator";
import "./index.scss";

import setRandomBackgroundColor from "./RGBcreatore";

/**
 * Generates a button that changes the background color of the body to a random RGB color when clicked.
 * @returns {void}
 */
function createColors() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "buttonRGB" },
    eventListeners: { click: createColor },
  });
  /**
   * Sets a random background color for the body when the button is clicked.
   * @returns {void}
   */
  function createColor() {
    setRandomBackgroundColor();
  }

  document.body.append(button);
}
export default createColors;
