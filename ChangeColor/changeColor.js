import domGenerator from "dom-generator";

function changeColor() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "button" },
    eventListeners: { click: changeColors },
  });

  function changeColors() {}

  //   return button
  document.body.append(button);
}

export default changeColor;
