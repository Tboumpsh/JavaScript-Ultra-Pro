import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a button that changes the background color of the body in a cyclic order when clicked.
 * @returns {void}
 */
function changeColorOrder() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change color" },
    attributes: { id: "buttonOrder" },
    eventListeners: { click: changeColorsOrder },
  });

  let myColors = ["pink", "red", "green", "blue", "orang", "black"];
  let currentIndex = 0;

  function changeColorsOrder() {
    document.body.style.backgroundColor = myColors[currentIndex];
    currentIndex = (currentIndex + 1) % myColors.length;
  }

  document.body.append(button);
}
export default changeColorOrder;
