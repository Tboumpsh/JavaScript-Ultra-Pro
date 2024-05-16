import domGenerator from "dom-generator";
import "./index.scss";

import emailValidation from "./emailValidation";
import checkLength from "./checkLength";

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
            attributes: {
              id: "inputText",
              type: "text",
              placeholder: "Input massage",
            },
            eventListeners: { blur: checkInputValidation },
          },
          {
            tag: "input",
            attributes: {
              id: "inputEmail",
              type: "email",
              placeholder: "Input Email",
            },
            eventListeners: { blur: checkInputValidation },
          },
          {
            tag: "input",
            attributes: {
              id: "inputPassword",
              type: "password",
              placeholder: "Input password",
            },
            eventListeners: { blur: checkInputValidation },
          },
          {
            tag: "input",
            attributes: { id: "submit", type: "submit" },
          },
        ],
      },
    ],
  });

  document.addEventListener("DOMContentLoaded", renderPage);
  // dom content loaded
  function renderPage() {
    mainFunction();
  }
  //   main function
  function mainFunction() {
    checkInputValidation();
  }
  //   blur function
  function checkInputValidation(this): void {
    let text = document.getElementById("inputText");
    let password = document.getElementById("inputPassword");
    let gmail = document.getElementById("inputEmail");

    checkLength(text);
    checkLength(password);

    emailValidation(gmail);
    checkLength(gmail);
  }

  document.body.append(email);
}
export default sendEmailType;
