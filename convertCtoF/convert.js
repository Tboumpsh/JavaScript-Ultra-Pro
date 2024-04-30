import domGenerator from "dom-generator";
import "./index.scss";

function temperatureConvert() {
  let convert = domGenerator({
    tag: "div",
    attributes: { id: "parent" },
    children: [
      {
        tag: "h1",
        attributes: { id: "title" },
        properties: { textContent: "Convert Celsius To Fahrenheit" },
      },
      {
        tag: "input",
        attributes: { id: "input", type: "text" },
      },
      {
        tag: "button",
        attributes: { id: "ctaB" },
        properties: { textContent: "Convert" },
        eventListeners: { click: convertTo },
      },
    ],
  });
  function convertTo() {}
  document.body.append(convert);
}

export default temperatureConvert;
