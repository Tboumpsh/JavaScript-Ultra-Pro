import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./components/buttonComponents/buttonComponent";
import inputGenerator from "./components/inputComponents/inputComponent";

function sendEmail() {
  let send = domGenerator({
    tag: "section",
    attributes: { id: "section" },
    children: [
      {
        tag: "div",
        attributes: { id: "mainDiv" },
        children: [
          {
            tag: "form",
            attributes: { id: "formValidation" },
            children: [
              {
                tag: inputGenerator({
                  id: "inputEmail",
                  placeholder: "email",
                  type: "email",
                  fontSize: "medium",
                  size: "large",
                  statues: "mainInput",
                }),
              },
              {
                tag: inputGenerator({
                  id: "inputSubject",
                  placeholder: "subject",
                  type: "text",
                  fontSize: "medium",
                  size: "large",
                  statues: "mainInput",
                }),
              },
              {
                tag: inputGenerator({
                  id: "inputMessage",
                  placeholder: "message",
                  type: "text",
                  fontSize: "medium",
                  size: "large",
                  statues: "mainInput",
                }),
              },
              {
                tag: "div",
                attributes: { id: "buttonsSection" },
                children: [
                  {
                    tag: buttonGenerator({
                      content: "sendEmail",
                      size: "medium",
                      statues: "primary",
                      type: "button",
                      class: "buttonPrimary",
                      eventListeners: { click: () => console.log("Hi!") },
                    }),
                  },
                  {
                    tag: buttonGenerator({
                      content: "send",
                      size: "medium",
                      statues: "Refresh",
                      type: "button",
                      class: "buttonRefresh",
                      eventListeners: { click: () => console.log("Hi!") },
                    }),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  document.body.append(send);
}
export default sendEmail;
