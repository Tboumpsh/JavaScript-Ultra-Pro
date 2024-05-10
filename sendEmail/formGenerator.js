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

  let count = 0;

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
          count++;
        } else {
          inputEmail.setAttribute("data-status", "failedInput");
          count--;
        }
      } else {
        inputEmail.setAttribute("data-status", "failedInput");
        count--;
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

  function checkSubject() {
    let inputSubject = document.getElementById("inputSubject");
    let type = inputSubject.type;
    if (type === "text") {
      if (inputSubject.value !== "") {
        inputSubject.setAttribute("data-status", "checkedInput");
        count++;
      } else {
        inputSubject.setAttribute("data-status", "failedInput");
        inputSubject.value = "undefined";
        count--;
      }
    }
  }

  function checkMessage() {
    let inputMessage = document.getElementById("inputMessage");
    let type = inputMessage.type;
    if (type === "text") {
      if (inputMessage.value !== "") {
        inputMessage.setAttribute("data-status", "checkedInput");
        count++;
      } else {
        inputMessage.setAttribute("data-status", "failedInput");
        count--;
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
  function sendEmails() {
    if (count == 3) {
      let loading = document.getElementById("loading");
      loading.setAttribute("data-status", "load");
      setTimeout(() => {
        loading.setAttribute("data-status", "send");
      }, 3000);
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
  function RefreshEmails() {
    // history.go(0);
    let form = document.getElementById("formValidation");
    form.reset();
    count = -3;
  }
  return form;
}
export default formGenerator;
