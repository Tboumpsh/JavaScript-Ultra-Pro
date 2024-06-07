import domGenerator from "dom-generator";

import buttonGenerator from "../../component/buttonComponent/buttonsComponent";
import selectGenerator from "../../component/selectComponent/selectComponent";
import inputGenerator from "../../component/inputComponent/inputComponent";
import labelGenerator from "../../component/lableComponent/labelComponent";
import silverBox from "/src/Lib/silverBox/silverBox.min";
import typeOfCars from "../data/objectInformationCars";
import checkType from "./checkTypeData";

function formInsurance() {
  let forms = domGenerator({
    tag: "form",
    attributes: { id: "insuranceForm" },
    eventListeners: { submit: (e) => e.preventDefault() },
    children: [
      {
        tag: selectGenerator({
          size: "large",
          status: "primary",
          className: "selectOptionCarYear",
          id: "year",
        }),
      },
      {
        tag: selectGenerator({
          size: "large",
          status: "primary",
          className: "selectOptionCarName",
          id: "carName",
          // eventListeners:{},
        }),
        // children: [],
      },
      {
        tag: "div",
        attributes: { id: "radioSection" },
        dataAttributes: { type: "body" },
        children: [
          {
            tag: "div",
            attributes: { id: "radioSectionUP" },
            children: [
              {
                tag: labelGenerator({
                  content: "Body insurance",
                  size: "medium",
                  status: "primary",
                }),
              },
              {
                tag: inputGenerator({
                  inputId: "two",
                  type: "radio",
                  // eventListeners:{},
                  size: "medium",
                  statues: "primary",
                  eventListeners: { change: checkType },
                }),
                // attributes: { id: "one" },
                properties: { name: "IC", checked: "true" },
              },
            ],
          },
          {
            tag: "div",
            attributes: { id: "radioSectionDown" },
            children: [
              {
                tag: labelGenerator({
                  content: "Third party insurance",
                  size: "medium",
                  status: "primary",
                }),
              },
              {
                tag: inputGenerator({
                  inputId: "third",
                  type: "radio",
                  size: "medium",
                  statues: "primary",
                  eventListeners: { change: checkType },
                }),
                properties: { name: "IC" },
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "buttonsSection" },
        children: [
          {
            tag: buttonGenerator({
              content: "calculate",
              size: "large",
              status: "primary",
              className: "calculateButton",
              eventListeners: { click: showResult },
            }),
            // attributes: { id: "calculateButton" },
            // properties: { textContent: "action" },
          },
          {
            tag: inputGenerator({
              inputId: "one",
              type: "reset",
              // eventListeners:{},
              size: "large",
              statues: "resetInput",
            }),
          },
        ],
      },
    ],
  });

  function showResult() {
    let parentRadioSection = document.getElementById("radioSection");
    let insuranceType = parentRadioSection.dataset.type;
    let base_price = insuranceType == "third" ? 3_500_000 : 2_500_000;
    let year = document.getElementById("year");
    let carName = document.getElementById("carName");

    //  get value

    let nowYear = new Date().getUTCFullYear();
    // rato year

    if (Number(year.value) < nowYear) {
      let result = nowYear - Number(year.value);
      let ratoYear = result * 1.2;
      base_price *= ratoYear * typeOfCars[carName.value];
    }
    silverBox({
      customIcon: "https://images.vexels.com/media/users/3/135880/isolated/preview/aed603eafeda47aaca93b292db4a9141-electric-car-circle-icon.png",
      title: {
        text:
          insuranceType == "third"
            ? "Third party insurance "
            : "Body Insurance",
      },
      text: 'price:' + Math.floor(base_price).toLocaleString(),
      centerContent: true,
      showCloseButton: true,
    });
  }
  return forms;
}
export default formInsurance;
