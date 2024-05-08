import domGenerator from "dom-generator";
import "./index.scss";

import formGenerator from "./formGenerator";

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
            tag: formGenerator(),
          },
        ],
      },
    ],
  });

  document.body.append(send);
}
export default sendEmail;
