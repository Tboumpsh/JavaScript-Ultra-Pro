import "../src/Lib/silverBox/silverBox.min.scss";
import domGenerator from "dom-generator";
import "./index.scss";

import silverBox from "../src/Lib/silverBox/silverBox.min.js";
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
            properties: { textContent: "Send" },
            eventListeners: { click: sendButton },
          },
        ],
      },
    ],
  });

  /**
   * Validates various input fields on the page.
   *
   * This function retrieves specific input elements by their IDs and performs validation on each:
   * - It checks the length of the text and password inputs to ensure they are not empty.
   * - It validates the email input for a valid email format.
   * - It also checks the length of the email input to ensure it is not empty.
   *
   * @function checkInputValidation
   * @returns {void}
   */
  function checkInputValidation(e): void {
    let findTarget = {
      inputText: () => checkLength(e.target),
      inputPassword: () => checkLength(e.target),
      inputEmail: () => emailValidation(e.target),
    };

    findTarget[e.target.id]();
  }
  /**
   * Handles the action when the send button is clicked.
   *
   * This function checks for the presence of any error elements on the page.
   * If no error elements are found, it calls the `changeButton` function to update the button's appearance.
   * If error elements are found, it displays a confirmation message urging the user to check and fill out the fields correctly.
   *
   * @function sendButton
   * @returns {void}
   * @example
   * sendButton();
   */
  function sendButton(): void {
    let error = document.getElementsByClassName("checked");
    let input = document.getElementsByTagName("input");
    if (error.length == input.length - 1) {
      changeButton();
    } else {
      confirm(
        "Dear friend, I see an error, please check the fields and make sure they are correct and filled."
      );
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "Please enter your message.",
        centerContent: true,
        showCloseButton: true,
      });
    }
  }

  document.body.append(email);
}
export default sendEmailType;
