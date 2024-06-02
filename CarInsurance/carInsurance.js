import domGenerator from "dom-generator";
import "./index.scss";

import createOptionsCarNames from "./createOptionsName";
import createOptionYear from "./createOption";
import formInsurance from "./formInsurancs";
import checkOptions from "./checkOption";

function carInsurance() {
  let insurance = domGenerator({
    tag: "div",
    attributes: { id: "insuranceBackground" },
    children: [
      {
        tag: "section",
        attributes: { id: "insuranceSection" },
        children: [
          {
            tag: "h1",
            attributes: { id: "formInsuranceTitle" },
            properties: { textContent: "form generator" },
          },
          {
            tag: formInsurance(),
          },
        ],
      },
    ],
  });
  document.addEventListener("DOMContentLoaded", renderCars);
  function renderCars() {
    createOptionYear();
    createOptionsCarNames();
    checkOptions();
  }
  document.body.append(insurance);
}
export default carInsurance;
