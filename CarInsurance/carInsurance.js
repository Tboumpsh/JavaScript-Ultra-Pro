import domGenerator from "dom-generator";
import "./src/styles/index.scss";

import createOptionsCarNames from "./src/js/createOptionsName";
import createOptionYear from "./src/js/createOption";
import formInsurance from "./src/js/formInsurancs";

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
  }
  document.body.append(insurance);
}
export default carInsurance;
