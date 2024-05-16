import domGenerator from "dom-generator";
import "./silverBox/silverBox.min.scss";
import "./index.scss";

import buttonGenerator from "./components/buttonComponents/buttonComponent";
import inputGenerator from "./components/inputComponents/inputComponent";

/**
 * Generates a form for sending an email.
 *
 * @returns {HTMLFormElement} The generated form element.
 */
function formGenerator() {
  const INPUT_COUNT = 3;
  let form = domGenerator({
    tag: "form",
    attributes: { id: "formValidation" },
    eventListeners: { submit: (e) => e.preventDefault() },
    children: [
      {
        tag: inputGenerator({
          inputId: "inputEmail",
          placeholder: "email",
          type: "email",
          fontSize: "medium",
          size: "large",
          statues: "mainInput",
          eventListeners: { blur: checkEmail },
        }),
      },
      {
        tag: inputGenerator({
          inputId: "inputSubject",
          placeholder: "subject",
          type: "text",
          fontSize: "medium",
          size: "large",
          statues: "mainInput",
          eventListeners: { blur: checkSubject },
          minLength: 2,
          maxLength: 15,
        }),
      },
      {
        tag: inputGenerator({
          inputId: "inputMessage",
          placeholder: "message",
          type: "text",
          fontSize: "medium",
          size: "large",
          statues: "mainInput",
          eventListeners: { blur: checkMessage },
          minLength: 1,
          maxLength: 600,
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
              eventListeners: { click: sendEmails },
            }),
          },
          {
            tag: buttonGenerator({
              content: "Refresh",
              size: "medium",
              statues: "Refresh",
              type: "reset",
              class: "buttonRefresh",
              eventListeners: { click: RefreshEmails },
            }),
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "loading" },
      },
    ],
  });
  /**
   * checkEmail function to validate an email input and update its status.
   *
   * This function performs the following actions:
   * 1. Retrieves the input element with the id "inputEmail".
   * 2. Checks the type of the input element.
   * 3. If the type is "email", it performs the following checks:
   *    - If the input's value is non-empty and contains "@" and a dot ("."):
   *        - Sets the "data-status" attribute to "checkedInput" and adds the "check" class to the input element.
   *    - If the input's value is non-empty but fails the email format check:
   *        - Sets the "data-status" attribute to "failedInput".
   *    - If the input's value is empty:
   *        - Sets the "data-status" attribute to "failedInput" and triggers an alert using the silverBox function with a specified message.
   *
   * @function checkEmail
   * @global
   * @example
   */
  function checkEmail() {
    let inputEmail = document.getElementById("inputEmail");
    let type = inputEmail.type;
    if (type === "email") {
      if (inputEmail.value !== "") {
        if (
          inputEmail.value.includes("@") &&
          inputEmail.value.indexOf(".") !== -1
        ) {
          inputEmail.setAttribute("data-status", "checkedInput");
          inputEmail.classList.add("check");
        } else {
          inputEmail.setAttribute("data-status", "failedInput");
        }
      } else {
        inputEmail.setAttribute("data-status", "failedInput");
        silverBox({
          position: "top-right",
          alertIcon: "info",
          text: "Please enter your email address.",
          centerContent: true,
          showCloseButton: true,
        });
      }
    }
  }
  /**
   * checkSubject function to validate an input subject and update its status.
   *
   * This function performs the following actions:
   * 1. Retrieves the input element with the id "inputSubject".
   * 2. Checks the type of the input element.
   * 3. If the type is "text", it checks if the input's value is non-empty:
   *    - If the input's value is non-empty, it sets the "data-status" attribute to "checkedInput" and adds the "check" class to the input element.
   *    - If the input's value is empty, it sets the "data-status" attribute to "failedInput" and changes the input's value to "undefined".
   *
   * @function checkSubject
   * @global
   * @example
   */
  function checkSubject() {
    let inputSubject = document.getElementById("inputSubject");
    let type = inputSubject.type;
    if (type === "text") {
      if (inputSubject.value !== "") {
        inputSubject.setAttribute("data-status", "checkedInput");
        inputSubject.classList.add("check");
      } else {
        inputSubject.setAttribute("data-status", "failedInput");
        inputSubject.value = "undefined";
      }
    }
  }
  /**
   * checkMessage function to validate an input message and update its status.
   *
   * This function performs the following actions:
   * 1. Retrieves the input element with the id "inputMessage".
   * 2. Checks the type of the input element.
   * 3. If the type is "text", it checks if the input's value is non-empty:
   *    - If the input's value is non-empty, it sets the "data-status" attribute to "checkedInput" and adds the "check" class to the input element.
   *    - If the input's value is empty, it sets the "data-status" attribute to "failedInput" and triggers an alert using the silverBox function with a specified message.
   *
   * @function checkMessage
   * @global Specifies that this function affects the global scope.
   * @example
   */
  function checkMessage() {
    let inputMessage = document.getElementById("inputMessage");
    let type = inputMessage.type;
    if (type === "text") {
      if (inputMessage.value !== "") {
        inputMessage.setAttribute("data-status", "checkedInput");
        inputMessage.classList.add("check");
      } else {
        inputMessage.setAttribute("data-status", "failedInput");
        silverBox({
          position: "top-right",
          alertIcon: "info",
          text: "Please enter your message.",
          centerContent: true,
          showCloseButton: true,
        });
      }
    }
  }
  /**
   * sendEmails function to validate input fields and simulate sending emails.
   *
   * This function performs the following actions:
   * 1. Retrieves all input elements and elements with the class "check".
   * 2. If the number of elements with the class "check" is equal to the number of input elements minus one,
   *    it changes the "data-status" attribute of the element with id "loading" to "load",
   *    then to "send" after 3 seconds, and finally to "default" after 7 seconds,
   *    followed by calling the RefreshEmails function.
   * 3. If the validation fails, it triggers an alert using the silverBox function
   *    with a specified error message.
   *
   * @function sendEmails
   * @global
   * @example
   */
  function sendEmails() {
    let inputs = document.getElementsByTagName("input");
    let check = document.getElementsByClassName("check");
    if (check.length == inputs.length - 1) {
      let loading = document.getElementById("loading");
      loading.setAttribute("data-status", "load");
      setTimeout(() => {
        loading.setAttribute("data-status", "send");
      }, 3000);

      setTimeout(() => {
        loading.setAttribute("data-status", "default");
        RefreshEmails();
      }, 7000);
    } else {
      silverBox({
        alertIcon: "error",
        text: "Please check the entered information, you may not have a field wrong or filling out.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    }
  }
  /**
   * RefreshEmails function to reset a form and update input elements.
   *
   * This function performs the following actions:
   * 1. Resets the form with the id "formValidation".
   * 2. Sets a global variable `count` to 0.
   * 3. Retrieves all input elements on the page and sets their "data-status" attribute to "mainInput".
   * 4. Logs each input element to the console.
   *
   * @function RefreshEmails
   * @global
   */
  function RefreshEmails() {
    let form = document.getElementById("formValidation");
    form.reset();
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("data-status", "mainInput");
      console.log(inputs[i]);
    }
  }

  return form;
}
export default formGenerator;
