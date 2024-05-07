import domGenerator from "dom-generator";
import "./index.scss";

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
                tag:'div',
                attributes:{id:'buttonsSection'},
                // children:[
                //   {

                //   }
                // ]
              }
            ],
          },
        ],
      },
    ],
  });

  document.body.append(send);
}
export default sendEmail;
