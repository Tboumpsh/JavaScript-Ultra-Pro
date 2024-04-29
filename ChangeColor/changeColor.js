import domGenerator from "dom-generator";
import "./index.scss";

function changeColor() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "button" },
    eventListeners: { click: changeColors },
  });

  let variable = 0;
  function changeColors() {
    variable = (variable + 1) % 2;
    if (variable == 0) {
      document.body.style.backgroundColor = "rgb(255, 174, 0)";
    } else if (variable == 1) {
      document.body.style.backgroundColor = "black";
    }
  }

    return button
//   document.body.append(button);
}

export default changeColor;
