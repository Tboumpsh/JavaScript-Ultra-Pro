import domGenerator from "dom-generator";
import "./index.scss";

import fixedColor from "./fixedColor";

/**
 * Generates a button that changes the background color of the body when clicked.
 * @returns {void}
 */
function changeColor() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "button" },
    eventListeners: { click: changeColors },
  });
  /**
   * Changes the background color of the body to black or red.
   * @returns {void}
   */
  function changeColors() {
    fixedColor("black", "red");
  }

  document.body.append(button);
}

export default changeColor;
