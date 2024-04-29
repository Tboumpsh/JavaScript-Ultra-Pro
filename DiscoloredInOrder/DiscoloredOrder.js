function changeColorOrder() {
  let button = domGenerator({
    tag: "button",
    properties: { textContent: "Change me" },
    attributes: { id: "buttonOrder" },
    eventListeners: { click: changeColors },
  });

  return button;
  //   document.body.append(button);
}
