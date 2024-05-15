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
            attributes: {
              id: "inputText",
              type: "text",
              placeholder: "Input massage",
            },
            eventListeners: { blur: checkTexts },
          },
          {
            tag: "input",
            attributes: {
              id: "inputEmail",
              type: "email",
              placeholder: "Input Email",
            },
            eventListeners: { blur: checkEmail },
          },
          {
            tag: "input",
            attributes: {
              id: "inputPassword",
              type: "password",
              placeholder: "Input password",
            },
            eventListeners: { blur: checkPassword },
          },
          {
            tag: "input",
            attributes: { id: "submit", type: "submit" },
          },
        ],
      },
    ],
  });

  function checkTexts() {
    let text: any = document.getElementById("inputText");
    console.log(text);
  }
  checkTexts();

  function checkEmail() {
    let gmail: any = document.getElementById("inputEmail");
    console.log(gmail);
  }
  checkEmail();

  function checkPassword() {
    let password: any = document.getElementById("inputPassword");
    console.log(password);
  }
  checkPassword();

  document.body.append(email);
}
export default sendEmailType;
