import domGenerator from "dom-generator";
import "./index.scss";

import emailValidation from "./emailValidation";
import changeButton from "./sendButton";
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
            tag: "button",
            attributes: { id: "submit" },
            properties: { textContent: "DOM-Generator" },
            eventListeners: { click: sendButton },
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

  function checkInputValidation(): void {
    let text: any = document.getElementById("inputText");
    let password: any = document.getElementById("inputPassword");
    let gmail: any = document.getElementById("inputEmail");

    checkLength(text);
    checkLength(password);
    emailValidation(gmail);
    checkLength(gmail);
  }
  // send button
  function sendButton(): void {
    let error = document.getElementsByClassName("error");
    if (error.length === 0) {
      changeButton();
    } else {
      confirm(
        "Dear friend, I see an error, please check the fields and make sure they are correct and filled."
      );
    }
  }

  document.body.append(email);
}
export default sendEmailType;
