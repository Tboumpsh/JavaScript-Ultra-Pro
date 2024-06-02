import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./component/buttonComponent/buttonsComponent";
import selectGenerator from "./component/selectComponent/selectComponent";
import inputGenerator from "./component/inputComponent/inputComponent";
import labelGenerator from "./component/lableComponent/labelComponent";

function formInsurance() {
  let forms = domGenerator({
    tag: "form",
    attributes: { id: "insuranceForm" },
    children: [
      {
        tag: selectGenerator({
          size: "large",
          status: "primary",
          className: "selectOptionCarYear",
          // eventListeners:{},
        }),
        // children: [],
      },
      {
        tag: selectGenerator({
          size: "large",
          status: "primary",
          className: "selectOptionCarName",
          // eventListeners:{},
        }),
        // children: [],
      },
      {
        tag: "div",
        attributes: { id: "radioSection" },
        children: [
          {
            tag: "div",
            attributes: { id: "radioSectionUP" },
            children: [
              {
                tag: labelGenerator({
                  content: "insurance",
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
                }),
                // attributes: { id: "one" },
                properties: { name: "IC" },
              },
            ],
          },
          {
            tag: "div",
            attributes: { id: "radioSectionDown" },
            children: [
              {
                tag: labelGenerator({
                  content: "insurance",
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
                }),
                properties: { name: "IC" },
                // attributes: { id: "one" },
                // properties: { type: "radio" },
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
              content: "click button",
              size: "large",
              status: "primary",
              className: "calculateButton",
              // eventListeners: {},
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
            // attributes: { id: "one" },
            // properties: { type: "radio" },
          },
        ],
      },
    ],
  });
  return forms;
}
export default formInsurance;
