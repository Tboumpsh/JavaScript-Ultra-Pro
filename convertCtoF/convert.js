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
        attributes: {
          id: "input",
          type: "text",
          placeholder: "Convert C To F",
        },
      },
      {
        tag: "button",
        attributes: { id: "ctaB" },
        properties: { textContent: "Convert" },
        eventListeners: { click: convertTo },
      },
      {
        tag: "p",
        attributes: { id: "score" },
      },
    ],
  });

  function convertTo() {
    let p = document.getElementById("score");
    let input = document.getElementById("input");
    p.innerText = "";
    let target = input.value;

    let Fahrenheit = target * 1.8 + 32;
    p.innerText += Fahrenheit;
    input.value = "";
  }
  document.body.append(convert);
}

export default temperatureConvert;
