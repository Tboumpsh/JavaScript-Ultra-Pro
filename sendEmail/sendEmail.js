import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./components/buttonComponents/buttonComponent";
import inputGenerator from "./components/inputComponents/inputComponent";

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
                      type: "button",
                      class: "buttonRefresh",
                      eventListeners: { click: RefreshEmails },
                    }),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  window.addEventListener("DOMContentLoaded", startAction);
  function startAction() {}
  // inputEmail.value = "";
  // inputMessage.value = "";
  // inputSubject.value = "";
  let count = 0;

  function checkEmail() {
    let inputEmail = document.getElementById("inputEmail");
    let type = inputEmail.type;
    if (type === "email") {
      if (inputEmail.value !== "") {
        if (inputEmail.value.includes("@")) {
          inputEmail.setAttribute("data-status", "checkedInput");
          count++;
        } else {
          inputEmail.setAttribute("data-status", "failedInput");
          count--;
        }
      } else {
        inputEmail.setAttribute("data-status", "failedInput");
        alert("Please enter your email");
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
        alert("Please enter yor message");
      }
    }
  }
  function sendEmails() {
    console.log(count);
    if (count == 3) {
      alert("send");
    } else {
      alert("not send");
    }
  }
  function RefreshEmails() {
    let inputMessage = document.getElementById("inputMessage");
    let inputSubject = document.getElementById("inputSubject");
    let inputEmail = document.getElementById("inputEmail");
    inputEmail.value = "";
    inputSubject.value = "";
    inputMessage.value = "";
  }

  startAction();
  document.body.append(send);
}
export default sendEmail;
