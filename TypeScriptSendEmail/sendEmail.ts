import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates and appends a form to the document body for sending an email.
 *  @returns {void}
 */
function sendEmailType() {
  let email = domGenerator({
    tag: "section",
    attributes: { id: "parentSection" },
    children: [
      {
        tag: "h1",
        properties: { textContent: "SignIn and SignUp" },
      },
      {
        tag: "form",
        attributes: { id: "formValidation" },
        eventListeners: { submit: (e) => e.preventDefault() },
        children: [
          {
            tag: "input",
            attributes: { id: "inputText", type: "text" },
          },
          {
            tag: "input",
            attributes: { id: "inputEmail", type: "email" },
          },
          {
            tag: "input",
            attributes: { id: "inputPassword", type: "password" },
          },
          {
            tag: "input",
            attributes: { id: "submit", type: "submit" },
          },
        ],
      },
    ],
  });
  document.body.append(email);
}
export default sendEmailType;
