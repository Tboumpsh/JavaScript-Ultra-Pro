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
        attributes: { id: "headerSection" },
      },
      {
        tag: "form",
        attributes: { id: "typeForm" },
        eventListeners: { submit: (e) => e.preventDefault() },
        children: [
          {
            tag: "input",
            attributes: { id: "inputText", type: "text" , placeholder:'Input massage' },
          },
          {
            tag: "input",
            attributes: { id: "inputEmail", type: "email" , placeholder:'Input Email'},
          },
          {
            tag: "input",
            attributes: { id: "inputPassword", type: "password", placeholder:'Input password' },
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
