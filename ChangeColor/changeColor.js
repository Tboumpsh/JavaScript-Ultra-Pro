import domGenerator from "dom-generator";
import "./index.scss";

import fixedColor from "./fixedColor";

function changeColor() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "button" },
    eventListeners: { click: changeColors },
  });

  function changeColors() {
    fixedColor("black", "red");
  }

  document.body.append(button);
}

export default changeColor;
