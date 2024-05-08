import domGenerator from "dom-generator";
import "./index.scss";

import formGenerator from "./formGenerator";

/**
 * Generates and appends a form to the document body for sending an email.
 *  @returns {void}
 */
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
